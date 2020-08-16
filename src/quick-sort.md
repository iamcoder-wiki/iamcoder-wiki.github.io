# Quick Sort

## 소개

퀵정렬은 다른 알고리즘과는 다르게 시간복잡도가 딱히 정해져 있지 않다. 그 이유는 시간복잡도가 `n`이 아닌 입력된 배열에 의존하기 때문이다. 퀵정렬은 분할정복을 기본으로 하는데, 어느 하나의 랜덤한 값을 잡아 그보다 작은 값들은 앞으로, 큰 값을 뒤로 몰아놓은 뒤 두 부분을 각각 재귀적으로 정렬해주는 것이다. 시간복잡도는 이때 랜덤하게 잡은 값에 의존하는데, 모든 과정에서 이 랜덤값이 중앙값이면, 시간복잡도는 \\(O(nlogn)\\)이 되고, 모든 과정에서 랜덤값이 최소이거나 최대이면 시간복잡도가 \\(O(n^2)\\)이다. 그런데 사실 이럴 일은 매우 드물기 때문에, 안심하고 써도 문제는 없다. `main`함수의 `arrsort()`를 `quicksort(1, n)`으로 바꾸자. 우리는 이 랜덤한 값을 그냥 정렬하는 수들 중 마지막 수로 하자. 실전에서는 이 랜덤한 값을 난수로 처리하거나, 정렬하는 수들중의 중앙값을 이용한다.

## 코드

```c++
void quicksort(int st, int fin)
{
    if(st>=fin)return;
    int temp[100010], fr=st, re=fin-1;
    for(int i=st; i<fin; i++){
        if(arr[i]<=arr[fin])temp[fr++]=arr[i];
        else temp[re--]=arr[i];
    }
    for(int i=st; i<fin; i++)
        arr[i]=temp[i];
    swap(arr[fr], arr[fin]);
    quicksort(st, re);
    quicksort(fr, fin);
}
```

