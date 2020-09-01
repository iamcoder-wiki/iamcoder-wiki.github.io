# Mo's Algorithm
## 소개
Mo's Algorithm은 [[ Sqrt Decomposition ]]과 비슷하게 Sqrt를 활용하는 기법으로 오프라인[^1] 쿼리 문제를 푸는데 사용하는 알고리즘이다.

## 구간 합 쿼리
\\(N\\)개의 수 \\(A_1, A_2, ..., A_N\\)가 주어지고, \\(x\\)에서부터 \\(y\\)까지의 구간 합을 구하는 쿼리 \\(M\\)개 \\((x_1, y_1), (x_2, y_2), ..., (x_M, y_M)\\)를 처리하는 문제를 생각해보자. 쿼리를 `pair<int, int>`로 표현한 다음, 쿼리를 다음 `sort function`으로 정렬하자.
``` c++
int SQ = sqrt(N); 
bool sf(pair<int, int> a, pair<int, int> b){
	if((a.first/SQ)==(b.first/SQ)){
		return a.second<b.second;
	}
	return (a.first/SQ)<(b.first/SQ);
}
```

현재 구간의 시작점을 \\(s\\), 끝점을 \\(e\\)라고 하고 정렬된 쿼리에서 순서대로 \\((x_i, y_i)\\)를 잡아 \\(s\\)와 \\(e\\)를 각각 \\(x_i\\)와 \\(y_i\\)의 위치로 이동시킨다고 생각해보자.
``` c++
sort(query.begin(), query.end(), sf);
for(pair<int, int> p : query){
	while(s>p.first){
		s--;	
		sum+=A[s];
	}while(e<p.second){
		e++;	
		sum+=A[e];
	}while(s<p.first){
		sum-=A[s];
		s++;
	}while(e>p.second){
		sum-=A[e];
		e--;
	}
	answer(p, sum); // 쿼리 p에 대한 답은 sum이 된다
}
```
위와 같이 Naive하게 \\(s, e\\)를 이동시키면서 원소를 추가/삭제하여 \\(sum\\)에 현재 \\(s\\)부터 \\(e\\)까지 합을 저장하는 코드를 사용하면 \\(O(N\sqrt{N})\\)의 시간복잡도로 구간합 쿼리들을 처리할 수 있다.

### 시간복잡도 분석
위 코드의 시간복잡도를 분석해보자. 이전 쿼리는 \\((x', y')\\)고 현재 쿼리가 \\((x, y)\\)라 하자. 다음 두 가지 경우가 존재한다.
1. \\(\lfloor x'/SQ \rfloor = \lfloor x/SQ\rfloor \\)

이 경우는 최대 \\(N\\)회 존재할 수 있고, 이 경우에 \\(s\\)는 최대 \\(sqrt{N}\\)만큼 움직이기 때문에 1번 경우에 \\(s\\)의 이동은 최대 \\(N\sqrt{N}\\)이다.

같은 \\(\lfloor x/SQ \rfloor \\) 값에 대해 \\(e\\)값의 변화 합은 최대 \\(N\\)이므로 서로 다른 \(\lfloor x/SQ \rfloor \\) 값들에 대한 \\(e\\)값의 변화 합을 다 더해주면 \\(e\\)의 이동은 최대 \\(N\sqrt{N}\\)이다. 

2. \\(\lfloor x'/SQ \rfloor \neq \lfloor x/SQ\rfloor \\)

이 경우는 최대 \\(sqrt{N}\\)회 존재할 수 있으며 \\(s, e\\)는 최대 \\(N\\)만큼 이동하므로 2번 경우에 대한 \\(s\\)와 \\(e\\)의 이동은 최대 \\(N\sqrt{N}\\)번 발생한다.

따라서 1번 경우와 2번 경우를 합치면 \\(s\\)와 \\(e\\)의 이동에 드는 시간은 \\(O(N\sqrt{N})\\)임을 알 수 있다.

Mo's Algorithm은 이 시간복잡도 분석 방법을 기반으로 오프라인 쿼리를 정렬하여 시간복잡도에 \\(sqrt{N}\\)이 들어가도록 시간복잡도를 줄이는 알고리즘이라고 정리할 수 있다.





[^1] : 다음 쿼리가 입력되기 전에 현재 쿼리의 답을 출력해야 하는 온라인 쿼리 문제와 달리 오프라인 쿼리 문제는 모든 쿼리를 입력받은 뒤 처리하는 쿼리 문제다
