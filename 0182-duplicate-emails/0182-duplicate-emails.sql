/* Write your T-SQL query statement below */
select Person.email 
from Person 
group By Person.email
having  count(*)>1