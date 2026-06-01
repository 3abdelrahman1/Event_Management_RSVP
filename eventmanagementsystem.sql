mariadb -u root -p
Enter password: ****
use eventmanagementsystem;
show tables;
select * from users;
select * from events;
select * from rsvps;
INSERT INTO users (username,email,password,isAdmin,createdAt,updatedAt);
    ->	VALUES ("new","email@gmail","strong",0, NOW(), NOW());
 INSERT INTO rsvps (user_id, event_id, createdAt, updatedAt)
    ->  VALUES (2, 4, NOW(), NOW());
select * from users;
select * from rsvps;
DELETE FROM users WHERE email = 'abdu@gmail.com';
