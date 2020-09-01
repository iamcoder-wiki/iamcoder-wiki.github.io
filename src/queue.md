# Queue
## 소개
큐(Queue)는 다음 두 가지 연산을 지원하는 자료구조다.
1. **push** : 새로운 원소를 추가
2. **pop** : 남아있는 원소들 중에서 가장 처음 더해진 원소를 삭제

큐의 pop 연산에서는 **가장 일찍 추가된 원소를 우선적으로 제거**하기 때문에, **FIFO(First In, First Out)** 구조라고 부르기도 한다.

## Code

큐도 [[ Stack ]]과 마찬가지고 배열로 구현할 수 있으며, [[ Linked List ]]로도 구현할 수 있다.

### Using Array
``` c++
struct my_queue{
	int arr[MAX_N+1];
	int front = 0, rear = 0;
	void push(int x){
		arr[rear] = x;
		rear++;
	}
	int pop(){
		front++;
		return arr[front-1];
	}
}
```
## Circular Queue
원형 큐(Circular Queue)는 선형으로 구현한 Queue에서 생기는 비효율적인 메모리 활용을 개선하기 위한 자료구조다. 원형이라는 이름에서 Queue에서 `rear`값이 일정 수준을 넘어서면 배열의 첫 인덱스로 보내서 인덱스를 순환시키는 구조임을 알 수 있다.

### Code Using Array
기존 Queue 코드에서 `front`와 `rear`의 연산하는 과정에 `size`로 나눈 나머지 값을 대신 사용하면 된다.
``` c++
struct my_circular_queue{
	int arr[MAX_N+1];
	int front = 0, rear = 0;
	void push(int x){
		arr[rear] = x;
		rear = (rear + 1) % size;
	}
	int pop(){
		front = (front + 1) % size;
		return arr[(front + (size - 1)) % size];
	}
}
```

## STL Queue
STL에서 구현되어 있는 큐를 사용하여  다음 기능들을 사용할 수 있다.

* 선언 : `queue<int> q;`
* push : `q.push(x);`
* pop : `q.pop(); // 리턴값은 없다`
* 큐의 원소 개수 : `q.size()`
* 큐가 비어있는지 `bool`값으로 리턴 : `q.empty()`
* 맨 앞 원소 : `q.front()`
* 맨 뒤 원소 : `q.back()`

## 관련 자료구조
* [[ Deque ]]
* [[ Priority Queue ]]
