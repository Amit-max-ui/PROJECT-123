// amenities.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("sequelize");

const Amenities = (sequelize, DataTypes) => {
  const Amenities = sequelize.define("Amenities", {
    amenityId: { // Change the column name to 'amenityId'
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    AmenityName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },{ timestamps: false });

  Amenities.associate = (models) => {
    Amenities.belongsToMany(models.Hostels, {
      through: 'HostelAmenities',
      foreignKey: 'amenityId'
    });
  };

  return Amenities;
};

module.exports = Amenities;
