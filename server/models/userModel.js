const { DataTypes } = require("sequelize");
const sequelize = require("sequelize"); 

const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Unique constraint on the Username field
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Users;
};


module.exports = Users
