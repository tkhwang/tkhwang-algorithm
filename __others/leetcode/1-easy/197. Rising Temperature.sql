# Write your MySQL query statement below
SELECT w1.id
FROM weather AS w1, weather as w2
WHERE TO_DAYS(w1.RecordDate) - TO_DAYS(w2.RecordDate) = 1 AND w1.temperature > w2.temperature;
