/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('list', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0"
    },
    content: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: "0"
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    tableName: 'list'
  });
};
