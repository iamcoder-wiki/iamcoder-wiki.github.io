# How to Change Site?

## Markdown

* [이런 사이트](https://theorydb.github.io/envops/2019/05/22/envops-blog-how-to-use-md/)에서 기본적인 정보를 얻을 수 있음

* 페이지의 가장 첫 제목은 `#`으로 표현하고 하위 제목들은 `#`의 개수 2개, 3개, ... , 6개 순으로 늘리면 됨

  * 넘버링은 알아서 해주니 `#` 개수로 하위 제목 표현만 해주면 됨

  >ex)
  >
  >```
  >### hello
  >### world
  >```
  >
  >
  >
  >### hello
  >
  >### world

  

* 어떤 __수식__을 문장 내부에 넣고 싶으면 `\\(`  수식 `\\)`  형태로 latex에 사용하던 수식들을` $  $` 대신 `\\(` 랑` \\)`로 감싸면 됨

  * 한줄 전체에 수식을 넣는 경우 `$$ comment $$` 로 처리 가능

  >ex)
  >
  >```
  >\\( N \leq 10 \\)
  >```
  >
  >
  >
  >\\( N \leq 10 \\)

* __코드__는 `` ``` c++ `` 로 시작해서 한줄 띄우고 코드 작성 후 ``  ``` ``  를 마지막 줄에 넣으면 됨 

  >ex)
  >
  >```
  >​``` c++
  >#include <stdio.h>
  >
  >int main(){
  >	printf("hello world");
  >	return 0;
  >}
  >​```
  >```
  >
  >``` c++
  >#include <stdio.h>
  >
  >int main(){
  >	printf("hello world");
  >	return 0;
  >}
  >```

  

* __인용 표현__은 첫줄과 마지막 줄에 `>`를 쓰면 되고, 인용 내부에서 또 인용은 `>`의 개수를 2개, 3개 순으로 늘리면 됨. 문제 적을때 인용 표현 내부에 문제, 입력, 출력 순으로 적으면 됨 ([bitmask 문서](../../datastructure/intermediate/bitmask/bitmask.md) 마지막 예제 부분 참고)

  >ex)
  >
  >```
  >>
  >hello 1
  >	>> 
  >	hello 2
  >	>>
  >>
  >```
  >
  >>
  >>hello 1
  >>>
  >>> hello 2
  >>>
  >>
  >
  >

* html은 그냥 넣으면 들어간다고 함... 그래서 javascript로 애니메이션을 넣거나 할수 있다고 함...

  * youtube embedding 가능
  * 주석을 처리 가능 `<!-- comment -->`

  