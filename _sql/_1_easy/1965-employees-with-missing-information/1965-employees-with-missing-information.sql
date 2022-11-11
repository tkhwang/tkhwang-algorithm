# Write your MySQL query statement below
SELECT e.employee_id
FROM Employees e
LEFT JOIN Salaries s
USING (employee_id)
WHERE s.salary IS NULL 
UNION
SELECT s2.employee_id
FROM Salaries s2
LEFT JOIN Employees e2
USING (employee_id)
WHERE e2.name IS NULL
ORDER BY employee_id
