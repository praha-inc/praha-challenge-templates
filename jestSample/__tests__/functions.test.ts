import { asyncSumOfArray, asyncSumOfArraySometimesZero, sumOfArray } from "../functions";
import { DatabaseMock } from "../util";

/**
 * sumOfArray
 */
// intのArrayを渡した場合
test('sum of [1, 2, 3, 4] to equal 10', () => {
    expect(sumOfArray([1, 2, 3, 4])).toBe(10);
});
// []を渡した場合
test('sum of [] to throw exception', () => {
    expect(() => sumOfArray([])).toThrow('Reduce of empty array with no initial value');
});
// StringのArrayを渡した場合
// test('sum of [] to throw exception', () => {
//     expect(() => sumOfArray(['A', 'B'])).toThrow();
// });

/**
 * asyncSumOfArray
 */
// intのArrayを渡した場合
test('async sum of [1, 2, 3, 4] to equal 10', async () => {
    const data = await asyncSumOfArray([1, 2, 3, 4]);
    expect(data).toBe(10);
});
// []を渡した場合
test('async sum of [] to throw exception', async () => {
    expect(asyncSumOfArray([])).rejects.toThrow('Reduce of empty array with no initial value');
});

/**
 * asyncSumOfArraySometimesZero
 */
// intのArrayを渡した場合 && Database保存成功
test('async sum of same times zero of [1, 2, 3, 4] and data save success to equal 10', async () => {
    const array = [1, 2, 3, 4];
    const database = new DatabaseMock();
    database.saveCallback = () => {
        console.log('data save success');
    };
    const data = await asyncSumOfArraySometimesZero(array, database);
    expect(data).toBe(10);
});
// []を渡した場合 && Database保存成功
test('async sum of same times zero of [] and data save success to be 0', async () => {
    const array: number[] = [];
    const database = new DatabaseMock();
    database.saveCallback = () => {
        console.log('data save success');
    };
    expect(asyncSumOfArraySometimesZero(array, database)).resolves.toBe(0);
});
// intのArrayを渡した場合 && Database保存失敗
test('async sum of same times zero of [1, 2, 3, 4] and data save failed to equal 10', async () => {
    const array = [1, 2, 3, 4];
    const database = new DatabaseMock();
    database.saveCallback = () => {
        console.log('data save failed');
        throw new Error();
    };
    expect(asyncSumOfArraySometimesZero(array, database)).resolves.toBe(0);
});
// []を渡した場合 && Database保存失敗
test('async sum of same times zero of [] and data save failed to be 0', async () => {
    const array: number[] = [];
    const database = new DatabaseMock();
    database.saveCallback = () => {
        console.log('data save failed');
        throw new Error();
    };
    expect(asyncSumOfArraySometimesZero(array, database)).resolves.toBe(0);
});