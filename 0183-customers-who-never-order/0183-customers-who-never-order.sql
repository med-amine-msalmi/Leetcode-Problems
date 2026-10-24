/* Write your T-SQL query statement below */
select name as Customers from customers 
where Customers.id not in (select customerId from orders )