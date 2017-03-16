const db = require('../config/db');
const userModel = '../schema/user.js';
const TodolistDB = db.Todolist;

const User = TodolistDB.import(userModel);

const getUserById = async (id) => {
  return await User.findOne({
    where: {
      id: id
    }
  });
};

module.exports = {
  getUserById
};
