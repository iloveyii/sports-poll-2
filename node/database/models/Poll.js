'use strict';
module.exports = (sequelize, DataTypes) => {
  const Poll = sequelize.define('Poll', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    gameId: DataTypes.INTEGER,
    loginId: DataTypes.INTEGER,
    checked: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Polls"
  });
  Poll.associate = function(models) {
    // associations can be defined here
  };
  return Poll;
};
