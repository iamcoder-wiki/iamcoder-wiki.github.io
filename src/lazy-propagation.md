# Lazy Propagation

## 들어가기에 앞서...

Lazy Propagation은 Segment Tree라는 자료구조 위에서 쓰이는 알고리즘입니다. 따라서 [[ Segment Tree ]]을 충분히 이해한 다음에, Lazy Propagation을 공부하는 것을 추천합니다.

## 소개

Segment Tree를 사용하면 구간에 대한 쿼리를 빠른 시간복잡도로 처리할 수 있습니다. 구체적으로, 합 세그먼트 트리가 어떤 쿼리 쌍을 처리할수 있는지 생각해 봅시다.

(한 원소 특정한 수를 더하는 쿼리, 구간의 합을 구하는 쿼리)

(연속한 구간에 특정한 수를 더하는 쿼리, 한 원소의 값을 구하는 쿼리)

중요한 점은, 값을 더하는 쿼리와 합을 구하는 쿼리 둘 중 하나는 반드시 '한 원소'로 범위가 제한된다는 점입니다. 즉, "연속한 구간에 특정 수를 더하고, 연속한 구간의 합을 구하는 쿼리" 는 Segment Tree만 사용해서는 처리할 수 없습니다. 왜 안되는지는 직접 생각해 보는것을 추천합니다. 여기서 Lazy Propagation이 등장합니다.

Segment Tree에서 Lazy Propagation을 사용한다면 구간 갱신 쿼리, 구간 질의 쿼리를 모두 해결할 수 있습니다. 물론 시간복잡도는 그대로입니다. ( 쿼리당 \\(O(\log N)\\) ). 어떻게 해결할까요? 이름에서 알 수 있듯이, 바로 "게으른 전파"를 통해서입니다.

## 작동 원리

설명에 들어가기에 앞서, 헷갈리지 않게 용어들을 먼저 정리합시다. 세그먼트 트리에는 노드들의 이름인 [노드 번호] 와, 각각의 노드들이 관리하는 [인덱스 구간]이 있습니다.

<img src="./lazy-propagation/lazy_propagation_1.png" width = 400 >

[노드 번호] 는, 어디까지나 Segment Tree의 1-based 구현 방식에서 자동으로 붙여지는 번호를 기준으로 하고 있습니다.

<img src="./lazy-propagation/lazy_propagation_2.png" width = 400 >

이제 정의는 끝났으니 Lazy Propagation에 대해 알아봅시다. 이해를 돕기 위해, 특정 구간에 \\(\pm x \\)를 하거나, 특정 구간의 총 합을 구하는 Segment Tree를 생각해 봅시다.

<img src="./lazy-propagation/lazy_propagation_3.png" width = 400 >

위 모습은 구간 [1,6] 의 원소가 각각 2,5,3,4,3,5 인 합 세그먼트 트리입니다. 한번 구간 [2,4]에 2를 더해봅시다. 바뀐 모습은 아래와 같습니다.

<img src="./lazy-propagation/lazy_propagation_4.png" width = 400 >

합 세그를 유지하기 위해 1,2,4,5,10,11번 노드가 값이 변경되었습니다. 만약에 전체 구간의 값을 변경한다면 세그의 모든 노드의 값을 바꿔야 할 것입니다. 그렇다면 당연히 쿼리당 logn 의 시간을 유지할 수 없습니다.
