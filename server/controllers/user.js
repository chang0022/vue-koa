const user = require('../models/user');

const getUserInfo = async () => {
  const id = this.params.id;
  const result = await user.getUserById(id);
  this.body = result;
}

module.exports = {
  auth: (router) => {
    router.get('/user/:id', getUserInfo);
  }
}