
# Codeforces/Grakn Forces 2020

## A

[A. Circle Coloring](https://codeforces.com/contest/1408/problem/A)

앞에서부터 \\(p_{i-1} = a_i\\)이면 \\(p_i = b_i\\), \\(p_{i-1} \neq a_i\\)면 \\(p_i = a_i\\)를 넣어주면 \\(1\\)번 부터 \\(N-1\\)번까지 조건을 만족하게 \\(p_i\\)를 설정할 수 있다.
마지막 값 \\(p_N\\)은 \\(a_N\\), \\(b_N\\), \\(c_N\\) 중 \\(p_1\\)과 \\(p_{N-1}\\)와 모두 다른 값으로 설정하면 된다.


## B
[B. Arrays Sum](https://codeforces.com/contest/1408/problem/B)

\\(k = 1\\)인 경우 : 모든 \\(a_i\\)의 값이 같으면 답은 1, 아닌 경우 답은 -1

\\(k \leq 2\\)인 경우 : 중복된 원소를 없애고 \\(a_1, a_2, ..., a_m (a_1 < a_2 < ... < a_m)\\)이라 하자.

첫 그룹에 \\(a_1, a_2, ..., a_k, a_k, ..., a_k\\), 두 번째 그룹에 \\(0, 0, ..., 0, a_{k+1}-a_k, ..., a_{2k-1}-a_k, ..., a_{2k+1}-a_k\\) 순서로 원소를 넣어주면, 처음 그룹에서 \\(a_1\\) 부터 \\(a_k\\)까지 \\(k\\)개의 원소를 표현할 수 있으며, 두 번째 그룹부터는 \\(k-1\\)개의 원소를 표현할 수 있다. 

따라서 중복된 원소를 없애고 \\(M\\)개의 원소가 존재한다고 하면 답은 \\( \lceil {{M-1}\over {k-1}}\rceil \\)이 된다.



## C
[C. Discrete Acceleration](https://codeforces.com/contest/1408/problem/C)

각 차마다 다음 Flag까지 남은 거리, 남은 시간, 현재 속도를 double로 저장하고 있으면 남은 시간이 적은 차를 이동시키고, 나머지 차의 남은 거리를 갱신하는 과정을 두 차가 같은 구간에 존재할 때까지 반복하면 된다.

마지막으로 두 차가 같은 구간에 존재하게 되면, 구간의 남은 거리를 두 차의 속도 합으로 나눠주면 된다.


## D
[D. Searchlights](https://codeforces.com/contest/1408/problem/D)

\\(i\\)번째 사람과 \\(j\\)번째 searchlight에 대해 만약 \\(a_i\leq c_j\\) 이고 \\(b_i\leq d_j\\)이면 위로 올라간 횟수가 \\(c_j - a_i\\) 이하라면 오른쪽으로 \\(d_j-b_i+1\\) 이상 움직여야 \\(i\\)번째 사람이 \\(j\\)번째 searchlight에 걸리지 않는다는 것을 알 수 있다. \\(O(NM)\\)의 시간복잡도로 위로 올라간 횟수 \\(up\\)에 대해 오른쪽으로 이동해야 하는 최소 횟수 \\(min_right_{up}\\)을 구할 수 있다. ([[ Prefix Sum ]]과 비슷하게 Prefix Max로 구해주면 된다) 

따라서 위로 이동하는 횟수 \\(0\\)부터 \\(1000001\\) 각각에 대해 \\(up + min_right_{up}\\)을 계산하면 그 중 최솟값이 답이 된다.


## E
[E. Avoid Rainbow Cycles](https://codeforces.com/contest/1408/problem/E)

원소 노드 \\(N\\)개와 집합 노드 \\(M\\)개를 만든 다음 원소 \\(i\\)가 \\(A_j\\)에 속하면 \\(i\\)번째 원소 노드와 \\(j\\)번째 집합 노드를 연결해 주자. \\(N+M\\)개의 노드와 \\(\sum_{k=1}^M s_k\\)개의 에지를 갖는 이분 그래프 G를 만들 수 있다.

원래 그래프에서 생기는 rainbow 사이클을 생각해 보면 이분 그래프 G 상의 사이클에 대응시킬 수 있다. 원래 그래프의 노드는 원소 노드에 대응되며, 원래 그래프의 에지가 집합 노드에 대응된다. 따라서 이분 그래프 G에서 사이클을 모두 없애면 원래 그래프에서도 rainbow 사이클이 없어지게 된다. 

이분그래프 G의 사이클을 없애면 Maximum Spanning Tree가 되므로, 각 에지의 cost를 계산하여 [[ Minimum Spanning Tree ]]를 구하는 것과 비슷하게 Maximum Spanning Tree를 구해주면 답을 구할 수 있다.

## F
[F. Two Different](https://codeforces.com/contest/1408/problem/F)

\\(2^k\\)개의 수들은 \\(k\\)에 상관 없이 같은 숫자로 만들 수 있다. [^1] 따라서 주어진 수 \\(N\\)보다 작거나 같은 최대의 \\(2^k\\)를 구해 앞에서 부터\\(2^k\\)개의 수를 같은 수로 만들고 그 후 뒤에서 \\(2^k\\)개의 수를 같은 수로 만들면 전체 배열에 최대 2개의 서로 다른 수가 존재하게 된다.


## G
[G. Clusterization Counting](https://codeforces.com/contest/1408/problem/G)



## H
[H. Rainbow Triples](https://codeforces.com/contest/1408/problem/H)



## I
[I. Bitwise Magic](https://codeforces.com/contest/1408/problem/I)



[^1]: \\(2^{k-1}\\)개의 a와 \\(2^{k-1}\\)개의 b들은 \\(2^k\\)개의 \\(f(a, b)\\)로 바꿔줄 수 있다는 사실을 사용하여 귀납적으로 증명할 수 있다.
