// todo: ここに単体テストを書いてみましょう！
import { sumOfArray, asyncSumOfArray, asyncSumOfArraySometimesZero, getFirstNameThrowIfLong } from "../functions";
import { IDatabaseMock } from "../interface/IDatabaseMock";
import { INameApiService } from "../API/Interface/INameApiService";
import { GetRightNameApiService, SuccessDatabaseMock, ThrowDatabaseMock } from "../util";

describe('sumOfArray test', () => {
    test('Sum of [1 ,2, 3] should be 6', () => {
        // SetUp
        const array: number[] = [1, 2, 3];
        // Exercise
        const actual: number = sumOfArray(array);
        // Verify
        expect(actual).toBe(6);
    });

    test('Sum of [1.12, 2.08, 3] should be 6.2', () => {
        // SetUp
        const array: number[] = [1.12, 2.08, 3];
        // Exercise
        const actual: number = sumOfArray(array);
        // Verify
        expect(actual).toBe(6.2);
    })
    
    test('Sum of empty array should throw exception', () => {
        // SetUp
        const array: number[] = [];
        // Exercise, Verify
        expect(() => sumOfArray(array)).toThrow(Error);
    });
});

describe('asyncSumOfArray', () => {
    test('Sum of [1 ,2, 3] should be 6', async () => {
        // SetUp
        const array: number[] = [1, 2, 3];
        // Exercise
        const actual: number = await asyncSumOfArray(array);
        // Verify
        expect(actual).toBe(6);
    });

    test('Sum of [1.12, 2.08, 3] should be 6.2', async () => {
        // SetUp
        const array: number[] = [1.12, 2.08, 3];
        // Exercise
        const actual: number = await asyncSumOfArray(array);
        // Verify
        expect(actual).toBe(6.2);
    });

    test('Sum of empty array should throw exception', async () => {
        // SetUp
        const array: number[] = [];
        // Exercise, Verify
        await expect(asyncSumOfArray(array)).rejects.toThrow(Error);
    });
});

describe('asyncSumOfArraySometimesZero test', () => {

    test('Saving numbers succeeded and sum of [1 ,2, 3] should be 6', async () => {
        // SetUp
        const array: number[] = [1, 2, 3];
        const databaseMock: IDatabaseMock = new SuccessDatabaseMock();
        // Exercise
        const actual: number = await asyncSumOfArraySometimesZero(array, databaseMock);
        // Verify
        expect(actual).toBe(6);
    });

    test('Saving numbers succeeded and sum of empty array should be 0', async () => {
        // SetUp
        const array: number[] = [];
        const databaseMock: IDatabaseMock = new SuccessDatabaseMock();
        // Exercise
        const actual: number = await asyncSumOfArraySometimesZero(array, databaseMock);
        // Verify
        expect(actual).toBe(0);
    })
    
    test('Saving numbers failed and sum of [1 ,2, 3] should be 0', async () => {
        // SetUp
        const array: number[] = [1, 2, 3];
        const databaseMock: IDatabaseMock = new ThrowDatabaseMock();
        // Exercise
        const actual: number = await asyncSumOfArraySometimesZero(array, databaseMock);
        // verify
        expect(actual).toBe(0);
    })

    test('Saving numbers failed and sum of empty array should be 0', async () =>{
        // SetUp
        const array: number[] = [1, 2, 3];
        const databaseMock: IDatabaseMock = new ThrowDatabaseMock();
        // Exercise
        const actual: number = await asyncSumOfArraySometimesZero(array, databaseMock);
        // Verify
        expect(actual).toBe(0);
    });

})

describe('getFirstNameThrowIfLong test', () => {

    test('MaxNameLength is 4 and length of firstName is 4 should return firstName', async () => {
        // SetUp
        const nameApiService: INameApiService = new GetRightNameApiService;
        const maxNameLength: number = 4;
        // Exercise
        const actual: string = await getFirstNameThrowIfLong(maxNameLength, nameApiService);
        // Verify
        expect(actual).toBe("Taro");
    });

    test('MaxNameLength is less than length of firstName should thorow error', async () => {
        // SetUp
        const nameApiService: INameApiService = new GetRightNameApiService;
        const maxNameLength: number = 3;
        // Exercise, Verify
        await expect(getFirstNameThrowIfLong(maxNameLength, nameApiService)).rejects.toThrowError("first_name too long");
    });
})
