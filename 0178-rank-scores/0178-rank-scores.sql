/* Write your T-SQL query statement below */

select score,(select count(distinct score) from scores s2 where s2.score>=s1.score ) as rank
from scores as s1
order by s1.score desc