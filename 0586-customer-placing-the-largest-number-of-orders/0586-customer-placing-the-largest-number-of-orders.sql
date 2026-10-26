
select top 1 customer_number from(

select Orders.customer_number, count(*) as total_order
from Orders
group by Orders.customer_number

)as temp
order by total_order desc