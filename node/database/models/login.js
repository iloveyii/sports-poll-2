'use strict';
module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define('Login', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Logins"
  });
  Login.associate = function(models) {
    // 1-to-many with Game
    models.login.hasMany(models.game, {foreignKey: 'loginId'} )
  };
  return Login;
};
