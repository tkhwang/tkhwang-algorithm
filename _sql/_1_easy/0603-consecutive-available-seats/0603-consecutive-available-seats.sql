# Write your MySQL query statement below
SELECT DISTINCT c2.seat_id
FROM 
    Cinema c2
    , (
    SELECT c1.seat_id
    FROM Cinema c1
    WHERE free = 1
    ) AS free_seats
WHERE c2.free = 1 AND ( c2.seat_id - 1 IN ( free_seats.seat_id ) OR
                        c2.seat_id + 1 IN ( free_seats.seat_id ));
  