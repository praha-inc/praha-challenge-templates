import { fizzBuzz, isMale } from "../myFunction";

// 引数に数値を与える
// 15の倍数のとき"FizzBuzz"
// 5の倍数のとき"Buzz"
// 3の倍数のとき"Fizz"
// それ以外は引数をそのまま返す
test("fizzBuzzのテスト", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(5)).toBe("Buzz");
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(4)).toBe(4);
});

test("郵便番号のテスト", async () => {
  console.log(await isMale());
});

// https://jestjs.io/docs/ja/mock-functions
// https://qiita.com/niwasawa/items/ec9d62e5a928511b639c
