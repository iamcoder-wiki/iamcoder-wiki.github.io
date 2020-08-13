<script>
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function writeTitle() {
    let s = ['i_', 'ia_', 'iam_', 'iamc_', 'iamco_', 'iamcod_', 'iamcode_', 
    'iamcoder_', 'iamcoder:_', 'iamcoder:ㄷ_', 'iamcoder:대_', 'iamcoder:대ㅁ_', 
    'iamcoder:대무_', 'iamcoder:대문_', 'iamcoder:대문_', 'iamcoder:대문_', 
    'iamcoder:대문_', 'iamcoder:대문', 'iamcoder:대문', 'iamcoder:대문', 'iamcoder:대문',
    'iamcoder:대문_', 'iamcoder:대문_', 'iamcoder:대문_', 'iamcoder:대문_', 
    'iamcoder:대문'];
    for(let i in s) {
        document.getElementById('title').innerHTML = s[i];
        await sleep(100);
    }
}

window.onload = writeTitle;
</script>

<h1 id="title">_</h1>

안녕하세요. IamCoder(나는코더다) 위키입니다.

## 소개
- [사이트 소개](./intro/site.md)
- [IamCoder](./intro/iamcoder/iamcoder.md)
## 알고리즘
- [Sort](./algorithm/sort/sort.md)
- [Graph Traversal](./algorithm/graphtraversal/graphtraversal.md)
- [Divide & Conquer](./algorithm/divideandconquer/divideandconquer.md)
- [Dynamic Programming](./algorithm/dp/dp.md)
- [Shortest Path](./algorithm/shortestpath/shortestpath.md)
- [Query Technique](./algorithm/query/query.md)
- [DP Optimization](./algorithm/dpopt/dpopt.md)
- [Network Flow](./algorithm/networkflow/networkflow.md)
- [Geometry](./algorithm/geometry/geometry.md)
- [String](./algorithm/string/string.md)
## 자료구조
* [Basic](./datastructure/basic/basic.md)
* [Intermediate](./datastructure/intermediate/intermediate.md)
* [Tree](./datastructure/tree/tree.md)
* [Segment Tree](./datastructure/segmenttree/segmenttree.md)
* [Advanced](./datastructure/advanced/advanced.md)
## 기타
- [Additional Topics](./additional/additional.md)

## Problem Solving

* [OI](./ps/oi/oi.md)
* [SITE](./ps/site.md)