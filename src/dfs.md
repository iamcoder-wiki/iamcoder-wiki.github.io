# DFS

## 소개
깊이 우선 탐색(Depth-First Search, DFS)는 트리나 그래프를 탐색하는 알고리즘 중 하나다. 깊이 우선 탐색에서는 다음 그림과 같이 우선 한 노드에서 탐색을 시작하여 매번 간선을 타고 최대한 멀리까지 탐색한 후에 이전 노드로 돌아온다.
 
![DFS 탐색 순서](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

모든 노드를 탐색하는 경우는 DFS를 사용할 수 있지만, 어떤 정점까지 최단 거리를 찾거나 정점들을 시작점에서 부터 거리 순으로 탐색하기 위해서는 DFS 대신 [[ BFS ]]를 사용해야 한다. 

## DFS Numbering
그래프를 [[ Tree ]]처럼 만들거나 [[ Tree ]]에서 다양한 연산을 할 때 DFS Numbering을 사용하여 노드의 번호를 매길 수 있다. DFS Numbering을 하면 각 노드는 두 가지 값을 갖는데, 이 노드를 처음 방문한 시간(pre-visited time)과, 이 노드에서 마지막으로 떠날 때 시간(post-visited time)을 저장하고 있다. 

### Code

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
 ### 응용
 이처럼 DFS Numbering을 하는 방법은 간단하지만, 꽤 다양하게 응용할 수 있다.
 
 #### Tree에서 노드를 구간으로 표현
 
 트리에서 어떤 노드 `v`를 잡으면, `v`의 모든 자식들은 `pre, post` 값이 `pre[v], post[v]` 사이에 존재한다. 따라서 *어떤 노드를 루트로 하는 서브트리에 어떤 처리*를 하는 경우를 *[[ Segment Tree ]]의 특정 구간에 어떤 처리를 하는 경우*로 바꿔 문제를 풀 수 있다.
 
 #### DFS Tree
 
그래프에서 위의 DFS Numbering을 해주면 연결 그래프에서 트리가 만들어지는데, 이를 DFS Tree라고 한다. 무방향 그래프에서는 Tree Edge와 Back Edge(Tree Edge가 아닌 모든 에지)로 에지가 나뉘며, 방향 그래프에서는 Tree Edge, Back Edge, Forward Edge, Cross Edge로 에지 종류가 나뉜다. 
* Tree Edge : 트리를 DFS Tree를 만드는 과정에서 사용된 에지 \\(|V|-1\\)개
* Back Edge :어떤 정점에서 자신의 조상을 향하는 에지
* Forward Edge : 반대로 어떤 정점에서 자신의 자식을 향하는 에지 (Tree Edge는 포함 X)
* Cross Edge : Tree Edge, Back Edge, Forward Edge가 아닌 에지 (에지를 통해 연결된 두 노드가 부모-자식 관계를 갖지 않는 에지)

##### 무방향 그래프

 무방향 그래프를 DFS Tree로 만들면 다음과 같다.
![undirected connected graph to DFS Tree](https://codeforces.com/predownloaded/8d/be/8dbe5d89e58b67f3d8e4d8e0e8eb3358ba921b28.png)
![result](https://codeforces.com/predownloaded/8b/cc/8bccbec25c8d76a68c34303a58836756225129b1.png)

무방향 그래프에서는 Tree Edge가 아닌 모든 에지는 어떤 정점과 그 정점의 조상을 잇는 Back Edge가 된다.  
