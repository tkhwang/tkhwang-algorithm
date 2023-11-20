# Write your MySQL query statement below
SELECT 
    d1.name AS Department
    , e1.name AS Employee
    , e1.salary AS Salary
FROM Employee e1
JOIN Department d1
    ON e1.departmentId = d1.id
WHERE (e1.departmentId, e1.salary) IN (
    SELECT
        departmentId
        , MAX(salary)
    FROM Employee
    GROUP BY
        departmentId
    HAVING departmentId = e1.departmentId
)    