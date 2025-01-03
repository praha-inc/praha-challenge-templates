import {expect, jest, test} from '@jest/globals';
import { sumOfArray,asyncSumOfArray, asyncSumOfArraySometimesZero, getFirstNameThrowIfLong } from "../functions";
import { DatabaseMock } from "../util";
import { NameApiService } from "../nameApiService";
import axios from "axios";
// const { sumOfArray, asyncSumOfArray } = require('../functions');


// todo: ここに単体テストを書いてみましょう！

//// #課題2-1
// sumOfArray
test('[1,1]をsumOfArrayに渡したら 2 を返す', () => {
    expect(sumOfArray([1, 1])).toBe(2);
});

test('空の配列を渡したら、実行時にエラー発生', () => {
    expect(() => sumOfArray([])).toThrowError();
});

// test('string型の配列を渡したら', () => {
//   expect (sumOfArray(['1','2'])).toBe('12');
// });


// asyncSumOfArray
test('[1,1]をasyncSumOfArrayに渡したら 2 を返す', async() => {
    expect(asyncSumOfArray([1, 1])).resolves.toBe(2);
});

test('空の配列を渡したら、実行時にエラー発生', async() => {
    expect(asyncSumOfArray([])).rejects.toThrowError();
});

// test('string型の配列を渡したら', () => {
//     expect(asyncSumOfArray(['1','2'])).resolves.toBe('12');
// });




//// #課題2-2
// asyncSumOfArraySometimesZero
test('[1,1]を渡したときにエラーが発生したら0を返す', async() => {
    const databaseMock1 = {
        save: jest.fn(() => {
            throw new Error("Database error")
        }),
    }

    const databaseMock2 = {
        save: jest.fn(() => {
            return
        }),
    }

    expect(asyncSumOfArraySometimesZero(databaseMock1 as unknown as DatabaseMock, [1, 1])).resolves.toBe(0);
    expect(asyncSumOfArraySometimesZero(databaseMock2 as unknown as DatabaseMock, [1, 1])).resolves.toBe(2);
});

// getFirstNameThrowIfLong
test('名前の文字が5を超えるとエラー', async() => {
    const nameApiService = {
        getFirstName: jest.fn(() => Promise.resolve("VeryLongName")),
    }
    await expect(getFirstNameThrowIfLong(nameApiService as unknown as NameApiService, 5)).rejects.toThrowError("first_name too long");
});


//// #課題2-3
// nameApiService.ts

// axiosをモック化
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('John というレスポンスの場合、名前をそのまま返す', async()=> {
    const nameApiService = new NameApiService();
    
    const mockResponse = {data: { first_name: "John" }}
    mockedAxios.get.mockResolvedValue(mockResponse);

    expect(await getFirstNameThrowIfLong(nameApiService, 4)).toBe("John");
});


test('Alexander というレスポンスの場合、例外を返す', async()=> {
    const nameApiService = new NameApiService();
    
    const mockResponse = {data: { first_name: "Alexander" }}
    mockedAxios.get.mockResolvedValue(mockResponse);

    // 以下のような記法だとテストに通らない、expectの引数に直接 nameApiService.getFirstName() と記述してあげる必要がある
    // resultに戻り値を格納しようとしているが、今回のてすとでは例外が投げられるため戻り値が返るということがない
    //const result = await nameApiService.getFirstName();
    //await expect(result).rejects.toThrowError("firstName is too long!");

    await expect(nameApiService.getFirstName()).rejects.toThrowError("firstName is too long!");
});
