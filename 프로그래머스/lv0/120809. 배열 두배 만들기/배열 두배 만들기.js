function solution(numbers) {
    var answer = [];
    numbers.map((num, index) => {
        answer[index] = num * 2
    })
    return answer;
}