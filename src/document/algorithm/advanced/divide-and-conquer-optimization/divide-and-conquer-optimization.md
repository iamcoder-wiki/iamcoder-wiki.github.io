
# Divide & Conquer Optimization

## 소개
Divide & Conquer Optimization은 [[ DP Optimization ]] 기법 중 [[ Divide & Conquer ]]를 사용한 기법이다. 이 최적화 기법은 특정 조건을 만족하는 [[ DP ]]의 시간복잡도를 줄이는데 사용된다.

## 2D DP
2차원 [[ DP ]] 테이블을 채우기 위해서는 일반적으로 \\(O(N^3)\\)의 시간복잡도를 갖는다. 이때 특정 조건을 만족하면 Divide & Conquer Optimization을 통해 시간복잡도를 \\(O(N^2\log N)\\)로 줄일 수 있다.

### 조건
1. 2차원 [[ DP ]]의 점화식이 갖는 꼴 (이때 \\(C[k][j]\\)는 문제 조건으로 주어지는 값

\\(DP[i][j] = min_{k<j}(DP[i-1][k]+C[k][j])\\)

2. DP[i][j]를 최소로 만드는 최소 \\(k\\)의 값을 \\(K[i][j]\\)라 할 때 

\\(K[i][j]\leq K[i][j+1]\\)

이 두 조건을 만족하면 조건 2에 의해 \\(K[i][j]\\)가 단조 증가하므로 조건 1을 만족하는 \\(K[i][j]\\)를 [[ Divide & Conquer ]]로 구할 수 있다.

### Code
``` c++
void Calc(int i, int s, int e, int p, int q){
	int mid = (s+e)/2;
	DP[i][mid] = INF;
	for(int j=p; j<=q; j++){
		if(DP[i][mid] > DP[i-1][j]+C[j][mid]){
			DP[i][mid] = DP[i-1][j]+C[j][mid];
			K[i][mid] = j;
		}
	}
	if(s < mid)	Calc(i, s, mid-1, p, K[i][mid]);
	if(mid < e)	Calc(i, mid+1, e, K[i][mid], q);
}
```
\\(DP[i][s]\\)부터 \\(DP[i][e]\\)까지 계산하는 함수 `Calc(i, s, e, p, q)`에서 \\(p \leq K[i][s] \leq K[i][e] \leq q\\)인 \\(p, q\\)를 윗 단계에서 부터 받아 사용한다. 이후 \\(mid = (s+e)/2\\)인 \\(mid\\)를 기준으로 구간 `(s, e)`를 반으로 나눠 [[ Divide & Conquer ]]를 해주면 \\(O(N^2\log N\\)의 시간복잡도로 DP 테이블을 채울 수 있다.

### 추가 조건
문제에서 위에서 제시한 조건 2가 만족하는지 확인하기는 꽤 어렵다. 따라서 조건 2를 만족하며, 더 쉽게 확인할 수 있는 조건 3은 다음과 같다.

3. [[ DP ]] 계산에 사용되는 \\(C[i][j]\\)의 사각부등식

\\(a\leq b\leq c\leq d\\)인 \\(a, b, c, d\\)에 대해 \\(C[a][c] + C[b][d] \leq C[a][d] + C[b][c]\\)

3번 조건이 만족하면 2번 조건이 만족함을 귀류법으로 증명할 수 있다.

보통 Divide & Conquer Optimization을 사용하기 전 문제 조건을 파악하는 과정에서 2번 조건보다 3번 조건을 만족하는지 확인하는 경우가 많기 때문에 이 조건도 추가적으로 알아둘 필요가 있다.

## 1D DP
1차원 [[ DP ]]에서도 비슷한 조건을 만족하면 \\(O(N^2)\\) 시간복잡도로 [[ DP ]] 테이블을 채우는 과정을 \\(O(N\log N)\\)에 해결할 수 있다.
### 조건
1. 1차원 [[ DP ]]의 점화식이 갖는 꼴

\\(DP[i] = min_{j<i}(DP[j]+C[i][j])\\)

2. \\(DP[i]\\)를 최소로 만드는 최소 \\(k\\)값을 \\(K[i]\\)라 할 때

\\(K[i]\leq K[i+1]\\)

3. [[ DP ]] 계산에 사용되는 \\(C[i][j]\\)의 사각부등식

\\(a\leq b\leq c\leq d\\)인 \\(a, b, c, d\\)에 대해 

\\(C[a][c] + C[b][d] \leq C[a][d] + C[b][c]\\)

2차원 DP의 경우와 마찬가지로 조건 1과 조건 2를 만족하면 단조 증가하는 \\(K[i]\\)를 분할 정복으로 구할 수 있으며, 조건 3이 만족하면 조건 2가 만족하기 때문에 조건 2 대신 조건 3을 검사해보는 경우가 많다.
### Code
``` c++
void Calc(int s, int e, int p, int q){
	int mid = (s+e)/2;
	DP[mid] = INF;
	for(int j=p; j<=q; j++){
		if(DP[mid] > DP[j] + C[mid][j]){
			DP[mid] = DP[j] + C[mid][j];
			K[mid] = j;
		}
	}
	if(s < mid)	Calc(s, mid-1, p, K[mid]);
	if(mid < e)	Calc(mid+1, e, K[mid], q);
}
```
## 관련 문제
[BOJ 11001 김치](https://www.acmicpc.net/problem/11001)

[BOJ 18444 우체국 3](https://www.acmicpc.net/problem/18444)

[BOJ 14179 크리스마스 이브](https://www.acmicpc.net/problem/14179)

[BOJ 13262 수열의 OR 점수](https://www.acmicpc.net/problem/13262)

[BOJ 13261 탈옥](https://www.acmicpc.net/problem/13261)

[BOJ 16138 수강신청](https://www.acmicpc.net/problem/16138)

[JOISC 2018 Cake 3](https://oj.uz/problem/view/JOI19_cake3)

[IOI 2014 Holiday](https://www.acmicpc.net/problem/10076)

[ICPC WF 2016 지사 배정](https://www.acmicpc.net/problem/12766)

[ICPC WF 2017 Money for Nothing](https://www.acmicpc.net/problem/14636)

