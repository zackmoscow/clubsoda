var clubName;

$(document).ready(function() {
  
  var createEventForm = $("form.createEvent");
  var eventNameInput = $("input#newEventNameSelect");
  var eventDayInput = $("input#newEventDay");
  var eventYearInput = $("input#newEventYear");
  var eventMonthInput = $("select#newEventMonth");
  var eventStartInput = $("select#newEventStartTime");
  var eventEndInput = $("select#newEventEndTime");

  function getUserClub() {
    $.get("/api/user_data/", function(data) {
      console.log(data);
    })
    .then(function (data) {
      $(".member-name").text(data.email);
      getClubs(data.club);
      getEvents(data.club);
      clubName = data.club;
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
      $("#clubName").text(data[0].club_name);
      $("#clubDescription").text(data[0].club_description);
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
        $("#eventTable").append("Event: " + data[i].event);
        $("#eventTable").append("<br>");
        $("#eventTable").append("Date: " + data[i].date_of);
        $("#eventTable").append("<br>");
        $("#eventTable").append("Start Time: " + data[i].start_at);
        $("#eventTable").append("<br>");
        $("#eventTable").append("End Time: " + data[i].end_at);
        $("#eventTable").append("<br>");
        $("#eventTable").append("<br>");
      };
    });
  };

  createEventForm.on("submit", function(event) {
    event.preventDefault();
    var eventData = {
      event: eventNameInput.val().trim(),
      date_of: `${eventYearInput.val().trim()}-${eventMonthInput.val().trim()}-${eventDayInput.val().trim()}`,
      start_at: eventStartInput.val(),
      end_at: eventEndInput.val(),
    };

    console.log(eventData);

    if (!eventData.event || !eventData.date_of || !eventData.start_at || !eventData.end_at) {
      return;
    }
    
    postEvent(eventData.event, eventData.date_of, eventData.start_at, eventData.end_at, clubName);
      eventNameInput.val("");
      eventDayInput.val("");
      eventYearInput.val("");
    
  });

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
      .catch(handleEventErr);
  }

  function handleEventErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  getUserClub();

});
