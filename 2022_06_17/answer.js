function measure(num) {
    let result = true;
    if(num === 1) return false;
    for(var i = 2; i <= num/2; i++) {
    if(num === (i*i)) {
        result = false;
        break;
    }
  }
    return result;
}

function solution(left, right) {
    var answer = 0;
    while(true) {
      measure(left) ? answer += left : answer -= left
      left += 1;
      if(left > right) {
        break;
      }
    }

    return answer;
}

// 제곱수로 나눠 떨어지는 숫자는 약수의 갯수가 홀수가 된다. 이를 찾아서 빼주면 됌. 
// 1의 경우 예외처리 해야함.  