# Write your MySQL query statement below
SELECT
    user_id buyer_id
    , join_date join_date
    , (
        SELECT
            COUNT(o.order_id)
        FROM Orders o
        WHERE o.buyer_id = user_id AND Year(o.order_date) = 2019
    ) orders_in_2019
FROM Users