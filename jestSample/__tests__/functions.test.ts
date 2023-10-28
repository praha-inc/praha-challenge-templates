import { sumOfArray, asyncSumOfArray, asyncSumOfArraySometimesZero, } from "../functions";
import { DatabaseMock } from "../util/index";

jest.mock('../util/index');

// todo: ここに単体テストを書いてみましょう！
describe('sum of array tests', () => {
    test('adds [1, 2, 3] is 6', () => {
        const array = [1, 2, 3];
        expect(sumOfArray(array)).toEqual(6);
    });

    test('empty array throws error', () => {
        const array:number[] = [];
        expect(() => {sumOfArray(array)}).toThrow();
    });
});

describe('async sum of array test', () => {
    test('adds [1, 2, 3] is 6', async () => {
        const array = [1, 2, 3];
        const response = await asyncSumOfArray(array);
        expect(response).toBe(6);
    });

    test('empty array fails with error', async () => {
        expect.assertions(1);
        const array:number[] = [];
        await expect(asyncSumOfArray(array)).rejects.toThrow();
    });
});

describe('async sum of array sometimes zero', () => {
    const databaseMock = DatabaseMock as jest.Mock<DatabaseMock>;

    test('adds [1, 2, 3] is 6', async () => {
        const array:number[] = [1, 2, 3];
        databaseMock.mockImplementationOnce(() => {
            return {
                save: (_:number[]): void => {}
            }
        })
        const database = new DatabaseMock();
        expect(DatabaseMock).toHaveBeenCalled();
        const response = await asyncSumOfArraySometimesZero(database, array);
        expect(response).toBe(6);
    });

    test('save function threw error', async () => {
        const array:number[] = [1, 2, 3];
        databaseMock.mockImplementationOnce(() => {
            return {
                save: (_:number[]): void => {
                    throw 'fail!'
                }
            }
        })
        const database = new DatabaseMock();
        expect(DatabaseMock).toHaveBeenCalled();
        const response = await asyncSumOfArraySometimesZero(database, array);
        expect(response).toBe(0);
    });

    test('empty array fails with error', async () => {
        const array:number[] = [];
        await expect(asyncSumOfArraySometimesZero(new DatabaseMock, array)).resolves.toBe(0);
    });
});

