'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(User) {
      // this.belongsToOne(User, {
      //   through: 'User',
      //   as: 'user',
      //   foreignKey: 'user_id'
      // });
    }
  }
  Message.init({
    content: DataTypes.STRING,
    publish_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};