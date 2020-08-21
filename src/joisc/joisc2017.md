# JOISC 2017

## Day1

### [Cultivation](https://oj.uz/problem/view/JOI17_cultivation)

### [Port Facility](https://oj.uz/problem/view/JOI17_port_facility)

\\(A_i < A_j < B_i < B_j\\) 인 경우 `i`와 `j`는 다른 영역에 배치되어야 한다. 이 경우에 `i`와 `j`에 간선을 만들어주고 마지막에 이분 그래프 검사를 해줘서 시뮬레이션 가능한지 검사할 수 있다. 이러한 모든 `(i, j)` 쌍을 검사하면 시간 내에 구할 수 없으므로 다른 방법을 찾아 한다. 

\\(A_i\\)가 작은 순으로 \\(B_i\\)를 포함하는 [Segment Tree](../segment-tree.md) 내 구간들에 [Vector](../vector.md)를 하나씩 저장하여 이 [Vector](../vector.md)에다가 `i`를 넣어줄 수 있다. 이후 \\(A_j, B_j\\)에서 간선을 만들어줄 때 \\(A_j\\)와 \\(B_j\\) 사이에 있는 구간에 존재하는 `i`들과	`j` 사이에 간선을 만들어 줄 수 있다. 이때 [Segment Tree](../segment-tree.md)에 특정 구간에 있는 [Vector](../vector.md) 내의 모든 `i`와 `j`사이에 간선을 만들어 줬다면, 그 [Vector](../vector.md) 내의 모든 `i`는 `j`에 의해 이분 그래프를 만들면 반드시 같은 그룹에 속하게 된다. 따라서 이 구간에 `i`를 1개만 놔두고 나머지는 다 없애도 된다. 이 경우 연산량이 \\(O(N \log N)\\)으로 줄어들게 된다.

문제에서 구하는 것은 경우의 수이기 때문에 만약 이분 그래프가 아닌 그래프가 하나라도 존재하면 답은 0, 아닌 경우 이분 그래프의 수가 `k`개라면 답은 \\(2^k\\)로 구할 수 있다.

### [Sparklers](https://oj.uz/problem/view/JOI17_sparklers)

