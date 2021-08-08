# Disjoint Set
## 소개
서로소 집합(Disjoint Set) 구조는 유니온-파인드(Union-Find) 자료구조로도 잘 알려져 있으며, 서로소 집합들, 즉 서로 겹치는 부분이 없는 집합들을 저장하기 위한 자료구조다. 

## Code
서로소 집합을 구현하는 경우 대부분 여러 트리들로 이루어진 Forest 구조를 사용하며, 이를 **disjoint-set forest**라 한다. 트리를 구성하는 노드들은 같은 집합에 속하며 두 서로소 집합을 더하는 연산을 하는 경우 한 트리의 루트\\(v\\)를 잡아 다른 트리의 임의의 노드의 자식으로 붙여 두 트리를 합쳐주면 된다.

두 서로소 집합을 합치는 **Union** 연산과 특정 원소의 그룹을 찾는 **Find** 연산을 지원하며, 각 연산들에서 시간복잡도를 줄이기 위해 다음과 같은 최적화들을 진행한다.
* **Union**
	* *Union by size* : 더 많은 원소를 갖는 그룹의 트리 루트 노드에 더 작은 원소를 갖는 그룹의 루트 노드를 자식으로 붙인다.
	* *Union by rank* : 트리의 높이(height)가 큰 트리의 루트 노드에 상대적으로 높이가 작은 트리의 루트 노드를 자식으로 붙인다.
* **Find**
	* *Path compression* : 한번 노드들의 부모를 따라가며 그룹 번호를 찾는 과정에서 지나친 노드들의 부모를 루트 노드로 바꿔준다.

다음 코드는 *Path compression*만을 사용한 코드다. [^1]

``` c++
void Init(){
	// initialize group data
	for(int i=1; i<=N; i++){
		group[i] = i;
	}
}

int Find(int x){
	// Find group number of x'th element
	return (x==g[x])?g[x]:g[x] = Find(g[x]);
}

void Union(int x, int y){
	x = Find(x); y = Find(y);
	g[x] = y;
}
```
## 관련 알고리즘
* [[ Kruskal's Algorithm ]]


---
[^1]: *Path compression*만 해줘도 대부분의 문제에서 시간 안에 **Union**과 **Find** 연산을 할 수 있다.



