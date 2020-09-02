# Deque
## 소개
덱(**D**ouble-**E**nded **Que**ue, Deque)은 [[ Vector ]]와 비슷하게 메모리를 자동으로 할당하며, 맨 앞과 맨 뒤에서 원소의 삭제 / 삽입을 지원하는 STL Container다.

## Usage

STL Deque에서 지원하는 기능은 다음과 같다.
* 선언 : `deque<int> dq;`
* `i`번째 원소 : `dq[i]`
* 첫 번째 원소 : `dq.front()`
* 마지막 원소 : `dq.back()`
* 시작 `iterator` : `dq.begin()`
* 끝 `iterator` : `dq.end()`
* 원소 개수 : `dq.size()`
* 벡터 크기 `sz`로 재설정 : `dq.resize(sz);`
* 비어있는지 `bool` 값으로 리턴 : `dq.empty()`
* 맨 앞에 원소 추가 : `dq.push_front(x);`
* 맨 뒤에 원소 추가 : `dq.push_back(x);`
* 맨 앞 원소 제거 : `dq.pop_front();`
* 맨 뒤 원소 제거 : `dq.pop_back();`
* 모든 원소 제거 : `v.clear();`

## 관련 알고리즘
* [[ Sliding Window ]]
