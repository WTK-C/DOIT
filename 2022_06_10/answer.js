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