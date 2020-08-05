# Selection Sort

## 소개

오히려 삽입정렬보다 개념을 이해하기는 더 쉬울지도 모르겠다. \\(1\\)번 원소부터 \\(n\\)개의 원소를 다 둘러보면서 최솟값을 찾은 뒤, 그 값을 원래 \\(1\\)번원소와 바꾸고, \\(2\\)번 원소부터 \\(n\\)번원소까지 이를 반복하는 것이다. 긴말없이 코드로 보여주도록 하겠다.

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

