'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoPage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TodoPage.hasMany(models.TodoPageTodos, {
        foreignKey: 'todoPageId',
        as: 'todos'
      });
    }
  }
  TodoPage.init({
    uuid: DataTypes.UUIDV4,
  }, {
    sequelize,
    modelName: 'TodoPage',
  });
  return TodoPage;
};