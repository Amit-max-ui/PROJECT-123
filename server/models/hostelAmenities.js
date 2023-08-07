// hostelAmenities.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("sequelize");

const HostelAmenities = (sequelize, DataTypes) => {
  const HostelAmenities = sequelize.define("HostelAmenities", {
    HostelAmenitiesId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    hostelId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    amenityId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, { timestamps: false });


  return HostelAmenities;
};

module.exports = HostelAmenities;
