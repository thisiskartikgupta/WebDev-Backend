CREATE TABLE clgnet(
    rollno SMALLINT,
    name CHAR(50),
    uid INT,
    marks REAL,
    salary MONEY,
    studentpass BOOLEAN,
    mac MACADDR
);

SELECT * FROM clgnet

INSERT INTO clgnet VALUES (11, 'kartik', 1484, 88.6, 2200000, TRUE, '2C:54:91:88:C9:E3')

INSERT INTO clgnet VALUES (22, 'kartik2', 2484, 28.6, 2200000, TRUE, '2D:54:91:88:C9:E3')

INSERT INTO clgnet VALUES (33, 'kartik3', 3484, 38.6, 3200000, TRUE, '2D:54:91:88:C9:E3')

INSERT INTO clgnet VALUES (74, 'kartik4', 4484, 48.6, 4200000, TRUE, '2D:54:91:88:C9:E3')

INSERT INTO clgnet VALUES (55, 'kartik5', 5484, 58.6, 5200000, TRUE, '2D:54:91:88:C9:E3')

INSERT INTO clgnet VALUES (66, 'kartik6', 6484, 68.6, 6200000, TRUE, '2D:54:91:88:C9:E3')

INSERT INTO clgnet (name, mac) VALUES ('not7', '2d:33:33:22:c1:e5')

SELECT * FROM clgnet

SELECT name, mac from clgnet


