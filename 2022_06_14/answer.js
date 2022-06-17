function solution(s, n) {
    var answer = '';
    for(i of s) {
      if(i.charCodeAt() ==32) {
        answer = answer + ' '
        continue
      }
      if(i.charCodeAt() >= 65 && i.charCodeAt() <= 90 && i.charCodeAt() + n > 90) {
        answer += String.fromCharCode(i.charCodeAt() - (26 -n))
        continue
      }
      if(i.charCodeAt() >= 97 && i.charCodeAt() <= 122 && i.charCodeAt() + n > 122) {
        answer += String.fromCharCode(i.charCodeAt() - (26 -n))
        continue
      }
      answer += String.fromCharCode(i.charCodeAt() + n)
    }
    return answer;
}

//지정된 아스키코드를 사용해 범위에 벗어날시 각 상황을 적용하여 풀이

//출제자의 의도는 정규표현식을 사용하라는 것 같음..