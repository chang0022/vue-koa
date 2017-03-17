const user = require('../models/user');
const jwt = require('jsonwebtoken');

const getUserInfo = async ctx => {
  const id = ctx.params.id;
  ctx.body = await user.getUserById(id);
};

const postUserAuth = async ctx => {
  const data = ctx.request.body;
  const userInfo = await user.getUserByName(data.name);

  if(userInfo != null) {
    if(userInfo.password != data.password) {
      ctx.body = {
        success: false,
        info: '密码错误'
      }
    } else {
      const userToken = {
        name: userInfo.user_name,
        id: userInfo.id
      };
      const secret = 'neo-chang-48956';
      const token = jwt.sign(userToken, secret);
      ctx.body = {
        success: true,
        token: token
      };
    }
  } else {
    ctx.body = {
      success: false,
      info: '用户不存在！'
    };
  }
};

module.exports = {
  auth: router => {
    router.get('/user/:id', getUserInfo);
    router.post('/user', postUserAuth);
  }
};
