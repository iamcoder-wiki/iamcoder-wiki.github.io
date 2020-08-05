# Heap Sort

## 소개

우선 힙이라는 자료구조를 안다는 가정하에 설명을 시작하도록 하겠다. 우리는 최소 힙을 이용해 선택정렬의 방법을 최적화할 것이다. 선택정렬에서 어떤 구간의 최솟값을 찾는데 그것을 찾기 위해 `n`개의 칸을 탐색하던지, 힙을 이용하는지의 차이이다. 힙에서는 원소를 추가하는데 \\(\log n\\), 삭제하는데 \\(\log n\\)의 시간복잡도가 필요한 반면, 힙의 최소 혹은 최댓값은 상수시간 안에 구해낼 수 있어 이를 이용해 구현한 힙정렬은 \\(O(n\log n)\\)의 시간복잡도를 가진다. `main`함수의 `sortarr()`을 `heapsort()`로 바꾼 뒤 작성한 코드이다.

## 코드

### Heap Sort without priority_queue

```c++
void in_heap(int num)
{
    heap[++siz]=num;
    int temp=siz;
    while(temp>1){
        if(heap[temp/2]>heap[temp])swap(heap[temp/2], heap[temp]);
        else break;
        temp/=2;
    }
}
void poptop_heap()
{
    swap(heap[1], heap[siz]);
    heap[siz]=987654321;
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
void heapsort()
{
    for(int i=1; i<=n; i++)
        in_heap(arr[i]);
    for(int i=1; i<=n; i++){
        arr[i]=heap[1];
        poptop_heap();
    }
}
```

### Heap Sort using priority_queue

힙이란 자료구조는 이미 우선순위 큐의 형태로 구현되어 있으므로 이를 이용하면 코드가 훨씬 간결해진다. 다만 우선순위 큐는 최대 힙으로 원래 수에 -1을 곱해준 값으로 우선순위 큐 안에 넣어주게 되면 최소 힙처럼 사용할 수 있다.

```c++
void heapsort()
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

