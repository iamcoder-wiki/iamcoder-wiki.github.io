# Sort

## Sort(정렬)이란?

프로그래밍에서 정렬이란 무작위로 있는 여러 자료들의 순서를 규칙성 있게 재배열하는 것을 뜻한다. 오름차순, 또는 내림차순으로 정렬하는 것이 일반적이나, 내가 임의로 정한 규칙에 따라 정렬해야 하는 경우도 있다. 정렬해야 하는 자료들의 개수가 \\(n\\)일 때, 정렬알고리즘은 크게 시간복잡도가 \\(O(n^2)\\), \\(O(n\log n)\\)과 그 이외인 것으로 나뉘는데, 초급단계에서는 이 \\(O(n^2)\\) 방법만 알아도 큰 무리는 없다. 구현이 \\(5\\)에서 \\(6\\)줄 정도로 매우 짧고 개념도 직관적으로 이해가 쉽기 때문이다. 그러나 중급단계 이상에서는 \\(100000\\)개 이상의 자료들을 정렬해야 하는 경우가 생겨 \\(O(n^2)\\)방법으로는 시간초과가 나게 된다. 따라서 \\(O(nlogn)\\)정렬을 기용해야 하는데, 구현이 모두 \\(20\\)줄 이상으로 생각보다 쉽지만은 않다. 그러나 우리에게는 하나의 무기가 있는데, 그게 뭔지는 차차 알아가 보도록 하자. 이제부터 설명을 시작할 건데, 이하의 예시코드는 다음의 함수 \\(sortarr()\\) 안에 들어갈 코드로 하자. \\(n\\)개의 \\(int\\)형 자료를 오름차순으로 정렬하여 순서대로 출력하는 프로그램을 다음과 같이 구현하자.

```c++
#include <bits/stdc++.h>
using namespace std;
int arr[100010], n;
int main()  
{
    scanf("%d", &n);
    for(int i=1; i<=n; i++)
        scanf("%d", &arr[i]);
    sortarr();  //여기
    for(int i=1; i<=n; i++)
        printf("%d ", arr[i]);
}
```

## \\( O(n^2) \\) Sort

### 종류

- [Bubble Sort](./sort/bubblesort.md)
- [Selection Sort](./sort/selectionsort.md)
- [Insertion Sort](./sort/insertionsort)

### 여담

이로써 기본적인 정렬 알고리즘들을 살펴보았는데, 이 알고리즘들은 정렬할 때 쓰일 뿐만 아니라 문제에도 활용이 되는 기본 중의 기본으로 꼭 익혀둬야 한다. 앞으로의 \\(O(n\log n)\\) 알고리즘들은 더욱 심화된 자료구조와 기법을 사용하므로 모르는 자료구조가 있으면 같은 책의 앞 또는 뒤에 설명이 있으므로 참고하면 되고, 인터넷에서도 설명이 친절하게 되어 있으니 참고하길 바란다.

## \\(O(n\log n)\\) Sort

### 종류

- [Merge Sort](./sort/mergesort)
- [Heap Sort](./sort/heapsort)
- [Quick Sort](./sort/quicksort)

## 기타 정렬

### 종류

- [Counting Sort](./sort/countingsort)
- [Radix Sort](./sort/radixsort)
- [Intro Sort](./sort/introsort)

## 여담

