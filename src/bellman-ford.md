# Bellman-Ford
## 소개
벨만-포드(Bellman-Ford) 알고리즘은 [[ Dijkstra ]] 알고리즘과 같이 한 점에서부터 모든 점까지의 최단 경로와 거리를 구할 수 있는 알고리즘이다. 벨만-포드 알고리즘은 [[ Dijkstra ]] 알고리즘이 음수 간선이 있는 그래프에서 최단 경로를 구할 수 없다는 단점을 해결하기 위해 사용한다. 

## 원리
만약 시작점에서 정점 \\(v\\)까지 최단 거리를 \\(dist[v]\\)라 하고 정점 \\(u\\)에서 정점 \\(v\\)로 가는 간선의 가중치를 \\(weight(u, v)\\)라 하면 모든 정점 쌍 \\((u, v)\\)에 대해 다음 식이 성립한다.

$$ dist[v]\leq dist[u] + weight(u, v)$$

따라서, 최단 거리를 구하는 과정에서 \\(dist[v]>dist[u]+weight(u, v)\\)인 정점 쌍\\((u, v)\\)를 발견하면, \\(dist[v] = dist[u] + weight(u, v)\\)로 고쳐주면 되는데, 이 과정을 **완화**라고 부른다.

벨만-포드 알고리즘은 모든 간선에 대한 완화 과정을 여러번 반복하여 모든 정점까지 최단 경로를 구한다. 그래프에 음의 가중치를 갖는 사이클이 없다 가정하면 같은 정점을 2번 방문하는 최단경로는 없으므로, 최단 경로는 최대 \\(|V|-1\\)개 간선을 사용하고, 간선들의 완화를 최대 \\(|V|-1\\)번 반복해주면 된다[^1]. 만약 \\(|V|-1\\)번째 완화 과정에서 한 간선이라도 완화가 가능하면 음수 사이클이 있다는 뜻이다.

## Code
`adj[u]`에 정점 `u`에서 시작하는 간선을 `(끝점, 가중치)` 형식으로 `pair<int, int>`로 저장하고 있는 경우 Bellman-Ford Algorithm의 코드는 다음과 같다.
``` c++
vector<int> Bellman_Ford(int source){
	vector<int> dist(N, INF);
	bool updated;
	dist[source] = 0;
	for(int i=0; i<N; i++){
		updated = false;
		for(int u=0; u<V; u++){
			for(pair<int, int> p : adj[u]){
				int v = p.first, w = p.second;
				if(dist[v] > dist[u] + w){
					dist[v] = dist[u] + w;
					updated = true;
				}
			}
		}
		if(!updated)	break;
	}
	if(updated){
		dist[source] = -1; // 음수 cycle 존재
	}
	return dist;
}
```

## 관련 알고리즘
* [[ Shortest Path ]]
* [[ Dijkstra ]]
* [[ SPFA ]]

---
[^1]: 완화를 \\(x\\)번 반복하는 경우 \\(x\\)개 이하의 간선을 사용하는 최단거리를 모두 찾을 수 있기 때문
