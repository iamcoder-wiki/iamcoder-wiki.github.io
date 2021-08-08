# Knuth Optimization
## 소개
Knuth Optimization은 2차원 [[ DP ]] 테이블을 \\(O(N^3)\\)의 시간복잡도로 채우는 방식이 특정 조건을 만족할 때 \\(O(N^2)\\)의 시간복잡도로 최적화하는 방법이다.
## 조건
1. 2차원 [[ DP ]]의 점화식이 갖는 꼴

\\(DP[i][j] = min_{i<k<j}(DP[i][k]+DP[k][j])+C[i][j]\\)

2. \\(C[i][j]\\)의 사각부등식

\\(a\leq b\leq c\leq d\\)인 \\(a, b, c, d\\)에 대해 \\(C[a][c]+C[b][d]\leq C[a][d] + C[b][c]\\)

3. \\(C[i][j]\\)의 단조성

\\(a\leq b\leq c\leq d\\)인 \\(a, b, c, d\\)에 대해 \\(C[b][c] \leq C[a][d]\\)

조건 2와 조건 3이 만족하는 경우 \\(K[i][j-1]\leq K[i][j] \leq K[i+1][j]\\)가 만족한다. 따라서 \\(DP[i][j]\\)를 길이 \\(l = (j-i)\\) 가 작은 순서로 채우면 \\(O(N^2)\\)에 2차원 [[ DP ]] 테이블을 채울 수 있다.

## Code
``` c++
void Calc(){
	for(int i = 2; i <= N; i++){
		DP[i-1][i] = 0;
		K[i-1][i] = i;
	}
	for(int l = 2; l < N; l++){
		for(int i = 1; i+l <= N; i++){
			int j = i + l;
			DP[i][j] = INF;
			for(int k = K[i][j-1]; k <= K[i+1][j]; k++){
				if(DP[i][j] > DP[i][k] + DP[k][j] + C[i][j]){
					DP[i][j] = DP[i][k] + DP[k][j] + C[i][j];
					K[i][j] = k;
				}
			}
		}
	}
}
```

## 관련 문제
[BOJ 11066 파일 합치기](https://www.acmicpc.net/problem/11066)

[Koistudy Rope cutting](http://koistudy.net/?mid=prob_page&NO=589)

[AtCoder ATC 002 Optimal binary search tree](https://atcoder.jp/contests/atc002/tasks/atc002_c)

[AtCoder Optimal Tournament](https://atcoder.jp/contests/jag2015autumn/tasks/icpc2015autumn_k)
