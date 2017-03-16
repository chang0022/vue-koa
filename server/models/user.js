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

const getUserByName = async (name) => {
  return await User.findOne({
    where: {
      user_name: name
    }
  });
};

module.exports = {
  getUserById,
  getUserByName
};
