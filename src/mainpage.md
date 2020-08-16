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
- [사이트 소개](./site.md)
- [IamCoder](./iamcoder.md)
## 알고리즘
- [Sort](./sort.md)
- [Graph Traversal](./graph-traversal.md)
- [Divide & Conquer](./divide-and-conquer.md)
- [Dynamic Programming](./dp.md)
- [Shortest Path](./shortest-path.md)
- [Query Technique](./query-technique.md)
- [DP Optimization](./dp-optimization.md)
- [Network Flow](./network-flow.md)
- [Geometry](./geometry.md)
- [String](./string.md)
## 자료구조
* [Basic](./basic-data-structure.md)
* [Intermediate](./intermediate-data-structure.md)
* [Tree](./tree.md)
* [Segment Tree](./segment-tree.md)
* [Advanced](./advanced-data-structure.md)
## 기타
- [Additional Topics](./additional-topics.md)

## Problem Solving

* [Problem Solving](./problem-solving.md)
* [OI](./problem-solving/oi.md)
* [SITE](./problem-solving/site.md)

