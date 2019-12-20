module.exports = function(sequelize, DataTypes) {
  var Clubs = sequelize.define("Clubs", {
    club_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    club_description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
 
  return Clubs;
};