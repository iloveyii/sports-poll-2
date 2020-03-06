'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    awayName: DataTypes.STRING,
    homeName: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    group: DataTypes.STRING,
    name: DataTypes.STRING,
    sport: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Games"
  });

  Game.associate = function(models) {
    // associations can be defined here
    return Game
  };
  return Game;
};
