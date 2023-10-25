import { sumOfArray } from "../functions";

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