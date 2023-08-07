'use strict';
module.exports = function(sequelize, DataTypes) {
  const Rooms = sequelize.define('Rooms', {
    RoomId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, 
    },
    BondMonth: {
        type: DataTypes.INTEGER,
        default: 0
    },
    RoomNo: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
    },
    Rent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isReserved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    floorNo: {
        type: DataTypes.INTEGER,
    },
    Dimension: {
        type: DataTypes.STRING,
    },
    Occupancy: {
        type: DataTypes.ENUM("single","double","family"),
        allowNull: false,
        defaultValue: "single" // Corrected from "default" to "defaultValue"
    },
    Balcony: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // Corrected from "default" to "defaultValue"
    },
    Bathroom: {
        type: DataTypes.ENUM("Common", "Attached"),
        defaultValue: "Common" // Corrected from "default" to "defaultValue"
    }
  }, {
    timestamps: false
  });

  Rooms.associate = (models) => {
    Rooms.belongsTo(models.Hostels, {
        foreignKey: {
            name: 'hostelId',
            allowNull: false
        } 
    })
  }

  return Rooms;
};
