# Stack
## 소개
스택(Stack)은 다음 두 가지 연산을 지원하는 자료구조다.
1. **push** : 새로운 원소를 추가
2. **pop** : 남아있는 원소들 중에서 가장 최근 더해진 원소를 삭제

스택의 pop 연산에서 **마지막으로 추가된 원소가 가장 먼저 제거**되기 때문에, **LIFO(Last In, First Out)** 구조라고 부르기도 한다.

## Code

스택은 배열로도 쉽게 구현할 수 있으며, [[ Linked List ]]로도 구현할 수 있다.

### Using Array
``` c++
struct my_stack{
	int arr[MAX_N+1];
	Int top = 0;
	void push(int x){
		arr[top] = x;
		top++;
	}
	int pop(){
		top—;
		return arr[top];
	}
};
```
