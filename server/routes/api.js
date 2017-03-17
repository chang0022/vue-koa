/**
 * Created by Neo on 2017/3/17.
 */
const todolist = require('../controllers/todolist');
const router = require('koa-router')();

todolist(router);

module.exports = router;
