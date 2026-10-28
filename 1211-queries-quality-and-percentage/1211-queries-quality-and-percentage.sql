/* Write your T-SQL query statement below */
select query_name,
ROUND(SUM(CAST(rating AS FLOAT) / position) / COUNT(position), 2) as quality,
round(cast(count(
case 
    when rating<3 then 1 
end) as float)*100 /count(*),2)  as poor_query_percentage
from Queries
group by query_name
order by query_name