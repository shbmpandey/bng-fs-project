-- this will instert data in battle_arena table
INSERT INTO battle_arena (id, coins, upcoming_matches, total_matches, image_link)
VALUES (1, 900000, 45, 510, 'https://drive.google.com/uc?export=view&id=15FfWgHelBfjZ2vEhZBZ2lgKJ9ZOeSn2N')
ON DUPLICATE KEY UPDATE
    coins = VALUES(coins),
    upcoming_matches = VALUES(upcoming_matches),
    total_matches = VALUES(total_matches),
    image_link = VALUES(image_link);


--this will to instert date in games table
INSERT INTO games (id, title, coins, live_users, trending_no, image_link) 
VALUES 
(1, 'guns bottle', 400000, 55000, 1, 'https://drive.google.com/uc?export=view&id=1e8G_nDU5x25ODhLfbSvbdg925tz4DTL2')
ON DUPLICATE KEY UPDATE 
    title = VALUES(title), 
    coins = VALUES(coins), 
    live_users = VALUES(live_users), 
    trending_no = VALUES(trending_no), 
    image_link = VALUES(image_link);

INSERT INTO games (id, title, coins, live_users, trending_no, image_link) 
VALUES 
(2, 'monster up', 55000, 32000, 2, 'https://drive.google.com/uc?export=view&id=1QEGtkNX3uWglMhz0U1kBJcU4aN_fZ1TP')
ON DUPLICATE KEY UPDATE 
    title = VALUES(title), 
    coins = VALUES(coins), 
    live_users = VALUES(live_users), 
    trending_no = VALUES(trending_no), 
    image_link = VALUES(image_link);

INSERT INTO games (id, title, coins, live_users, trending_no, image_link) 
VALUES 
(3, 'knife hit', 300000, 27000, 3, 'https://drive.google.com/uc?export=view&id=1Alp2h7VWjih2clO7OFt9NC2I9sGUU7R6')
ON DUPLICATE KEY UPDATE 
    title = VALUES(title), 
    coins = VALUES(coins), 
    live_users = VALUES(live_users), 
    trending_no = VALUES(trending_no), 
    image_link = VALUES(image_link);

INSERT INTO games (id, title, coins, live_users, trending_no, image_link) 
VALUES 
(4, 'rolling panda', 275000, 3200, 4, 'https://drive.google.com/uc?export=view&id=1VT4sWCH0FSrLiTx3vVkYrbjhmbslf3N3')
ON DUPLICATE KEY UPDATE 
    title = VALUES(title), 
    coins = VALUES(coins), 
    live_users = VALUES(live_users), 
    trending_no = VALUES(trending_no), 
    image_link = VALUES(image_link);

INSERT INTO games (id, title, coins, live_users, trending_no, image_link) 
VALUES 
(5, 'fruite ninja', 950000, 25000, 5, 'https://drive.google.com/uc?export=view&id=1jL64zgV2yVr7CR3nMixmamT0Rg-yPTAg')
ON DUPLICATE KEY UPDATE 
    title = VALUES(title), 
    coins = VALUES(coins), 
    live_users = VALUES(live_users), 
    trending_no = VALUES(trending_no), 
    image_link = VALUES(image_link);

INSERT INTO games (id, title, coins, live_users, trending_no, image_link) 
VALUES 
(6, 'drunk shot', 850000, 32000, 6, 'https://drive.google.com/uc?export=view&id=1fePXwZDHgDsgOP9W15iyvoQArXtzkPct')
ON DUPLICATE KEY UPDATE 
    title = VALUES(title), 
    coins = VALUES(coins), 
    live_users = VALUES(live_users), 
    trending_no = VALUES(trending_no), 
    image_link = VALUES(image_link);

INSERT INTO games (id, title, coins, live_users, trending_no, image_link) 
VALUES 
(7, 'hit knife', 550000, 45000, 7, 'https://drive.google.com/uc?export=view&id=1QEGtkNX3uWglMhz0U1kBJcU4aN_fZ1TP')
ON DUPLICATE KEY UPDATE 
    title = VALUES(title), 
    coins = VALUES(coins), 
    live_users = VALUES(live_users), 
    trending_no = VALUES(trending_no), 
    image_link = VALUES(image_link);






