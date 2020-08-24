# Heap Sort

## 소개

힙 정렬에서는 최소 힙을 이용해 [[ Selection Sort ]]의 방법을 최적화하여 시간복잡도를 줄인다. 선택 정렬에서는 남은 원소들 중에서 최솟값을 찾기 위해 매번 남은 원소를 모두 탐색하지만, 힙 정렬에서는 힙을 사용하여 이를 \\O(\log N)\\에 처리한다. 따라서 이를 이용해 구현한 힙 정렬은 \\(O(n\log n)\\)의 시간복잡도를 가진다. 

## 코드

### Heap Sort without priority_queue

```c++
void in_heap(int num){
    heap[++siz]=num;
    int temp=siz;
    while(temp>1){
        if(heap[temp/2]>heap[temp])swap(heap[temp/2], heap[temp]);
        else break;
        temp/=2;
    }
}
void poptop_heap(){
    swap(heap[1], heap[siz]);
    heap[siz] = 987654321;
    siz--;
    int temp=1;
    while(temp<=siz/2){
        if(heap[temp]<=heap[temp*2]&&heap[temp]<=heap[temp*2+1])break;
        if(heap[temp*2]<=heap[temp*2+1]){
            swap(heap[temp], heap[temp*2]);
            temp*=2;
        }
        else{
            swap(heap[temp], heap[temp*2+1]);
            temp*=2;
            temp++;
        }
    }
}
void Heap_Sort(){
    for(int i=1; i<=N; i++)
        in_heap(arr[i]);
    for(int i=1; i<=N; i++){
        arr[i]=heap[1];
        poptop_heap();
    }
}
```

### Heap Sort using priority_queue

힙이란 자료구조는 이미 [[ Priority Queue ]]의 형태로 구현되어 있으므로 이를 이용하면 코드가 훨씬 간결해진다. 여기서 주의할 점은 [[ Priority Queue ]]는 최대 힙이기 때문에 원래 수에 -1을 곱해준 값으로 우선순위 큐 안에 넣어주게 되면 최소 힙처럼 사용할 수 있다. (우선순위 큐를 최소 힙으로 사용하려면 `priority_queue <int, vector<int>, greater<int> > pq` 라고 정의해 주면 된다.)
```c++
void Heap_Sort()
{
    priority_queue<int> pq;
    for(int i=1; i<=n; i++)
        pq.push(-arr[i]);
    for(int i=1; i<=n; i++){
        arr[i]=-pq.top();
        pq.pop();
    }
}
```

