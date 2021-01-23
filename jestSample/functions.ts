import { NameApiService } from "./nameApiService";
import { DatabaseMock } from "./util";

// https://qiita.com/uhyo/items/80ce7c00f413c1d1be56
type numbersType = [number, number, ...number[]];

//export const sumOfArray = (numbers: number[]): number => {
export const sumOfArray = (numbers: numbersType): number => {
  return numbers.reduce((a: number, b: number): number => a + b);
};

export const asyncSumOfArray = (numbers: numbersType): Promise<number> => {
  return new Promise((resolve): void => {
    resolve(sumOfArray(numbers));
  });
};

export const asyncSumOfArraySometimesZero = (
  numbers: numbersType
): Promise<number> => {
  return new Promise((resolve): void => {
    try {
      const database = new DatabaseMock(); // fixme: この関数をテストするには、DatabaseMockの使い方を変える必要がありそう！ヒント：依存性の注入
      database.save(numbers);
      resolve(sumOfArray(numbers));
    } catch (error) {
      resolve(0);
    }
  });
};

export const getFirstNameThrowIfLong = async (
  maxNameLength: number
): Promise<string> => {
  const nameApiService = new NameApiService(); // fixme: この関数をテストするには、NameApiServiceの使い方を変える必要がありそう！ヒント：依存性の注入
  const firstName = await nameApiService.getFirstName();

  if (firstName.length > maxNameLength) {
    throw new Error("first_name too long");
  }
  return firstName;
};
