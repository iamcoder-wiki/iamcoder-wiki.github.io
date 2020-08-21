# JOISC 2018

## Day1

### [Construction of Highway](https://oj.uz/problem/view/JOI18_construction)

16점은 트리를 만들고 매 쿼리를 \\(O(N)\\)에 처리하면 어렵지 않게 받을 수 있다.

매번 정점을 추가할 때마다 \\(1\\)번 정점에서 \\(A_i\\)번 정점까지 같은 cost가 된다. 이처럼 같은 cost를 갖는 정점들을 묶으면 코딩은 복잡해지겠지만 시간복잡도는 줄어들 것이라고 생각할 수 있다. [Disjoint Set](./disjoint-set.md)로 정점을 합치고, 각 정점 그룹마다 1에 가장 가까운 정점을 저장해 놓으면 새로운 쿼리가 들어올 때마다 1에 도달할 때까지 정점 그룹들을 따라가면서 그 정점 그룹들의 정보를 갱신해줄 수 있다.

이렇게 처리했을 때 시간복잡도를 잘 계산해보면 \\(O(N \logN)\\)이여서 문제를 풀 수 있다. [Heavy-Light Decomposition](../heavy-light-decomposition.md)의 아이디어를 사용하는 자세한 증명은 [여기](https://codeforces.com/blog/entry/58433?#comment-422455)서 볼 수 있다.

### [Fences](https://oj.uz/problem/view/JOI18_fences)

### [Tents](https://oj.uz/problem/view/JOI18_tents)

## Day2

### [Asceticism](https://oj.uz/problem/view/JOI18_asceticism)

### [Road Service]()

### [Worst Reporter 3](https://oj.uz/problem/view/JOI18_worst_reporter3)

## Day3

### [Airline Route Map](https://oj.uz/problem/view/JOI18_airline)

### [Bitaro's Party](https://oj.uz/problem/view/JOI18_bitaro)

[Sqrt Decomposition](../sqrt-decomposition)을 쓰는 문제다. \\(Y_1 + Y_2 + ... + Y_Q = SUM\\)이라 하고 \\(Sq = \sqrt{SUM}\\)이라 하자.

1. \\(Y_i < Sq\\) : 전처리로 모든 정점에 대해 최장 거리를 \\(Sq\\)개 저장해 놓고 있으면 \\(O(Y_i)\\)에 해결할 수 있다. 이는 \\(S_j\\)가 작은 에지 순서대로 \\(S_j\\)에서부터 최장거리에 있는 정점들 \\(Sq\\)개를 \\(E_j\\)에 합쳐주는 식으로 \\(O(M \timesSQ)\\)에 처리할 수 있다.
2. \\(Y_i \ge Sq\\) : Naive하게 \\(T_i\\)에서부터 모든 정점까지 최장거리를 [DP](../dp.md)로 계산하여 답을 구한다.

### [Security Gate](https://oj.uz/problem/view/JOI18_security_gate)

## Day4

### [Candies](https://oj.uz/problem/view/JOI18_candies)

APIO 2007 Backup에서 사용한 그리디 아이디어를 비슷하게 사용하면 된다.

\\(K\\)개의 캔디를 선택한 상황에서 \\(K+1\\)개의 캔디를 선택하는 상황으로 넘어갈 때 2가지 경우가 있다. 첫 번째는 양 옆 캔디가 선택되지 않은 캔디 1개를 추가하는 경우다. 두 번째는 현재 선택된 캔디를 O, 아직 선택하지 않은 캔디를 X라 할 때 XXOXO...OXX를 XOXOX...XOX 로 바꾸는 경우다. 매 번 두가지 경우 중 deliciousness의 증가량이 최대인 경우를 택하면 되는데, 이는 [Priority Queue](../priority-queue.md)와 [Set](../set.md)으로 deliciousness 증가량의 최댓값과 XOXO...OX 꼴의 구간을 관리해줘서 처리할 수 있다.

### [Library](https://oj.uz/problem/view/JOI18_library)

첫 번째 (또는 마지막) 책의 번호는 \\(N\\)번 질문하여 알 수 있다. \\(1\\)번째 책부터 \\(i\\)번째 책의 번호를 알고 있을 때 \\(i+1\\)번째 책 번호는 이분탐색을 통해 \\(2 \logN\\)정도 안에 찾을 수 있다. \\(i+1\\)번째 책이 포함되어 있는 책들의 집합은 \\(i\\)번째 책을 포함하던, 포함하지 않던 `Query`의 리턴 값이 같으며 \\(i+1\\)번째 책이 포함되어 있지 않는 책들의 집합은 같은 방식으로 두 번 `Query`를 호출했을 때 리턴 값에 1 차이가 나게 된다. 이를 이용하면 \\(2N \logN\\)정도 안에 모든 책 번호를 찾을 수 있다.



### [Wild Boar](https://oj.uz/problem/view/JOI18_wild_boar)