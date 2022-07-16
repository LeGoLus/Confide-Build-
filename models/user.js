"use strict";
const { Model } = require("sequelize");
var DataTypes = require("sequelize/lib/data-types");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      name: DataTypes.STRING(45),
      email: DataTypes.STRING(100),
      roleId: DataTypes.INTEGER(100),
      registration_type: DataTypes.ENUM("email", "google"),
      social_user_id: DataTypes.STRING(30),
      password: DataTypes.STRING(80),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.associate = function(models) {
    models.User.belongsTo(models.Role, { foreignKey: 'roleId' });
    // models.User.hasOne(models.Post);
    // models.User.hasOne(models.Doctor_User, { foreignKey: 'doctorId' });
    // models.User.hasMany(models.Patient, { foreignKey: 'doctorId' });
    // models.User.hasMany(models.Schedule, { foreignKey: 'doctorId' });
    // models.User.hasMany(models.Comment, { foreignKey: 'doctorId' });
  };
  return User;
};
