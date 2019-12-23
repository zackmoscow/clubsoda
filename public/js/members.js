$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  function getClubs(club) {
    club_id = club || "";
    if (club_id) {
      club_id = "/?club_id=" + club_id;
    }
    $.get("/api/clubs" + club_id, function(data) {
      console.log(data);
    })
    .then(function (data) {
      clubs = data;
      
    });
  };

  function getEvents(club) {
    club_id = club || "";
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

});
