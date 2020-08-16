# Heavy-Light Decomposition

## 소개

HLD는 트리에 대한 연산을 긴 직선에 대한 연산처럼 바꾸어 할 수 있도록 하는 방법입니다.
따라서, 이 글을 이해하기 위해서는, [Segment Tree](./segment-tree.md),[dfs](./dfs.md),[lca(sparse table)](./lca.md)등에 대한 이해가 필요합니다. 


HLD는 Heavy Light Decomposition 의 약자로서, 간선을 무거운 간선과 가벼운 간선으로 나누어 분류해 관리하는 방법입니다. 이를 위해서는 트리가 rooted Tree여야 합니다.(Root를 하나로 정해야 합니다) 그리고 트리의 정점의 무게를 그 정점의 Subtree의 크기로 정의합시다. 그리고 부모와 자식을 잇는 간선 중에 자식이 부모의 무게의 반 이상인 간선을 무거운 간선으로 정의합시다.

그러면 여기서 두 가지 사실을 이끌어낼 수 있습니다. 

* 한 정점에서 자식으로 가는 간선 중 무거운 간선은 단 한개이다.
  두 자식이 모두 부모의 무게의 반 이상이 될 수는 없기 때문입니다.

* root에서 한 정점으로 가는 경로에 가벼운 간선은 \\(O(\log N)\\)개이다. 
  가벼운 간선을 통해서 내려간다면 무게가 반 이상으로 줄어들기 때문에 이 또한 자명합니다.


무거운 간선들이 인접해 있다면 그것을 하나로 이은 것을 무거운 경로라고 합시다.  그 무거운 경로의 맨 위의 가벼운 간선도 경로에 포함시키고, 아래에 무거운 경로가 없는 가벼운 간선은 그것 하나를 무거운 경로로 본다면, 트리의 경로를 여러개의 무거운 경로로 바꾸어 볼 수 있습니다.



이런 무거운 경로가 끊어지는 것은 가벼운 간선을 만날 때만이기 때문에, 아까 언급한 2번 사실에 의해 트리의 어떤 경로는 항상 \\(O(\log N)\\)개의 무거운 경로들의 일부의 합으로 나타내어질 수 있습니다.


이 사실을 이용해서 무거운 경로들을 [Segment Tree](./segment-tree.md)를 이용해서 관리해준다면 트리의 경로에 대한 연산을 직선에 대한 연산처럼 할 수 있을 것입니다.((ex)RMQ,구간 합 쿼리)  이것이 바로 HLD입니다.

## 예시

[HLD를 통해 풀 수 있는 쿼리 문제 하나](acmicpc.net/problem/13510)를 소개하고자 합니다. 문제를 요약하면 다음과 같습니다.

>`N`개의 정점으로 이루어진 트리(무방향 사이클이 없는 연결 그래프)가 있다. 정점은 1번부터 `N`번까지 번호가 매겨져 있고, 간선은 1번부터 `N`-1번까지 번호가 매겨져 있다.
>
>아래의 두 쿼리를 수행하는 프로그램을 작성하시오.
>
>1 `i` `c`: `i`번 간선의 비용을 `c`로 바꾼다.
>
>2 `u` `v`: `u`에서 `v`로 가는 경로에 존재하는 비용 중에서 가장 큰 것을 출력한다.
>
>첫째 줄에 N (2 \\(\leq\\) N \\(\leq\\) 100,000)이 주어진다.
>둘째 줄부터 N-1개의 줄에는 i번 간선이 연결하는 두 정점 번호 u와 v와 비용 w가 주어진다.
>다음 줄에는 쿼리의 개수 M (1 \\(\leq\\) M \\(\leq\\) 100,000)이 주어진다.
>다음 M개의 줄에는 쿼리가 한 줄에 하나씩 주어진다.
>간선의 비용은 항상 1,000,000보다 작거나 같은 자연수이다.

트리 경로에서의 구간 최대 쿼리, 업데이트 연산을 수행해주면 되는 문제입니다.
HLD 를 사용해 \\(O(M\log^2N)\\)에 풀 수 있습니다. 

