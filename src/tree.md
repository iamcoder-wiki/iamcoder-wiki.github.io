# Tree
## 소개
트리(Tree) 구조는 알고리즘 문제 풀이에 자주 주어지는 데이터 구조다. 트리 구조는 루트(Root) 노드를 하나 가지며, 나머지 노드의 경우 자신의 부모 노드와 간선으로 연결되어 있는 구조를 갖는다. 이때 간선 방향은 부모에서 자식을 향하는 방향으로 결정된다.

<?xml version="1.0" encoding="UTF-8"?> <img src="./tree/tree1.png" width = 500 >

## 용어
트리 구조에서 다음과 같은 용어들을 사용하기도 한다.
* 자식 노드(child node) : 어떤 노드 하위에 간선으로 연결되어 있는 노드
* 부모 노드(parent node) : 어떤 노드 상위에 간선으로 연결되어 있는 노드(*부모 노드가 존재하는 경우 부모 노드가 유일하다*)
* **형제 노드(sibling node)** : 같은 부모 노드를 갖는 노드들
* **내부 노드(internal node, inner node)** : 자식 노드를 갖고 있는 노드
* **외부 노드(external node, outer node)** / 리프 노드(leaf node) : 자식 노드를 갖지 않는 노드
* **루트 노드(root node)** : 가장 상위의 노드, 부모 노드를 갖지 않는다.
* 노드의 **높이(height)** : 그 노드에서 아래에 있는 가장 먼 리프 노드 까지의 거리
* **트리의 높이** : 루트 노드의 높이
* 노드의 **깊이(depth)** : 루트 노드에서 해당 노드까지의 거리 
* 트리의 **서브트리(subtree)** : 트리에 속한 어떤 노드 \\(v\\)를 포함하며 그 하위 모든 노드를 포함하는 트리
* 노드의 **조상(ancestor)** : 그 노드에서 루트 노드로 향하는 경로에 존재하는 모든 노드

## 관련 알고리즘

* [[ Disjoint Set ]]
* [[ Minimum Spanning Tree ]]
  - [[ Prim's Algorithm ]]
  - [[ Kruskal's Algorithm ]]
* [[ Topological Sort ]]
* [[ Euler Tour ]]
* [[ Tree Diameter ]]
* [[ LCA ]]
* [[ Cactus Graph ]]
