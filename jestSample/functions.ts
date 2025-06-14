import { NameApiService } from "./nameApiService";
import { DatabaseMock } from "./util";

export const sumOfArray = (numbers: number[]): number => {
  return numbers.reduce((a: number, b: number): number => a + b);
};

export const asyncSumOfArray = (numbers: number[]): Promise<number> => {
  return new Promise((resolve): void => {
    resolve(sumOfArray(numbers));
  });
};

export interface Database {
  save(_: number[]): void
}

export const asyncSumOfArraySometimesZero = (
  numbers: number[],
  database: Database
): Promise<number> => {
  return new Promise((resolve): void => {
    try {
      database.save(numbers);
      resolve(sumOfArray(numbers));
    } catch (error) {
      resolve(0);
    }
  });
};

export interface NameService {
  getFirstName(): Promise<string>
}

export const getFirstNameThrowIfLong = async (
  maxNameLength: number,
  nameApiService: NameService
): Promise<string> => {
  const firstName = await nameApiService.getFirstName();

  if (firstName.length > maxNameLength) {
    throw new Error("first_name too long");
  }
  return firstName;
};
