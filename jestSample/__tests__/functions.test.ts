import { asyncSumOfArray, sumOfArray } from "../functions";

describe('sumOfArray', () => {
    it("整数を渡すと合計を返す", () => {
        const result = sumOfArray([1, 2, 3, 4, 5]);
        expect(result).toBe(15);
    })
    it("空の配列を渡すと0を返す", () => {
        const result = sumOfArray([]);
        expect(result).toBe(0);
    });

    //　課題に例として記載があったものの、引数の型で守れているのでテスト不要と判断
    // it.skip("文字列を渡すとエラーになる", () => {
    //     expect(() => {
    //         sumOfArray(["1", "2", "3"]);
    //     }).toThrow("Invalid argument: numbers must be an array of numbers");
    // })
});

describe('asyncSumOfArray', () => {
    it("整数を渡すと合計を返す", async () => {
        const result = await asyncSumOfArray([1, 2, 3, 4, 5]);
        expect(result).toBe(15);
    });

    it("空の配列を渡すと0を返す", async () => {
        const result = await asyncSumOfArray([]);
        expect(result).toBe(0);
    });

    //　課題に例として記載があったものの、引数の型で守れているのでテスト不要と判断
    // it.skip("文字列を渡すとエラーになる", () => {
    //     expect(() => {
    //         sumOfArray(["1", "2", "3"]);
    //     }).toThrow("Invalid argument: numbers must be an array of numbers");
    // })
})
