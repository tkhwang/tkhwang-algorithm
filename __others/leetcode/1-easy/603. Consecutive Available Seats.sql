SELECT c1.seat_id
FROM cinema AS c1, cinema AS c2
WHERE c1.free = 1 AND c2.free = 1 AND (c2.seat_id = c1.seat_id + 1 OR c2.seat_id = c1.seat_id -1);

SELECT DISTINCT c1.seat_id
FROM cinema AS c1, cinema AS c2
WHERE c1.free = 1 AND c2.free = 1 AND (c2.seat_id = c1.seat_id + 1 OR c2.seat_id = c1.seat_id -1);

SELECT DISTINCT c1.seat_id
FROM cinema AS c1, cinema AS c2
WHERE c1.free = 1 AND c2.free = 1 AND (c2.seat_id = c1.seat_id + 1 OR c2.seat_id = c1.seat_id -1)
ORDER BY c1.seat_id;
