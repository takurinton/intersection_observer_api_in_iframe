## Intersection Observer でスクロール率を実現したい

### 問題点

iframe 内でのスクロール率判定ができない。  
80% のところまで来たら `console.log('80% here');` が呼ばれるようになってる。  
`ifeame.html` で動作確認するとうまくいってるけど、`index.html` で動作確認するとうまく行かない。  


### 考えたこと

- `document.body` が `window.document.body` を参照してるのではないか
  - もしそうなら `document.querySelector('.className').lastChild.contentDocument.body` 的な感じでできそうだなって思ったけど違った
  - 中で見てる `document` は中の `document` だったので iframe 内で完結してた
- そもそも iframe では動かないんじゃないか
  - 違う適当な要素を target にして root を viewport にしたら動いた
  - body に対して viewport をずらすという動作がいけないっぽい
- shadow dom がいけないんじゃないか
  - shadow dom を適当に作ってやってみたけど普通に動いた
  - 中の要素へのアクセスはできるので（てかそもそも body を基準にしてるから DOM はいじってない）問題なさそうだった


### 解決方法

~~よくわからないけど、viewport をずらして残りの高さでスクロール率を判定するのではなくて、違う別の方法で判定できれば良いんじゃないかなって思った。~~

しにゃい大先生から指摘もらって動いた！！！  

参考：https://w3c.github.io/IntersectionObserver/#intersection-observer-interface


### 補足

ブログにまとめた。  
[iframe について | たくりんとんのブログ](https://blog.takurinton.com/post/67)