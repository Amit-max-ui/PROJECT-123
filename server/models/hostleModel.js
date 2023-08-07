const { DataTypes } = require("sequelize");
const sequelize = require("sequelize");

const Hostels = (sequelize, DataTypes) => {
  const Hostels = sequelize.define("Hostels", {
    HostelId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    HostelName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hostelType: {
      type: DataTypes.ENUM("B", "G"),
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    startingPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Hostels.associate = (models) => {
    Hostels.belongsToMany(models.Amenities, {
      through: "HostelAmenities",
      foreignKey: 'hostelId'
    })
    Hostels.hasMany(models.Rooms, {
      foreignKey: {
        name: 'hostelId',
        allowNull: false
      }
    })
  }

  return Hostels;
};

module.exports = Hostels;



// 1. Importing necessary dependencies:
//    - `const { DataTypes } = require("sequelize");`: This line imports the DataTypes object from Sequelize. It's used to define the data types for the model's attributes (columns).
//    - `const sequelize = require("sequelize");`: This line imports the Sequelize instance, which represents the database connection and configuration.

// 2. Defining the Hostels model:
//    - `const Hostels = (sequelize, DataTypes) => { ... }`: This is an arrow function that takes the `sequelize` and `DataTypes` as arguments. Inside this function, we define the Hostels model.

// 3. Defining the Hostels attributes (columns):
//    - The `sequelize.define` method is used to define the Hostels model with various attributes. Each attribute corresponds to a column in the Hostels table in the database.
//    - The `HostelId` attribute is defined as a UUID (Universally Unique Identifier) with a default value generated using `UUIDV4`.
//    - The `HostelName` attribute is defined as a string, and it must be unique (i.e., no two hostels can have the same name).
//    - The `hostelType` attribute is defined as an ENUM with two possible values: "B" and "G". This likely represents the hostel type, where "B" stands for boys' hostel and "G" for girls' hostel.
//    - The `Address` attribute is defined as a string and cannot be null (i.e., it's a required field).
//    - The `Rating` attribute is defined as a floating-point number and cannot be null.
//    - The `startingPrice` attribute is defined as an integer and cannot be null.

// 4. Defining associations (relationships):
//    - The `Hostels.associate` method is used to define associations with other models. In this case, it's defining a Many-to-Many association between the Hostels model and the Amenities model (which should be defined in another file and passed as an argument).
//    - The `belongsToMany` method creates an N:M (Many-to-Many) association between the Hostels and Amenities models, which means a hostel can have multiple amenities, and an amenity can be associated with multiple hostels.
//    - The `through` option specifies the name of the junction table (HostelAmenities) that stores the relationships between hostels and amenities.
//    - The `foreignKey` option specifies the foreign key used in the junction table to link the Hostels model with the Amenities model.

// 5. Returning the Hostels model:
//    - The function returns the Hostels model, making it available to be used in other parts of the application.

// Overall, this code sets up a Hostels model with specific attributes and establishes a Many-to-Many association with the Amenities model using Sequelize. This allows you to perform CRUD (Create, Read, Update, Delete) operations on Hostels and interact with related Amenities easily in a Node.js application connected to a database through Sequelize.