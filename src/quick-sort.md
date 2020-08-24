# Quick Sort

## 소개

퀵 정렬은 분할정복을 기본으로 하는데, 어느 하나의 랜덤한 값을 잡아 그보다 작은 값들은 앞으로, 큰 값을 뒤로 몰아놓은 뒤 두 부분을 각각 재귀적으로 정렬해주는 정렬 방법이다. 시간복잡도는 이때 랜덤하게 잡은 값에 의존하는데, 모든 과정에서 이 랜덤값이 중앙값이면, 시간복잡도는 \\(O(nlogn)\\)이 되고, 모든 과정에서 랜덤값을 최소나 최대로 잡는 최악의 경우 시간복잡도가 \\(O(n^2)\\)이다. 

## 코드
 랜덤하게 선택하는 pivot을 그냥 정렬하는 수들 중 마지막 수로 하자. 실제로 퀵 정렬을 사용할 때는 이 pivot을 랜덤하게 고르는 부분이 추가되어야 한다.
```c++
void Quick_Sort(int st, int fin){
    if(st>=fin)return;
    int temp[100010], fr=st, re=fin-1;
    for(int i=st; i<fin; i++){
        if(arr[i]<=arr[fin])temp[fr++]=arr[i];
        else temp[re--]=arr[i];
    }
    for(int i=st; i<fin; i++)
        arr[i]=temp[i];
    swap(arr[fr], arr[fin]);
    Quick_Sort(st, re);
    Quick_Sort(fr, fin);
}
```

