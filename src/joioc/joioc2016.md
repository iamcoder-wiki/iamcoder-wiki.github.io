# JOI Open Contest 2016

## [JOIRIS](https://oj.uz/problem/view/JOI16_joiris)



## [Selling RNA Strands](https://oj.uz/problem/view/JOI16_selling_rna)

`P`와`S`를 합치고 정렬하여 `P`를 prefix로 갖는 `S`들을 구할 수 있다. `P[i]`와 `P[i]의 마지막 글자를 1 증가시킨 문자열` 사이에 있는 `S`들이 `P[i]`를 prefix로 갖는다는 것을 알 수 있다. 비슷한 방식으로 `Q`와 `S`들을 뒤집은 문자열을 정렬하면 `Q`를 suffix로 갖는 `S`들을 구할 수 있다.

이제 DFS Numbering을 할 때 처럼 `S[i]`를 `(P에 대한 index, Q에 대한 index)`로 나타낼 수 있으며, `P[j], Q[j]`가 입력되었을 때 쿼리는 좌표상 직사각형 내 존재하는 `S[i]` 점의 개수로 표현할 수 있으며 [2D Segment Tree](../2d-segment-tree.md)로 구할 수 있다. 이때 Query를 잘 정렬하면 1차원 [Segment Tree](../segment-tree.md)로도 풀 수 있다.

## [Skyscraper](https://oj.uz/problem/view/JOI16_skyscraper)

[DP](../dp.md)를 잘 설계하여 풀 수 있다. CEOI 2016 Kangaroo에서 사용하는 DP와 비슷한 느낌이 있다. 

`DP[i][j][k]` : 높이 오름차순으로 `i`번째 까지 고려하고 `j`개의 연결된 컴포넌트가 있을 때 cost가 `k`인 경우의 수라고 하자. 여기서 컴포넌트는 인접하는 skyscraper들을 의미한다.

`i`번째 skyscraper를 새로 추가하는 상황을 생각해 보면 두개의 컴포넌트를 합치거나 / 새로운 컴포넌트를 구성하거나 / 기존 컴포넌트 옆에 추가하는 3가지 경우가 있다. 각 경우에 따라 컴포넌트의 개수가 바뀐다. 또, DP의 상태로 가장 오른쪽, 왼쪽 부분이 결정되었는지 0부터 3까지 값으로 갖고 있으면 `i`가 증가할 때마다 남은 컴포넌트 끝부분의 개수만큼 `h[i] - h[i-1]`를 `k`에 더하여 현재 cost를 관리할 수 있다.

## [Skyscraper](https://oj.uz/problem/view/JOI16_skyscraper)



