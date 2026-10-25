/* Write your T-SQL query statement below */
select SalesPerson.name 
from SalesPerson 
where SalesPerson.sales_id not in (
    select SalesPerson.sales_id 
    from SalesPerson
    inner join Orders
    on Orders.sales_id=SalesPerson.sales_id 
    inner join Company 
    on Company.com_id=Orders.com_id
    where Company.name='RED'
)