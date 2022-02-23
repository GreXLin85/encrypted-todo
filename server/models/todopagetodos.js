'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoPageTodos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TodoPageTodos.belongsTo(models.TodoPage, {
        foreignKey: 'todoPageId',
        as: 'todopage'
      });
    }
  }
  TodoPageTodos.init({
    content: DataTypes.TEXT,
    addedPeer: DataTypes.UUID,
    todoPageId: DataTypes.INTEGER,
    isFinished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TodoPageTodos',
  });
  return TodoPageTodos;
};