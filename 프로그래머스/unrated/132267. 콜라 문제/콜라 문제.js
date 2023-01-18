function solution(a, b, n) {
  var answer = 0;
  var r = 0;
  while (n > 1) {
    r = n % a;
    n = parseInt(n / a) * b;
    answer += n;
    if (n == 0) {
      break;
    }
    n += r;
  }

  return answer;
}
