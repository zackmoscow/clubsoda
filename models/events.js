module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_at: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end_at: {
      type: DataTypes.TIME,
      allowNull: false
    },
    club_id: {
       type: DataTypes.STRING, 
    }
  });
 
  return Events;
};