# Write your MySQL query statement below
SELECT
    stock_name
    , SUM(CASE WHEN operation = "Buy" THEN  -1 * price
           WHEN operation = "Sell" THEN price
      END) capital_gain_loss
FROM Stocks
GROUP BY 
    stock_name