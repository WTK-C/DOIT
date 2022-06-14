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