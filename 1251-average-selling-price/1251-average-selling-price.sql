/* Write your T-SQL query statement below */
select Prices.product_id,
case 
    when max(unitsSold.units) is null  then 0
    when Sum(unitsSold.units)= 0 then 0
    else 
        ROUND(
            SUM(CAST((Prices.price* UnitsSold.units) as float))
            / SUM(UnitsSold.units),
            2)
end as  average_price
from Prices
left join UnitsSold
on Prices.product_id=UnitsSold.product_id
and  UnitsSold.purchase_date BETWEEN Prices.start_date AND Prices.end_date
group by Prices.product_id