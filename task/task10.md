## 課題１（質問）

### テストの基本

#### 基本テスト

- テストするモノをimport
- expectとtoBe（マッチャでテストする）

```
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```


#### 非同期の処理の場合のテスト

- .thenの中でテストを実行する

```
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
```


#### モック

- 関数モック

```
## 関数をmockにできる
const myMockFn = jest.fn(cb => cb(null, true));

myMockFn((err, val) => console.log(val));

## mockReturnValueメソッドで返り値を指定できる
myMock.mockReturnValue("返り値")
```

- クラスモック

こんな感じの書き方をしないとイニシャライズのタイミングで怒られる

```
const mockGetFirstName = jest.fn();
mockGetFirstName.mockReturnValue("testname")
jest.mock('../nameApiService',() => {
  return { NameApiService:jest.fn().mockImplementation(() => {
    return {getFirstName :mockGetFirstName}
  })}
})
```

#### 依存性の注入

これわかりやすかったです

インスタンス化したモノを引数にわたす感じですね

https://qiita.com/ryo2132/items/03380df2df5b4b2933d7#dip%E4%BE%9D%E5%AD%98%E9%96%A2%E4%BF%82%E3%81%AE%E9%80%86%E8%BB%A2%E3%81%AE%E5%8E%9F%E5%89%87

### 課題2

- fncstions.test.ts

こちらはすべてできたと思います

- name_apu_service.test.ts

こっちは例外処理でまだ詰まっているけど、だいたい基本はわかったので放置してます。w

### 課題3


- そもそも、なぜ元の関数はカバレッジ100%のテストを書けなかったのでしょうか？

DatabaseMockやNameApiServiceの中での処理がランダムな処理でテストでコントロールできなかった為


- 依存性の注入とは何でしょうか？どのような問題を解決するために使われるのでしょうか？


外部のクラスや関数の影響をなくすために使われる

※参考記事

https://qiita.com/ryo2132/items/03380df2df5b4b2933d7#dip%E4%BE%9D%E5%AD%98%E9%96%A2%E4%BF%82%E3%81%AE%E9%80%86%E8%BB%A2%E3%81%AE%E5%8E%9F%E5%89%87


- 依存性の注入を実施することで、モジュール同士の結合度の強さはどのように変化したでしょうか？

依存しなくなった

- 「getFirstNameThrowIfLong」の関数はhttps://random-data-api.comからデータを取得しているようです
しかしテストの度に外部サービスと通信をするようでは、良い単体テストとは呼べません（そもそも単体テストではなく結合テストに該当します）
（細かな分類はさておき）今回のような単体テストで外部サービスとの通信が発生すると、どのようなデメリットがあるでしょうか？

外部のサービスで不具合が合った場合に影響をうける？
逆にわかった方がいい気がする。
重量課金性のサービスを使っている場合に、テストで料金が発生するとかかな？


- sumOfArrayに空の配列を渡すと例外が発生します。現状、あまり好ましい挙動ではありません。
「こうなるべきだ」とご自身が考える形に、コードを修正してみてください
ヒント：reduceの初期値に0を設定する、空配列だったら即座に0を返す、など
コードを修正したら、先ほど書いた単体テストが落ちるはずです（もし落ちなければ、単体テストが不十分だったという事になります！）。全ての単体テストが通るよう、単体テストも修正してください
なぜそのように修正したのか、ペアと話し合ってみてください


### 課題4

ここは2人でまとめ的な会話をしたいです