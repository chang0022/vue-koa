const Sequelize = require('sequelize');

const Todolist = new Sequelize('mysql://root:chang48956@localhost/todolist', {
  define: {
    timestamps: false
  }
});

module.exports = {
  Todolist
};
