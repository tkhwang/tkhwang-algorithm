// 베스트앨범
// Level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const N = genres.length;
  const songs = {};
  const totalPlays = {};

  for (let song = 0; song < N; song += 1) {
    const genre = genres[song];
    const play = plays[song];

    if (songs[genre] === undefined) songs[genre] = [];
    if (totalPlays[genre] === undefined) totalPlays[genre] = 0;
    songs[genre].push(song);
    totalPlays[genre] += plays[song];
  }

  const keys = Object.keys(totalPlays);
  keys.sort((a, b) => totalPlays[b] - totalPlays[a]);

  const result = [];

  keys.forEach((genre) => {
    const genreSongs = songs[genre];

    genreSongs.sort((a, b) => plays[b] - plays[a] || a - b);
    result.push(...genreSongs.slice(0, 2));
  });

  return result;
}
