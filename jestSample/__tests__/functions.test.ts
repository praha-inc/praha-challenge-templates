import {
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
  sumOfArray,
} from "../functions";
import { DatabaseMock } from "../util";
import { NameApiService } from "../nameApiService";

test("sumOfArrayのテスト", () => {
  expect(sumOfArray([1, 2, 3])).toBe(6);
  /*
    expect(() => {
    sumOfArray([]);
  }).toThrow();
   */
});

test("asyncSumOfArrayのテスト", async () => {
  expect(await asyncSumOfArray([1, 2, 3])).toBe(6);
  //
  const result = asyncSumOfArray([1, 2, 3]);
  expect(await result).toBe(6);
  //
  /*
    const result2 = asyncSumOfArray([]);
  await expect(result2).rejects.toThrow();
   */
});

// https://qiita.com/yuma-ito-bd/items/38c929eb5cccf7ce501e
jest.mock("../util");
const dbMock = DatabaseMock as jest.Mock;
test("asyncSumOfArraySometimesZero", async () => {
  const exceptionMock = () => {
    return {
      save(_: number[]): void {
        throw new Error("fail!");
      },
    };
  };
  const successMock = () => {
    return {
      save(_: number[]): void {},
    };
  };
  dbMock.mockImplementation(exceptionMock);
  expect(await asyncSumOfArraySometimesZero([1, 2, 3])).toBe(0);
  //
  dbMock.mockImplementation(successMock);
  expect(await asyncSumOfArraySometimesZero([1, 2, 3])).toBe(6);
});

jest.mock("../nameApiService");
const NameApiServiceMock = NameApiService as jest.Mock;
test("getFirstNameThrowIfLong", async () => {
  const exceptionMock = () => {
    return {
      // getFirstName(): Promise<string> {
      getFirstName(): Promise<string> {
        throw new Error("fail!");
      },
    };
  };
  const successMock = () => {
    return {
      getFirstName(): Promise<string> {
        return new Promise((resolve) => resolve("tom"));
      },
    };
  };
  NameApiServiceMock.mockImplementation(exceptionMock);
  await expect(getFirstNameThrowIfLong(4)).rejects.toThrow();
  //
  NameApiServiceMock.mockImplementation(successMock);
  expect(await getFirstNameThrowIfLong(4)).toBe("tom");
  //
  NameApiServiceMock.mockImplementation(successMock);
  await expect(getFirstNameThrowIfLong(2)).rejects.toThrow();
  //
});
