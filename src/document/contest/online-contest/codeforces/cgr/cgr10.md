# Codeforces/Global Round 10

## A

[A. Omkar and Password](https://codeforces.com/contest/1392/problem/A)

\\(a_i\\)중 최댓값을 \\(mx\\)라 하면 다른 숫자와 합칠 수 있는 \\(a_i = mx\\)가 하나라도 존재하면 그 숫자에 계속 양 옆 숫자를 합칠 수 있기 때문에(수열의 유일한 최댓값이 된다.) 1개만 남을 때까지 연산이 가능하다.

그렇지 않은 경우는 모든 수가 mx로 동일한 경우로 이때는 연산이 아예 불가능하므로 답은 \\(N\\)으로 결정된다.


## B
[B. Omkar and Infinity Clock](https://codeforces.com/contest/1392/problem/B)

연산을 \\(2n+1\\)번 한 결과와 연산을 1번 한 결과는 같다. 마찬가지로 연산을 \\(2n\\)번 한 결과와 연산을 2번 한 결과는 같다. 따라서 연산 횟수의 홀짝성에 따라 최대 2번 직접 연산을 해주면 된다.


## C
[C. Omkar and Waterslide](https://codeforces.com/contest/1392/problem/C)

\\(i\\)를 \\(N\\)에서 부터 감소시키면서 \\(a[i-1]>a[i]\\)인 경우에 \\(i\\)부터 \\(N\\)까지 \\(a[i]-a[i-1]\\)만큼 더해주면 된다. 이 연산 횟수보다 적은 횟수로는 불가능하다는 것도 연산을 할 때마다 \\(i\\)부터 \\(N\\)까지 1 더하는게 최선이라는 것을 이용하여 쉽게 증명할 수 있다.


## D
[D. Omkar and Bed Wars](https://codeforces.com/contest/1392/problem/D)

연속한 사람들이 선택할 수 있는 경우의 수는 RL, RRL, RLL, RRLL밖에 없다. 이를 관찰해보면 문제 조건이 같은 문자가 최대 2번 연속하도록 바꾸는 것과 동치임을 알 수 있다. 같은 문자가 연속한 부분들로 나눠 각 부분마다 \\(길이 / 3\\)만큼 바꾸면 조건을 만족하도록 바꿀 수 있다.


## E
[E. Omkar and Duck](https://codeforces.com/contest/1392/problem/E)

우상향하는 대각선으로 좌표를 분류하면 \\(i\\)번째 대각선에서 오른쪽으로 가는지 아래로 가는지 대각선에 0과 \\(2^i\\)를 번갈아 놓아 입력 값이 \\(2^i\\)를 포함하는지 검사하여 알 수 있도록 할 수 있다. 따라서 `(x, y)` 위치의 값은 x가 홀수면 0, x가 짝수면 \\(2^{x+y-1}\\)로 놓고 입력 값을 이진수로 표현하여 각 대각선에서 오른쪽으로 갈지 아래로 갈지 선택해주면 된다.


## F
[F. Omkar and Landslide](https://codeforces.com/contest/1392/problem/F)

연산의 순서가 중요하지 않다는 것을 이용하여 길이와 높이의 합이 같은 두 수열의 경우 결과가 같게 나온다는 것을 직관적으로 생각할 수 있다. 따라서 \\(N\\)과 높이의 합만 고려하여 답을 구할 수 있다.

처음 모든 위치 높이가 0이라 하고 \\(N\\)번째 위치에 높이를 1씩 추가하면서 Landslide가 진행되는 모습을 생각해보면 \\({N\times (N-1)} \over {2} \\)개를 추가하면 최종적으로 1부터 N까지 높이가 \\(0, 1, ..., N-1\\)가 된다는 것을 알 수 있다. 이후 \\(N\\)번째 위치에 높이를 1씩 추가하면 앞에서부터 1씩 높이가 증가함을 알 수 있다. 이를 이용하면 \\(i\\)번쨰 위치의 최종 높이를 \\(N\\)과 높이들의 합으로 계산할 수 있다.


## G
[G. Omkar and Pies](https://codeforces.com/contest/1392/problem/G)



## H
[H. ZS Shuffles Cards](https://codeforces.com/contest/1392/problem/H)



## I
[I. Kevin and Grid](https://codeforces.com/contest/1392/problem/I)



