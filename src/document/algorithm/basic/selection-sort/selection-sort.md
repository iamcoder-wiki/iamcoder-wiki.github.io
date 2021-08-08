# Selection Sort

## 소개

선택 정렬은 1번 원소부터 `n`개의 원소를 다 둘러보면서 최솟값을 찾은 뒤, 그 값을 원래 1번째에 위치한 원소와 바꾸고 이처럼 2번째 원소부터 `n`번째 원소까지 순서대로 남은 원소들을 둘러보면서 그중 최솟값과 바꾸는 과정을 반복하여 원소들을 정렬하는 방법이다.

## 코드

```c++
void sortarr()
{
    int minnum;
    for(int i=1; i<n; i++){
        minnum=i;
        for(int j=i+1; j<=n; j++)
            if(arr[j]<arr[minnum])
                minnum=j;
        swap(arr[i], arr[minnum]);
    }
}
```

