function solution(participant, completion) {
  const participantSorted = participant.sort();
  const completionSorted = completion.sort();

  for (let i = 0; i < participantSorted.length; i++) {
    if (participantSorted[i] !== completionSorted[i]) {
      return participantSorted[i];
    }
  }
}
