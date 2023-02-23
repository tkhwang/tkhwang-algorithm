// 호텔 방 배정
// Level 4
// https://school.programmers.co.kr/learn/courses/30/lessons/64063#qna

function solution(k, room_number) {
  // hashMap shows better performance than object.
  const availRooms = new Map();

  const find = (room) => {
    if (availRooms.get(room) === undefined) {
      availRooms.set(room, room + 1);
      return room;
    }

    const found = find(availRooms.get(room));
    availRooms.set(room, found + 1);
    return found;
  };

  const res = [];

  for (const requestRoom of room_number) {
    const found = find(requestRoom);
    res.push(found);
  }

  return res;
}
