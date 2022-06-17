function solution(nums) {
  var answer = 0;
  let result = []
  for(i of nums){
    if(result.indexOf(i) === -1){
      result.push(i)  
    }
    if(result.length === nums.length/2){
      answer = result.length
      break
    }
  }
  answer = result.length
  return answer;
}

//최대 도출 가능 정답은 nums/2를 전제로, 배열안에 중복값을 제거하는 문제 

//set을 사용하면 간단함..