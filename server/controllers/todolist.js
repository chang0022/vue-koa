/**
 * Created by Neo on 2017/3/17.
 */
const todolist = require('../models/todolist');

const getTodolist = async ctx => {
  const id = ctx.params.id;
  ctx.body = await todolist.getTodolistById(id);
};

const createTodolist = async ctx => {
  const data = ctx.request.body;
  const result = await todolist.createTodolist(data);

  ctx.body = {
    success: true
  }
};

const removeTodolist = async ctx => {
  const id = ctx.params.id;
  const user_id = ctx.params.userId;
  const result = await todolist.removeTodolist(id, user_id);

  ctx.body = {
    success: true
  }
};

const updateTodolist = async ctx => {
  const id = ctx.params.id;
  const user_id = ctx.params.userId;
  let status = (ctx.params.status == '0');

  const result = await todolist.updateTodolist(id, user_id, status);

  ctx.body = {
    success: true
  }
};

module.exports = router => {
  router.get('/todolist/:id', getTodolist);
  router.post('/todolist', createTodolist);
  router.delete('/todolist/:userId/:id', removeTodolist);
  router.put('/todolist/:userId/:id/:status', updateTodolist);
};
