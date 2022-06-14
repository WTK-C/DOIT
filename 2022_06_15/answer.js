const dic = {
    zero : '0',
    one : '1',
    two : '2',
    three : '3',
    four : '4',
    five : '5',
    six : '6',
    seven : '7',
    eight : '8',
    nine : '9'
}
  
function solution(s) {
  let char = '';
  var answer = '';
  for(i in s) {
      if(s[i].charCodeAt()>=97 && s[i].charCodeAt()<=122) {
          char += s[i]
          if(dic[char]) {
              answer += dic[char]
              char =''
          }
      } else {
        answer += s[i]
      }
    }
  return Number(answer);
}

/* 다른사람이 푼 방법인데 진짜 신박하고 머리가 너무 좋은거 같음 보고 배우자
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
*/