밑에는 코드 부분부분에 관한 설명이 있습니다. [Segment Tree](./segment-tree.md)를 만드는 부분, [lca](./lca.md)에 관련된 spars table, [dfs](./dfs.md)를 이용한 무게 구하기와 깊이 구하기 등은 이미 알고 있다고 생각하고 설명을 생략했습니다.

### HLD

``` c++
void hld(int root){
    queue<int> q;
    q.push(root);
    while(!q.empty()){
        int now=q.front();
        q.pop();
        for(auto i:children[now]){
            q.push(i);
        }
        if(now==root) continue;
        int prt=parent[0][now];
        if(weight[now]*2>=weight[prt]&&prt!=root){
            int prtheavynum=heavynum[prt];
            heavy_path[prtheavynum].push_back(now);
            heavynum[now]=prtheavynum;
        }
        else{
            heavynum[now]=(int)heavy_path.size();
            heavy_path.push_back(vector<int>(2));
            heavy_path.back()[0]=prt;
            heavy_path.back()[1]=now;
        }
    }
}
```

`root`부터 너비 우선 탐색으로 경로를 만들어줍니다. 간선은 번호가 없기에, 간선을 관리하려면 자식의 번호를 이용해서 그 자식과 부모를 잇는 간선을 관리해주는 것이 편리합니다.

`heavynum`은 각 간선이 포함된 무거운 경로의 번호이고, `heavy_path`는 무거운 경로들의 모음 `vector`입니다. 

만약 자신이 `root`라면 자신 위에 간선이 없기에 아무것도 하지 않습니다.
만약 부모 무게가 자신의 무게의 2배보다 작고 부모가 `root`가 아니라면, 무거운 간선이므로 이미 있던 무거운 경로에 추가해줍니다.

부모가 `root`이거나 가벼운 간선이면 새로운 무거운 경로의 시작이므로 새로운 무거운 경로를 만들어줍니다.

### Update

``` c++
int findedge(int pathidx,int v){
    int top=heavy_path[pathidx][0];
    return depth[v]-depth[top]-1;
}
void update(int u,int v,int cost){
    if(parent[0][u]==v) swap(u,v);
    int pathidx=findedge(heavynum[v],v);
    segment_trees[heavynum[v]].update(pathidx,cost);
}
```

`update`는 간단합니다.

`findedge`는 무거운 경로에서 몇번째 간선인지 찾아줍니다. 맨 위의 정점은 나타내는 간선이 없으므로 -1을 해줍니다.

`u`가 `v`의 부모로 유지한 뒤, 몇번째 간선인지 Segment Tree에서 찾아서 갱신해주면 끝입니다.

### Query

``` c++
int query_topdown(int p,int v){
    if(p==v) return -1;
    if(heavynum[p]==heavynum[v]){
        int pathidx=heavynum[p];
        int s=findedge(pathidx, p)+1;
        int e=findedge(pathidx, v);
        return segment_trees[pathidx].query(s, e);
    }
    
    int pathidx=heavynum[v];
    int top=heavy_path[pathidx][0];
    int e=findedge(pathidx, v);
    return max(segment_trees[pathidx].query(0, e),query_topdown(p, top));
}
int query(int u,int v){
    int p=lca(u,v);
    return max(query_topdown(p,v),query_topdown(p,u));
}
```

`query`는 조금 복잡합니다.
우선, `u`,`v`의 `lca`를 구한 뒤 두 부분으로 나누어 계산합니다.

`query_topdown`에서는 만약 `p`,`v`가 같다면 간선이 없으므로 -1을 리턴하고,
두개가 같은 무거운 경로에 속했다면 Segment Tree에서 계산해줍니다.
만약 아니라면 `v`가 속한 무거운 경로의 맨 위 정점까지 올라가면서 그 사이의 간선들에 대한 연산을 Segment Tree로 해주고, 그 맨 위 정점과 p에 대한 연산을 `query_topdown`으로 다시 처리해줍니다.

`query_topdown` 은 최대 \\(O(\log N)\\) 번 호출되는데, 아까 언급했듯이 만날 수 있는 무거운 경로의 개수가 그렇기 때문입니다.