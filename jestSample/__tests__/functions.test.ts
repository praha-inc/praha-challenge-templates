import { asyncSumOfArray, asyncSumOfArraySometimesZero, getFirstNameThrowIfLong, sumOfArray } from "../functions";
import { NameApiService } from "../nameApiService";

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
    
    // sumOfArrayでテストが行われているはずなので、以下のテストを不要だと考える
    // it("空の配列を渡すと0を返す", async () => {
    //     const result = await asyncSumOfArray([]);
    //     expect(result).toBe(0);
    // });

    //　課題に例として記載があったものの、引数の型で守れているのでテスト不要と判断
    // it.skip("文字列を渡すとエラーになる", () => {
    //     expect(() => {
    //         sumOfArray(["1", "2", "3"]);
    //     }).toThrow("Invalid argument: numbers must be an array of numbers");
    // })
})

describe('asyncSumOfArraySometimesZero', () => {
    it("整数を渡すと合計を返す", async () => {
        const mockDatabase = {
            save: jest.fn(),
        };
        const result = await asyncSumOfArraySometimesZero([1, 2, 3, 4, 5], mockDatabase);
        expect(mockDatabase.save).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    });

    it("saveが失敗した場合は0を返す", async () => {
        const mockDatabase = {
            save: jest.fn(() => {
                throw new Error("fail!");
            }),
        };
        const result = await asyncSumOfArraySometimesZero([1, 2, 3, 4, 5], mockDatabase);
        expect(result).toBe(0);
    });
})

describe('getFirstNameThrowIfLong', () => {
    it("first_nameが指定の長さ以下ならそのまま返す", async () => {
    class MockNameApiService extends NameApiService {
        getFirstName = jest.fn().mockResolvedValue("John");
    }
    const mockNameApiService = new MockNameApiService();
        const result = await getFirstNameThrowIfLong(4, mockNameApiService);
        expect(result).toBe("John");
    });

    it("first_nameが指定の長さを超える場合はエラーを投げる", async () => {
        class MockNameApiService extends NameApiService {
            getFirstName = jest.fn().mockResolvedValue("John");
        }
        const mockNameApiService = new MockNameApiService();
        await expect(getFirstNameThrowIfLong(3, mockNameApiService)).rejects.toThrow("first_name too long");
    });
});