# Write your MySQL query statement below
SELECT
    project_id
    , employee_id
FROM Project
INNER JOIN Employee
USING (employee_id)
WHERE (project_id, experience_years) in (
    SELECT
        project_id
        , MAX(experience_years)
    FROM Project
    INNER JOIN Employee
    USING (employee_id)
    GROUP BY project_id
)    