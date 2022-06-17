function solution(id_list, report, k) {
    let reporting ={} 
    let reported = {}
    let answer = id_list.map(v => 0)
    for(i of report) {
      let temp = i.split(' ')
      if(Object.keys(reporting).some(v => v == temp[0])){
          if(reporting[temp[0]].indexOf(temp[1]) === -1) {
              reporting[temp[0]].push(temp[1])
              if(Object.keys(reported).some(v => v == temp[1])){
                  reported[temp[1]] += 1
                } else {
                    reported[temp[1]] = 1
                }
            }
        } else {
            reporting[temp[0]] = [temp[1]]
            if(Object.keys(reported).some(v => v == temp[1])){
                reported[temp[1]] += 1
            } else {
                reported[temp[1]] = 1
            }
        }
    }
    for(i of id_list) {
        if(reported[i] == k) {
            id_list.forEach((value, j) => {
                if(Object.keys(reporting).some(v => v == value)){
                    if(reporting[value].indexOf(i) !== -1 && reporting[value].indexOf(i) !== undefined){
                        answer[j] += 1
                    } 
                }
            })
        }
    }
    return answer;
}

/*신고한 사람 => 신고 받은 사람 과 신고 받은 사람 => count 을 key value로 object를 만들어서 확인한 후 신고 받은
사람의 count가 k와 일치하는 사람만 골라내는 작업을 유도.. 조건이 너무많아서 복잡함

다시 풀어봐야함 (시간 복잡도 실패)
*/