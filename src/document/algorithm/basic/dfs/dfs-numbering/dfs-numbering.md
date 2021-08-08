# DFS Numbering

## 소개
그래프를 [[ Tree ]]처럼 만들거나 [[ Tree ]]에서 다양한 연산을 할 때 [[ DFS ]]를 사용하여 노드의 번호를 매길 수 있는데, 이를 DFS Numbering이라고 한다.

 DFS Numbering을 하면 각 노드는 두 가지 값을 갖는데, 이 노드를 처음 방문한 시간(pre-visited time)과, 이 노드에서 마지막으로 떠날 때 시간(post-visited time)을 저장하고 있다. 

## Code

 ``` c++
 int num; // time
 int pre[MAX_N+1], post[MAX_N+1]; // pre-visited time, post-visited time
 vector<int> gp[MAX_N+1]; // graph data
 bool vst[MAX_N+1]; // visited?
 
 void dfs(int x){
  pre[x] = ++num;
  vst[x] = true;
  for(int i : gp[x]){
    if(!vst[i]) dfs(i);
  }
  post[x] = ++num;
}

 ```

 ## Tree에서 노드를 구간으로 표현

 트리에서 어떤 노드 `v`를 잡으면, `v`의 모든 자식들은 `pre, post` 값이 `pre[v], post[v]` 사이에 존재한다. 따라서 *어떤 노드를 루트로 하는 서브트리에 어떤 처리를 하는 경우*를 *[[ Segment Tree ]]의 특정 구간에 어떤 처리를 하는 경우*로 바꿔 문제를 풀 수 있다.



 ## DFS Tree
[Codeforces의 관련 내용](https://codeforces.com/blog/entry/68138)

그래프에서 DFS Numbering을 해주면 연결 그래프에서 하나의 트리가 만들어지는데, 이를 DFS Tree라고 한다. 무방향 그래프에서는 Tree Edge와 Back Edge(Tree Edge가 아닌 모든 에지)로 에지가 나뉘며, 방향 그래프에서는 Tree Edge, Back Edge, Forward Edge, Cross Edge로 에지 종류가 나뉜다. 
* Tree Edge : DFS Tree를 만드는 과정에서 사용된 에지 \\(|V|-1\\)개
* Back Edge : 어떤 정점에서 자신의 조상을 향하는 에지
* Forward Edge : 반대로 어떤 정점에서 자신의 자식을 향하는 에지 (Tree Edge는 포함 X)
* Cross Edge : Tree Edge, Back Edge, Forward Edge가 아닌 에지 (에지를 통해 연결된 두 노드가 부모-자식 관계를 갖지 않는 에지)

### 무방향 그래프

무방향 그래프에서는 Tree Edge가 아닌 모든 에지는 어떤 정점과 그 정점의 조상을 잇는 Back Edge가 된다는 조건을 사용하여 다양한 문제를 쉽게 풀 수 있다.  

#### 단절선 찾기

DFS Tree는 Tarjan의 단절선 알고리즘의 핵심 아이디어로 사용된다.

Back Edge는 단절선이 될 수 없다. Back Edge를 제거해도 DFS Tree 구조에 의해 컴포넌트가 분리되지 않기 때문이다. 부모 `u`와 자식 `v`를 잇는 Tree Edge가 단절선이 되기 위해서는 `v`의 자식과 `u`의 부모를 잇는 Back Edge가 존재하지 않아야 한다. 이 경우 그 Tree Edge가 없어지면 그래프가 두 부분으로 나눠지기 때문에 단절선이 된다.

#### 양방향 그래프를 단방향 그래프로 변환
[다음](https://codeforces.com/contest/118/problem/E)과 같은 문제를 생각해보자. 양방향 그래프가 주어졌을 때 임의의 정점에서 다른 모든 정점으로 이동할 수 있도록 모든 에지의 방향을 결정해주는 문제다. 

단절선이 존재하면 단절선의 방향을 어떻게 결정하던 임의의 정점에서 다른 모든 정점으로 이동할 수 있다는 조건이 만족할 수 없기 때문에 조건을 만족하도록 에지의 방향을 결정해줄 수 없다. 단절선이 존재하지 않는 경우, DFS Tree를 만들고 Tree Edge는 자식을 향하도록 하고 Back Edge는 조상을 향하도록 에지의 방향을 결정해 주면 조건을 만족하도록 임의의 정점에서 다른 모든 정점으로 이동할 수 있다[^1].

### 방향 그래프

방향 그래프의 경우 무방향 그래프와 비교하여 Forward Edge, Cross Edge가 추가된다. 4가지 에지에 대해 케이스를 잘 나누어 분석하면 쉽게 풀 수 있는 문제들이 많다.

#### 사이클 
DFS Tree를 만들었을 때 Back Edge가 존재하는 방향 그래프는 사이클을 포함한다는 것을 알 수 있다.



[^1]: 트리의 루트에서부터 Tree Edge를 타고 모든 에지에 도달할 수 있으며, 모든 정점에서 Back Edge들을 통해 루트에 도달할 수 있기 때문
