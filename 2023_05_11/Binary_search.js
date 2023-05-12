/** 이진 탐색(Binary Search)
 * Openzepplin 코드 분석하다가 찾은 알고리즘. ERC20Votes/getPastVotes() 안에 사용되고 있음.
 * 설명 :
    * 정렬된 배열안에서 내가 원하고자 하는 값(target)을 배열의 중간 값(mid)으로부터 비교하여 점차 범위를 줄여가며 target value를 찾아내는 방법 
 * 시간복잡도 : O(log N)
 * 장점 : 
    * 배열의 원소가 늘어나는 것에 비해서 반복 횟수는 비교적 적게 증가하기 때문에 선형 검색(linear search : O(N)) 보다 효율적이다.
 * 단점 :
    * 이진 검색을 사용하기 위해서는 정렬된 배열이 필요.. 따라서 전처리 기능으로 배열의 정렬이 요구될수 있음 -> 이는 또 다른 복잡성이 추가될 수 있음.
    * 범위 검색을 할 수 없다. 유연성이 떨어짐
 * 적용 시나리오 : 대규모 데이터 세트(정렬된)에서 극효과를 발휘 -> 예시 : 전화번호부, 사전, 주소록, 정렬된 대규모 데이터 모든 곳.
 *  */

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid; 
      } else if (arr[mid] < target) {
        start = mid + 1; 
      } else {
        end = mid - 1; 
      }
    }
  
    return -1; 
  }
