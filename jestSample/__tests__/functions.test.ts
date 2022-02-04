// todo: ここに単体テストを書いてみましょう！
import { sumOfArray } from '../functions';
import { asyncSumOfArray } from '../functions';
import { asyncSumOfArraySometimesZero } from '../functions';
import { getFirstNameThrowIfLong } from '../functions';
import { DatabaseMock } from '../util/index';
import { NameApiService } from '../nameApiService';
import axios from 'axios';


//sumOfArrayのテスト
test('test_sumOfArray_値１つ', () => {
    expect(sumOfArray([1])).toBe(1);
});

test('test_sumOfArray_値２つ', () => {
    expect(sumOfArray([1, 1])).toBe(2);
});

test('test_sumOfArray__値3つ', () => {
    expect(sumOfArray([0, 1, 2])).toBe(3);
});

test('test_sumOfArray_空配列', () => {
    expect(sumOfArray([])).toBe(0);
});
/* 
以下エラーになる
test('test_sumOfArray_文字列', () => {
    expect(sumOfArray(['あ'])).toBe(0);
});

test('test_sumOfArray_オブジェクト', () => {
    expect(sumOfArray(1)).toBe(0);
}); */



//asyncSumOfArrayのテスト
test('test_asyncSumOfArray_値１つ', () => {
    return asyncSumOfArray([1]).then(data => {
        expect(data).toBe(1);
    });
});

test('test_asyncSumOfArray_値２つ', () => {
    return asyncSumOfArray([1, 1]).then(data => {
        expect(data).toBe(2);
    });
});

test('test_asyncSumOfArray_値3つ', () => {
    return asyncSumOfArray([1, 1, 2]).then(data => {
        expect(data).toBe(4);
    });
});


//asyncSumOfArrayのテスト

/* 
この書き方だと成功するときと失敗する時がrandomでそれに影響されてしまう。
test('test_asyncSumOfArraySometimesZero', () => {
    return asyncSumOfArraySometimesZero([1, 1]).then(data => {
        expect(data).toBe(0);
    });
});

test('test_asyncSumOfArraySometimesZero_1', () => {
    return asyncSumOfArraySometimesZero([1, 1]).then(data => {
        expect(data).toBe(2);
    });
});
 */

jest.mock('../util/index');
const databaseMock = DatabaseMock as jest.Mock;
databaseMock.mockImplementationOnce(() => {
    return {
        save(_: number[]): number[] {
            return [2];
        }
    };
});

test('test_asyncSumOfArraySometimesZero_moc', () => {
    return asyncSumOfArraySometimesZero([1, 1], databaseMock).then(data => {
        expect(data).toBe(0);
    });
});

//getFirstNameThrowIfLongのテスト

jest.mock('axios');
(axios.get as any).mockResolvedValue({ data: { first_name: 'mac' } });

// test('test_axios', async () => {
//     let nameApiService = new NameApiService();
//     const res = await nameApiService.getFirstName();
//     expect(res).toBe('mac');
// });

test('test_getFirstNameThrowIfLong', () => {
    return getFirstNameThrowIfLong(10).then(data => {
        expect(data).toBe('mac');
    });
});

test('test_getFirstNameThrowIfLong_error', () => {
    return getFirstNameThrowIfLong(1).then(data => {
        expect(data).toBe("first_name too long");
    });
});
