
# SPFA
## 소개
SPFA(Shortest Path Faster Algorithm)은 [[ Bellman-Ford ]] 알고리즘의 수행 시간을 개선하여 평균 시간복잡도 \\(O(|E|)\\)만에 한 점에서 모든 점까지의 최단 경로를 찾을 수 있는 알고리즘이다. 

[[ Bellman-Ford ]]의 수행 시간을 개선하기 위해 모든 간선에 대해 \\(|V|\\)번 루프를 돌리는 대신 [[ Queue ]]를 이용하여 완화가 이루어질 수 있는 정점만 탐색한다는 것이 SPFA의 특징이며, 이를 통해 평균 시간복잡도를 \\(O(|V||E|)\\)에서 \\(O(|E|)\\)까지 단축시킬 수 있다.

## 원리
만약 어떤 정점 \\(v\\)까지 최단 거리가 갱신된 경우, \\(v\\)와 연결된 정점들의 최단 거리가 갱신될 수 있다. 따라서 \\(v\\)를 [[ Queue ]]에 넣어 \\(v\\)에 연결된 정점들을 완화시켜줄 필요가 있다. 이미 \\(v\\)가 [[ Queue ]]에 들어가 있는 경우 [[ Queue ]]에 한번 더 추가해 줄 필요는 없기 때문에 각 정점이 현재 [[ Queue ]] 안에 있는지 `bool` 배열로 관리하면 된다.
### 음수 사이클 판별
[[ Bellman-Ford ]] 알고리즘과 마찬가지로 SPFA에서도 음수 사이클이 없는 경우 최단 경로가 최대 \\(|V|-1\\)개의 간선을 이용하며, 한 정점에 대한 완화가 최대 \\(|V|-1\\)번 이루어지므로 한 정점에서 완화가 \\(|V|-1\\)번보다 많이 진행되는 경우 음수 사이클이 있다고 판단할 수 있다.

## Code

``` c++
vector<int> SPFA(int source){
	vector<int> dist(N, INF);
	bool updated;
	dist[source] = 0;
	queue<int> Q;
	vector<bool> inQ(N, false);
	vector<int> visited(N, 0);
	Q.push(source);
	inQ[source] = true;
	while(!Q.empty()){
		int here = Q.front();
		Q.pop();
		inQ[here] = false;
		++visited[here];
		if(visited[here] >= V){
			dist[source] = -1;
			return dist;
		}
		for(pii p : adj[here]){
			int there = p.first, weight = p.second;
			if(dist[there] > dist[here] + weight){
				dist[there] = dist[here] + weight;
				if(!inQ[there]){
					Q.push(there);
					inQ[there] = true;
				}
				
			}
		}
	}
	return dist;
}
```
