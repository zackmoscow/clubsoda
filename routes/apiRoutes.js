var db = require('../models');
var passport = require('../config/passport');
var compression = require('compression');

module.exports = function(app) {

  // Login
  app.post('/api/login', passport.authenticate('local'), function(req, res) {
    res.json(req.user);
  });

  // Signup
  app.post('/api/signup', function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      club: req.body.club,
      isAdmin: req.body.isAdmin
    })
      .then(function() {
        res.redirect(307, '/api/login');
      })
      .catch(function(err) {
        console.log(err);
        res.status(401).json(err);
      });
  });

  // Logout
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // Get User Data
  app.get('/api/user_data', function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        club: req.user.club,
        isAdmin: req.user.isAdmin,
        id: req.user.id
      });
    }
  });

  // Get Clubs
  app.get('/api/clubs', function(req, res) {
    db.Clubs.findAll()
      .then(function (result) {
        const data = JSON.parse(JSON.stringify(result));
        res.json(data); 
      });  
  });

  // Get Specific Club
  app.get('/api/clubs/:club_name', function(req, res) {
    console.log(req.params);
    db.Clubs.findAll({
      where: {
        club_name: req.params.club_name
      },
      // include: [db.User]
    }).then(function(result) {
      const data = JSON.parse(JSON.stringify(result));
      console.log("KEY FOR API" + data);
      res.json(data);
    });
  });

  // Get Specific Events
  app.get('/api/events/:club_name', function(req, res) {
    db.Events.findAll({
      where: {
        club_id: req.params.club_name
      },
      order: [
        ['date_of', 'ASC'],
      ],
    })
      .then(function (result) {
        const data = JSON.parse(JSON.stringify(result));
        console.log(data);
        res.json(data); 
      });  
  });

  // Create Event
  app.post('/api/createevent', function(req, res) {
    console.log(req.body);
    db.Events.create({
      event: req.body.event,
      place: req.body.place, 
      date_of: req.body.date_of,
      start_at: req.body.start_at,
      end_at: req.body.end_at,
      club_id: req.body.club_id
    })
      .then(function() {
      })
      .catch(function(err) {
        console.log(err);
        res.status(401).json(err);
      });
  });

};