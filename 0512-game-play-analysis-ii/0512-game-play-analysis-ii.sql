# Write your MySQL query statement below
SELECT
    a1.player_id
    , a1.device_id
FROM Activity a1
WHERE (a1.player_id, a1.event_date) IN (
    SELECT
        a2.player_id
        , MIN(a2.event_date)
    FROM Activity a2
    GROUP BY a2.player_id
)