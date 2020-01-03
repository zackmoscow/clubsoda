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

  // Seeding our clubs.
  
  Clubs.sync().then(() => {
    Clubs.create({
      club_name: "Tennessee Titans Club",
      club_description: "A meeting place for all fans of the best team in the AFC South.",
      order_: 0
    });
    Clubs.create({
      club_name: "Nashville Predators Club",
      club_description: "Let's do that hockey.",
      order_: 1
    });
    Clubs.create({
      club_name: "Atlanta Braves Club",
      club_description: "Hoping for a return to the glory days of the 1990's!",
      order_: 2
    });
    Clubs.create({
      club_name: "Memphis Grizzlies Club",
      club_description: "Q: Why did Z-Bo retire? A: The streets caught up with him.",
      order_: 3
    });
    Clubs.create({
      club_name: "Star Wars Club",
      club_description: "May the force be with you. Always.",
      order_: 4
    });
    Clubs.create({
      club_name: "Vegetarians Club",
      club_description: "There is no one here.",
      order_: 5
    });
  });
 
  return Clubs;
};