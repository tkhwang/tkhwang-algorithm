# Write your MySQL query statement below
SELECT
    employee_id
    , tbl_team_size.team_size AS team_size
FROM Employee
LEFT JOIN (
    SELECT
        team_id
        , COUNT(employee_id) AS team_size
    FROM Employee
    GROUP BY team_id
) AS tbl_team_size
USING (team_id)