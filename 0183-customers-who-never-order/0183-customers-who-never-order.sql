/* Write your T-SQL query statement below */
select Customers from (
  select Customers.name as Customers, Orders.id as orderId  from Customers 
  left join Orders on Customers.id=Orders.customerId
) as t1
where orderId is null