# 課題
jestで単体テストを書こう 課題5

## 課題5-1
JavaScriptやTypeScriptで書かれた任意のOSSライブラリを探して、そこに書かれているテストケースを覗いてみましょう。そこから新たに学んだことを最低でも3つ挙げてください。

https://github.com/n8n-io/n8n

- jest-mock-extendedを使用し、テストコードを簡潔に記述できるようにしている

    https://github.com/n8n-io/n8n/blob/7195b3bd97024effc859d6eae4fc643d83807e88/packages/core/test/utils.ts#L7
- コンソールへの出力をモックしている

    https://github.com/n8n-io/n8n/blob/7195b3bd97024effc859d6eae4fc643d83807e88/packages/core/src/binary-data/__tests__/binary-data.config.test.ts#L11
- 結合テストはディレクトリを分けて作成

    https://github.com/n8n-io/n8n/tree/master/packages/cli/test/integration