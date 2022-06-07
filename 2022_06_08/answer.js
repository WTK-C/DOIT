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