# Write your MySQL query statement below
SELECT name customers
FROM Customers
WHERE id NOT IN (
    SELECT DISTINCT customerId
    FROM Orders
)    