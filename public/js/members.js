$(document).ready(function() {
  
  function getUserClub() {
    $.get("/api/user_data/", function(data) {
      console.log(data);
    })
    .then(function (data) {
      getClubs(data.club);
      // getEvents(data.club);
    });
  };

  function getClubs(club) {
    let club_name = club || "";
    if (club_name) {
      club_name = "/?club_name=" + club_name;
      console.log(club_name);
    }
    $.get("/api/clubs/" + club, function(data) {
      console.log(data);
    })
    .then(function (data) {
      $("#memberclub").append(data[0].club_name);
      $("#memberclub").append("<br>")
      $("#memberclub").append(data[0].club_description);
    });
  };

  function getEvents(club) {
    let club_id = club || "";
    if (club_id) {
      club_id = "/?club_id=" + club_id;
    }
    $.get("/api/events" + club_id, function(data) {
      console.log(data);
    })
    .then(function (data) {

    });
  };

  function postEvent(event, date_of, start_at, end_at, club_id) {
    $.post("/api/createevent", {
      event: event,
      date_of: date_of,
      start_at: start_at,
      end_at: end_at,
      club_id: club_id
    })
      .then(function(data) {
        window.location.reload();
      })
      .catch(err);
  }

  getUserClub();

});
