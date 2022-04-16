-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name 
FROM users
ORDER BY last_name;



-- Exercise 4
SELECT id, user_id, image_url 
FROM posts
WHERE user_id=26;



-- Exercise 5
SELECT id, user_id, image_url 
FROM posts
WHERE user_id=26
OR user_id=12;



-- Exercise 6
SELECT COUNT(id)
FROM posts;



-- Exercise 7
SELECT user_id, COUNT(id)
FROM comments
GROUP BY user_id
ORDER BY COUNT(id) DESC;



-- Exercise 8
SELECT posts.id, user_id, posts.image_url 
FROM posts
INNER JOIN users ON users.id=posts.user_id
WHERE user_id=26
OR user_id=12;


-- Exercise 9
SELECT posts.id, posts.pub_date, posts.user_id
FROM posts
INNER JOIN following ON following.following_id=posts.user_id
WHERE following.user_id=26;



-- Exercise 10




-- Exercise 11
INSERT INTO bookmarks (user_id, post_id, timestamp)
VALUES (26, 219, CURRENT_TIMESTAMP);

INSERT INTO bookmarks (user_id, post_id, timestamp)
VALUES (26, 220, CURRENT_TIMESTAMP);

INSERT INTO bookmarks (user_id, post_id, timestamp)
VALUES (26, 221, CURRENT_TIMESTAMP);



-- Exercise 12
DELETE FROM bookmarks WHERE user_id=26 AND post_id=219;

DELETE FROM bookmarks WHERE user_id=26 AND post_id=220;

DELETE FROM bookmarks WHERE user_id=26 AND post_id=221;



-- Exercise 13
UPDATE users
SET email='knick2022@gmail.com'
WHERE id=26;



-- Exercise 14
