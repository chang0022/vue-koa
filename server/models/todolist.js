/**
 * Created by Neo on 2017/3/17.
 */
const db = require('../config/db.js');
const todoModel = '../schema/list.js';
const TodolistDB = db.Todolist;

const Todolist = TodolistDB.import(todoModel);

const getTodolistById = async id => {
  return await Todolist.findAll({
    where: {
      user_id: id
    },
    attributes: ['id', 'content', 'status']
  });
};

const createTodolist = async data => {
  await Todolist.create({
    user_id: data.id,
    content: data.content,
    status: data.status
  });
  return true;
};

const removeTodolist = async (id, user_id) => {
  await Todolist.destroy({
    where: {
      id,
      user_id
    }
  });
  return true;
};

const updateTodolist = async (id, user_id, status) => {
  await Todolist.update({
    status
  },{
    where: {
      id,
      user_id
    }
  });
  return true;
};

module.exports = {
  getTodolistById,
  createTodolist,
  removeTodolist,
  updateTodolist
};
