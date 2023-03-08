# Write your MySQL query statement below
SELECT
    name
FROM SalesPerson
WHERE sales_id NOT IN (
    SELECT sales_id
    FROM Orders
        JOIN SalesPerson USING (sales_id)
        JOIN Company USING (com_id)
    WHERE Company.name = 'RED'
)    
    