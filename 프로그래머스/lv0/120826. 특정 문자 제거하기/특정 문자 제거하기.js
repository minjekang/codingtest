function solution(my_string, letter) {
  var answer = "";
  for (var a of my_string) {
    if (a !== letter) {
      answer += a;
    }
  }
  return answer;
}
