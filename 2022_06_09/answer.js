function solution(sizes) {
    var answer = 0;
  	let firstMax = []
    let secondMax = []
		for ( i of sizes) {
      firstMax.push(Math.max(...i))
      secondMax.push(Math.min(...i))
    }
  	answer = Math.max(...firstMax) * Math.max(...secondMax)
    return answer;
}

// 배열안에 두개의 숫자를 비교해서 큰숫자 뽑고 나머지 숫자끼리 비교한 큰 숫자의 곱한 값