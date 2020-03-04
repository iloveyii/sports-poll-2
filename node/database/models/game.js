'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    awayName: DataTypes.STRING,
    homeName: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    group: DataTypes.STRING,
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    sport: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    return Game
  };
  return Game;
};
