# Merge Sort

## 소개

병합정렬은 분할정복, 혹은 [Divide \& Conquer](./divide-and-conquer.md)를 사용한 알고리즘으로, 폰 노이만이 개발했다고 한다. 병합정렬의 아이디어는 어떤 배열을 두 조각으로 자르는 거에서 시작한다. 만약 두 조각으로 자른 것들이 이미 정렬되어 있다고 하면, 두 조각을 합쳐서 원래 배열을 정렬시키는 데에는 \\(O(n)\\)의 시간복잡도밖에 걸리지 않는다. 어떻게 하느냐면, “3, 6, 8, 9”와 “1, 4, 7, 10”을 합칠 때(병합할 때) 두 배열에 대한 피벗을 각각 잡아 피벗들끼리 비교하여 더 작은 것부터 원래 배열에 담는 것이다. 즉 이 경우 3과 1, 3과 4, 6과 4, 6과 7, 8과 7, 8과 10, 9와 10을 순서대로 비교하여 새 배열에는 “1, 3, 4, 6, 7, 8, 9, 10”이 들어가게 된다. 그렇다면, 이를 재귀적으로 계속 절반씩 나눠가면서 각 배열의 절반씩을 정렬하면 될 것이다. 그런데, `n`을 계속 절반으로 쪼개나가는 것이니 재귀탐색은 깊어봤자 \\(\log n\\)번씩 밖에 실행되지 않을 것이다! 따라서 전체 알고리즘은 \\(O(n\log n)\\)안에 실행될 것이다. `main`함수의 `arrsort()`를 `mergesort(1, n)`으로 바꾸고 구현한 병합정렬의 코드이다.

## 코드

```c++
void mergesort(int st, int fin)
{
    if(st>=fin)return;
    int mid=(st+fin)/2;
    mergesort(st, mid);
    mergesort(mid+1, fin);
    int pv1=st, pv2=mid+1, merged[100010], re=st;
    while(pv1<=mid||pv2<=fin){
        if(pv1>mid)merged[re++]=arr[pv2++];
        else if(pv2>fin)merged[re++]=arr[pv1++];
        else merged[re++]=arr[pv1]<=arr[pv2]?arr[pv1++]:arr[pv2++];
    }
    for(int i=st; i<=fin; i++){
        arr[i]=merged[i];
    }
}
```

