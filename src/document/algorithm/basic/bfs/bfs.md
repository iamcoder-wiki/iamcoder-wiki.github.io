# BFS

## 소개
너비 우선 탐색(Breadth-First Search)는 트리나 그래프를 탐색하는 알고리즘 중 하나다. 너비 우선 탐색에서는 한 정점에서 시작하여 현재 깊이에서 방문하는 노드들에 인접한 모든 노드들을 다음 깊이의 탐색에서 방문한다.

[[ DFS ]]와 정반대의 방법이며, 미로에서 최단거리를 찾거나 시작점에서 부터 최단거리를 찾을 때 사용하는 알고리즘이다.

## Code
``` c++
deque<int> q;	// node queue
vector<int> gp[MAX_N+1];	// graph data
bool vst[MAX_N+1]; // visited?

void BFS(){
	q.push_back(root);
	vst[root] = true;
	while(!q.empty()){
		n = q.front(); q.pop_front();
		for(int i : gp[n]){
			if(!vst[i]){
				q.push_back(i);
				vst[i] = true;
			}
		}
	}
}
```
[[ DFS ]]는 [[ Stack ]]을 쓰지만 BFS에서는 [[ Queue ]]를 쓴다. 또, [[ DFS ]]에서는 노드를 방문할 때 `vst`에 체크를 해주는데, BFS에서는 [[ Queue ]]에 새로운 노드를 추가할 때 `vst`에 체크를 해준다.
