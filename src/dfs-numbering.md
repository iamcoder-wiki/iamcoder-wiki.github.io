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

그래프에서 위의 DFS Numbering을 해주면 연결 그래프에서 트리가 만들어지는데, 이를 DFS Tree라고 한다. 무방향 그래프에서는 Tree Edge와 Back Edge(Tree Edge가 아닌 모든 에지)로 에지가 나뉘며, 방향 그래프에서는 Tree Edge, Back Edge, Forward Edge, Cross Edge로 에지 종류가 나뉜다. 
* Tree Edge : 트리를 DFS Tree를 만드는 과정에서 사용된 에지 \\(|V|-1\\)개
* Back Edge : 어떤 정점에서 자신의 조상을 향하는 에지
* Forward Edge : 반대로 어떤 정점에서 자신의 자식을 향하는 에지 (Tree Edge는 포함 X)
* Cross Edge : Tree Edge, Back Edge, Forward Edge가 아닌 에지 (에지를 통해 연결된 두 노드가 부모-자식 관계를 갖지 않는 에지)

### 무방향 그래프

 무방향 그래프를 DFS Tree로 만들면 다음과 같다.


무방향 그래프에서는 Tree Edge가 아닌 모든 에지는 어떤 정점과 그 정점의 조상을 잇는 Back Edge가 된다.  

