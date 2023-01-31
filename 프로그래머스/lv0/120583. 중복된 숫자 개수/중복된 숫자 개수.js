function solution(array, n) {
  var answer = 0;
  for (var a of array) {
    if (a === n) {
      answer++;
    }
  }
  return answer;
}
