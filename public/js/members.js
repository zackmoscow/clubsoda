$(document).ready(function() {
  
  function getUserClub() {
    $.get("/api/user_data/", function(data) {
      console.log(data);
    })
    .then(function (data) {
      getClubs(data.club);
      getEvents(data.club);
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
    let club_name = club || "";
    if (club_name) {
      club_name = "/?club_name=" + club_name;
      console.log(club_name);
    }
    $.get("/api/events/" + club, function(data) {
      console.log(data);
    })
    .then(function (data) {
      for (i = 0; i < data.length; i++) {
        $("#events").append(data[i].event);
        $("#events").append("<br>");
        $("#events").append(data[i].date_of);
        $("#events").append("<br>");
        $("#events").append(data[i].start_at);
        $("#events").append("<br>");
        $("#events").append(data[i].end_at);
        $("#events").append("<br>");
      };
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
