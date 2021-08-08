# Binary Search
## 소개
이분 탐색(Binary Search)는 정렬된 배열에서 원하는 값을 \\(O(\log N)\\) 시간복잡도에 찾는 알고리즘이다. 

간단한 알고리즘이라 생각할 수 있지만, 시간복잡도를 줄이는 것이 궁극적인 목표인 알고리즘 문제 풀이 과정에서 이분 탐색은 \\(O(\log N)\\)이 붙는 여러 시간복잡도의 근본이 되는 아이디어라고 볼 수 있다.

## Code

``` c++
int find(int x){
	int s = 0, e = (int)v.size()-1, m;
	while(1){
		m = (s+e)/2;
		if(v[m] == x)	return m;
		if(v[m]>x){
			s = m+1;
		}else{
			e = m-1;
		}
	}
}
```

## 관련 알고리즘
* [[ Parametric Search ]]
* [[ Parallel Binary Search ]]
