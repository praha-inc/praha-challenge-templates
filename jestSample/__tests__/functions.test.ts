import { sumOfArray, asyncSumOfArray } from "../functions";

// todo: ここに単体テストを書いてみましょう！
describe('sum of array tests', () => {
    test('adds [1] is 1', () => {
        const array = [1];
        expect(sumOfArray(array)).toEqual(1);
    });

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
    test('adds [1] is 1', async () => {
        const array = [1];
        const response = await asyncSumOfArray(array);
        expect(response).toBe(1);
    });

    test('adds [1, 2, 3] is 6', async () => {
        const array = [1, 2, 3];
        const response = await asyncSumOfArray(array);
        expect(response).toBe(6);
    });

    test('empty array fails with error', async () => {
        expect.assertions(1);
        const array:number[] = [];
        try{
            await asyncSumOfArray(array);
        } catch (e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    });
});