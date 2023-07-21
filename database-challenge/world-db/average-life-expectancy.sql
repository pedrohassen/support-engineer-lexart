DROP TABLE IF EXISTS `AverageLifeExpectancy`;

CREATE TABLE AverageLifeExpectancy (
	LifeProm decimal(5,2),
    Region VARCHAR(255)
);

INSERT INTO AverageLifeExpectancy (LifeProm, Region)

SELECT
	ROUND(AVG(LifeExpectancy), 2) AS LifeProm,
	Continent AS Region
FROM
	world.country
GROUP BY
	Continent;
    
SELECT * FROM AverageLifeExpectancy;