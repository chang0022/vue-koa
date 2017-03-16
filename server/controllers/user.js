const user = require('../models/user');

const getUserInfo = async (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = await user.getUserById(id);
};

module.exports = {
  auth: (router) => {
    router.get('/user/:id', getUserInfo);
  }
};
