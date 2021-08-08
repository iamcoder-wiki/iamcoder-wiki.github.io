# Vector
## 소개
벡터(Vector)는 메모리는 자동으로 할당하면서 메모리의 연속한 위치에 원소들을 저장[^1]하는 STL Container다.

## Usage

STL Vector에서 지원하는 기능은 다음과 같다.
* 선언 : `vector<int> v;`
* `i`번째 원소 : `v[i]`
* 첫 번째 원소 : `v.front()`
* 마지막 원소 : `v.back()`
* 시작 `iterator` : `v.begin()`
* 끝 `iterator` : `v.end()`
* 원소 개수 : `v.size()`
* 벡터 크기 `sz`로 재설정 : `v.resize(sz);`
* 비어있는지 `bool` 값으로 리턴 : `v.empty()`
* 맨 뒤에 원소 추가 : `v.push_back(x);`
* 맨 뒤 원소 제거 : `v.pop_back();`
* 모든 원소 제거 : `v.clear();`


Vector를 사용할 때 자주 사용하는 코드들은 다음과 같다.
* 정렬 : `sort(v.begin(), v.end());`
* 중복 원소 제거 : `sort(v.begin(), v.end()); v.erase(unique(v.begin(), v.end()), v.end());`


---
[^1]: 임의의 위치에 존재하는 원소에 접근하는 Random Access가 가능하다.
