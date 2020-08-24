# Intro Sort

## 소개

[[ Quick Sort ]]와 [[ Heap Sort ]]를 합한 정렬이다. 기본적으로 퀵정렬을 하지만, 어느정도 재귀가 깊어지면 힙정렬을 이용해 퀵정렬에서 나올 수 있는 최악의 시간복잡도를 피해준다. 

## STL sort

인트로 정렬을 사용하는 방법은 다른 \\(O(N\log N)\\) 정렬들보다 쉽다! 왜냐하면, C++에서 이 인트로 정렬을 지원해주기 때문에 딱 한줄이면 정렬을 할 수 있다! 

`<algorithm>` 헤더파일에 존재하는 `sort`함수는 `sort(시작포인터, 끝포인터, 비교함수의 포인터)`의 꼴로 이루어져있는데, 3번째 항을 빈칸으로 남겨둔다면 오름차순 정렬을 시행한다. 

### 비교 함수

`sort`함수의 가장 큰 장점은 `int`뿐만 아니라 내가 임의로 만든 구조체라던지 `pair`등의 대소비교가 가능한 모든 자료구조에 대해서 적용이 가능하다는 것이다! 

```c++
#include <bits/stdc++.h>
using namespace std;
struct data{
    int a;
    char c;
}arr[100010];

bool comp(data x, data y){
    if(x.a!=y.a)    return x.a<y.a;
    return x.c<y.c;
}

int main(){
    int n;
    scanf("%d", &n);
    for(int i=1; i<=n; i++){
        scanf("%d %c", &arr[i].a, &arr[i].c);
    }
    sort(arr+1, arr+n+1, comp);
    for(int i=1; i<=n; i++){
        printf("%d %c\n", arr[i].a, arr[i].c);
    }
}
```

위와 같이 코드를 작성하면, 각 구조체를 `a`값이 작은것, `a`값이 같다면 `c`값이 작은 것 순서로 구조체들이 정렬된다. 즉, `sort`함수에 내장된 코드들이 `comp` 함수를 호출할때 `x`가 앞의 원소, `y`가 뒤의 원소일때 `comp(x, y)`가 리턴하는 값이 `true` 이면 바꾸지 않고 `false`일때 두 자리가 바뀌게 된다. 

## 여담
다양한 정렬 방법이 있지만, 문제 풀이에서 가장 많이 활용하는 정렬 방법은 이 STL `sort` 함수다. 따라서, 구조체 정렬이나 특정 비교 함수를 사용한 정렬 등 다양한 정렬을 `sort`함수를 사용하여 구현할 줄 알아야 한다.
