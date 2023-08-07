const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Guests = sequelize.define("Guests", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validates that the emailID is in the correct email format
      },
    },
    aadhar: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: true,
      validate: {
        is: /^\d{12}$/ // Validates that the Aadhar number is exactly 12 digits
      },
    },
    mobileNo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^\d{10}$/ // Validates that the mobile number contains only digits
      },
    },
    Gaurdian: {
      type: DataTypes.STRING,
      validate: {
        is: /^\d{10}$/
      }
    },
  });

  return Guests;
};
