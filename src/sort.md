# Sort

## Sort(정렬)이란?

프로그래밍에서 정렬이란 무작위로 있는 여러 자료들의 순서를 규칙성 있게 재배열하는 것을 뜻한다. 오름차순, 또는 내림차순으로 정렬하는 것이 일반적이나, 내가 임의로 정한 규칙에 따라 정렬해야 하는 경우도 있다. 정렬은 **모든 알고리즘 문제풀이의 기본**이 되는 요소이기 때문에 그 원리와 사용법을 잘 알고 있어야 한다.

정렬해야 하는 자료들의 개수가 `n`일 때, 정렬 알고리즘은 시간복잡도가 \\(O(n^2)\\)인 알고리즘, \\(O(n\log n)\\)인 일고리즘과 그 이외의 알고리즘으로 나뉘는데, 초급단계에서는 시간복잡도가 \\(O(n^2)\\) 방법만 알아도 큰 무리는 없다[^1]. 그러나 중급 단계 이상에서는 \\(N\leq 100000\\)개 정도의 자료들을 정렬해야 하는 경우가 생겨 \\(O(n^2)\\)방법으로는 시간초과가 나게 된다. 따라서 \\(O(nlogn)\\)정렬을 사용할 필요가 있다.

## \\( O(n^2) \\) Sort

### 종류

- [Bubble Sort](./bubble-sort.md)
- [Selection Sort](./selection-sort.md)
- [Insertion Sort](./insertion-sort)


## \\(O(n\log n)\\) Sort

### 종류

- [Merge Sort](./merge-sort.md)
- [Heap Sort](./heap-sort.md)
- [Quick Sort](./quick-sort.md)

## 기타 정렬

### 종류

- [Counting Sort](./counting-sort.md)
- [Radix Sort](./radix-sort.md)
- [Intro Sort](./intro-sort.md)


[^1]: 구현이 5에서 6줄 정도로 매우 짧고 개념도 직관적으로 이해가 쉽기 때문