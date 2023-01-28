function solution(num_list) {
  var answer = [];
  var a = 0,
    b = 0;
  num_list.map((num) => {
    if (num % 2 == 0) {
      a++;
    } else {
      b++;
    }
  });
  answer = [a,b]
  return answer;
}
