import { exponentiation, fizzBuzz, RandomUserService } from "../myFunctions";
import axios from "axios";

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

test("テスト", async () => {
  const { data } = await axios.get("https://randomuser.me/api/");
  const mockData = {
    ...data,
    results: [{ gender: "male" }],
  };
  const mockData2 = {
    ...data,
    results: [{ gender: "female" }],
  };
  const randomUserService = new RandomUserService(mockData);
  expect(await randomUserService.isMale()).toBe(true);
  const randomUserService2 = new RandomUserService(mockData2);
  expect(await randomUserService2.isMale()).toBe(false);
});

test("べき乗のテスト", () => {
  expect(exponentiation([3, 3])).toBe(27);
  expect(exponentiation([-3, 3])).toBe(-27);
});
