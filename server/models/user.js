const db = require('../config/db');
const userModel = '../schema/user.js';
const TodolistDB = db.Todolist;

const User = TodolistDB.import(userModel);

const getUserById = async (id) => {
  const userInfo = await User.findOne({
    where: {
      id: id
    }
  });

  return userInfo;
}

module.exports = {
  getUserById
}