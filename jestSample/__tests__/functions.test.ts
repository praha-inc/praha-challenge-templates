import { sumOfArray, asyncSumOfArray, asyncSumOfArraySometimesZero, getFirstNameThrowIfLong, Database, NameService } from "../functions";

// 課題2-1
// sumOfArray
test("1つの正の整数の要素を持つ配列を渡すと要素の値を返す", () => {
  expect(sumOfArray([1])).toBe(1);
});

test("複数の正の整数の要素を持つ配列を渡すと要素の値を足し合わせた値を返す", () => {
  expect(sumOfArray([1, 1])).toBe(2);
});

test("複数の正と負の整数の要素を持つ配列を渡すと要素の値を返す", () => {
  expect(sumOfArray([1, -1])).toBe(0);
});

test("複数の0の要素を持つ配列を渡すと要素の値を返す", () => {
  expect(sumOfArray([0, 0])).toBe(0);
});

test("空の配列を渡すとTypeErrorが発生する", () => {
  expect(() => sumOfArray([])).toThrow(TypeError);
});

// ビルドもテストも失敗するので、テストすべきでない
// test("文字列の要素を持つ配列を渡すと要素の値を足し合わせた値を返す", () => {
//   expect(sumOfArray(["1", "1"])).toBe(2);
// });

// asyncSumOfArray
test("1つの正の整数の要素を持つ配列を渡すと要素の値を返す", async () => {
  expect(await asyncSumOfArray([1])).toBe(1);
});

test("複数の正の整数の要素を持つ配列を渡すと要素の値を足し合わせた値を返す", async () => {
  expect(await asyncSumOfArray([1, 1])).toBe(2);
});

test("複数の正と負の整数の要素を持つ配列を渡すと要素の値を返す", async () => {
  expect(await asyncSumOfArray([1, -1])).toBe(0);
});

test("複数の0の要素を持つ配列を渡すと要素の値を返す", async () => {
  expect(await asyncSumOfArray([0, 0])).toBe(0);
});

test("空の配列を渡すとTypeErrorが発生する", async () => {
  await expect(asyncSumOfArray([])).rejects.toThrow(TypeError);
});


// 課題2-2
// asyncSumOfArraySometimesZero
test("データベースへの保存が成功すると合計値を返す", async () => {
  class DatabaseMockSuccess implements Database {
    save(_: number[]): void {}
  }
  expect(await asyncSumOfArraySometimesZero([1, 1], new DatabaseMockSuccess())).toBe(2);
});

test("データベースへの保存が失敗すると0を返す", async () => {
  class DatabaseMockFailure implements Database {
    save(_: number[]): void {
      throw new Error("fail!");
    }
  }
  expect(await asyncSumOfArraySometimesZero([1, 1], new DatabaseMockFailure())).toBe(0);
});

// getFirstNameThrowIfLong
test("取得したfirstNameが文字数制限以下だったらその値を返す", async () => {
  class NameApiMockFourCharacter implements NameService {
    getFirstName(): string {
      return "Taro"
    }
  }
  const maxNameLength = 4
  const nameApiMockFourCharacter = new NameApiMockFourCharacter()
  expect(await getFirstNameThrowIfLong(maxNameLength, nameApiMockFourCharacter)).toBe("Taro");
});

test("取得したfirstNameが文字数制限を超えていたら例外を発生させる", async () => {
  class NameApiMockFiveCharacter implements NameService {
    getFirstName(): string {
      return "Alice"
    }
  }
  const maxNameLength = 4
  const nameApiMockFiveCharacter = new NameApiMockFiveCharacter()
  await expect(getFirstNameThrowIfLong(maxNameLength, nameApiMockFiveCharacter)).rejects.toThrow();
});

test("firstNameが取得できなかったら例外を発生させる", async () => {
  class NameApiMockError implements NameService {
    getFirstName(): never {
      throw new Error("first_name too long");
    }
  }
  const maxNameLength = 4
  const nameApiMockError = new NameApiMockError()
  await expect(getFirstNameThrowIfLong(maxNameLength, nameApiMockError)).rejects.toThrow();
});