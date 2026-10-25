/* Write your T-SQL query statement below */
select Customer.name
from Customer
where Customer.referee_id is null 
or Customer.referee_id != 2