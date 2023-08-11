import { IDatabaseMock } from "./interface/IDatabaseMock";
import { INameApiService } from "./API/Interface/INameApiService";

export const sumOfArray = (numbers: number[]): number => {
  return numbers.reduce((a: number, b: number): number => a + b);
};

export const asyncSumOfArray = (numbers: number[]): Promise<number> => {
  return new Promise((resolve): void => {
    resolve(sumOfArray(numbers));
  });
};

export const asyncSumOfArraySometimesZero = (
  numbers: number[],
  databaseMock : IDatabaseMock
): Promise<number> => {
  return new Promise((resolve): void => {
    try {
      const database: IDatabaseMock = databaseMock;
      database.save(numbers);
      resolve(sumOfArray(numbers));
    } catch (error) {
      resolve(0);
    }
  });
};

export const getFirstNameThrowIfLong = async (
  maxNameLength: number,
  nameApiService: INameApiService
): Promise<string> => {
  const service: INameApiService = nameApiService; 

  const firstName = await service.getFirstName();

  if (firstName.length > maxNameLength) {
    throw new Error("first_name too long");
  }
  return firstName;
};
