USE clubsoda_db;

INSERT INTO clubs (club_name, club_description, createdAt, updatedAt) values ("Titans Fanclub", "Fans of TN Titans", CURDATE(), CURDATE());
INSERT INTO clubs (club_name, club_description, createdAt, updatedAt) values ("Steelers Fanclub", "Fans of Pittsburgh Steelers", CURDATE(), CURDATE());
INSERT INTO clubs (club_name, club_description, createdAt, updatedAt) values ("NGU Club", "Fans of video games", CURDATE(), CURDATE());

INSERT INTO events (event, date_of, start_at, end_at,  createdAt, updatedAt) values ("Titans Tailgate", "2020-01-09", "6:00am", "5:00pm", CURDATE(), CURDATE());
INSERT INTO events (event, date_of, start_at, end_at,  createdAt, updatedAt) values ("Steelers Tailgate", "2020-02-22", "6:00am", "5:00pm", CURDATE(), CURDATE());
INSERT INTO events (event, date_of, start_at, end_at,  createdAt, updatedAt) values ("NGU bookathon", "2020-01-11", "7:00am", "3:00pm", CURDATE(), CURDATE());