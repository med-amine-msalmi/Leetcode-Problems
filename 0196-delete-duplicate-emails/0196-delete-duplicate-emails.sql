/* Write your T-SQL query statement below */
/*
DELETE FROM Person 
WHERE id NOT IN (
    SELECT id FROM (
        SELECT MIN(id) AS id 
        FROM Person 
        GROUP BY email
    ) AS temp
);
*/


delete from Person 
where id not in(
    select id 
    from (
        select min(id) as id
        from Person 
        group by email
    ) as t
);