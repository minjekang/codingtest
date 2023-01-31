function solution(order) {
  var answer = 0;
  for (var r of String(order)) {
    if (r == "3" || r == "6" || r == "9") {
      answer++;
    }
  }
  return answer;
}
