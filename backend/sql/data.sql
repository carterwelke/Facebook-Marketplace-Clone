-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM account;
INSERT INTO account (userInfo) VALUES ('{"email": "molly@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.iJufk6Nxx6gAoHRG8t2eHyGgoP2bK4y", "name": "Molly Member"}');

DELETE FROM listing;
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80", "description": "BMW 435i Good Condition Used}');
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://images.hgmsites.net/hug/mercedes-benz-s600-guard_100475149_h.jpg", "description": "Mercedes Benz S600 New Perfect Condition}');
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-109-1611684117.jpg?crop=0.708xw:0.798xh;0.0865xw,0.115xh&resize=640:*", "description": "BMW M5 Good Condition Used}');
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://static.wikia.nocookie.net/rocketleague/images/f/f1/Octane_body_icon.png/revision/latest?cb=20170526223331", "description": "Octane Good Condition Can go Really fast}');
