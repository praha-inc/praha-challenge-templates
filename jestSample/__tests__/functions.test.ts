import { asyncSumOfArray, sumOfArray, asyncSumOfArraySometimesZero } from "../functions"
import { DatabaseMock } from "../util"

describe('sumOfArray', () => {
  test('配列内の数値の合計を取得できること', () => {
    expect(sumOfArray([1, 2, 3, 4])).toEqual(10)
  })

  test('配列が空の場合、例外が発生すること', () => {
    expect(() => {
      sumOfArray([])
    }).toThrow('Reduce of empty array with no initial value')
  })
})

describe('asyncSumOfArray', () => {
  test('配列内の数値の合計を取得できること', () => {
    return asyncSumOfArray([1, 2, 3, 4]).then(sum => {
      expect(sum).toEqual(10)
    })
  })

  test('配列が空の場合、例外が発生すること', () => {
    expect.assertions(1)
    return asyncSumOfArray([]).catch(error => {
      expect(error.message).toMatch('Reduce of empty array with no initial value')
    })
  })

  // 型が異なる場合、CIで落ちるはずなのでコンパイルエラーのテストは書かない
})

describe('asyncSumOfArraySometimesZero', () => {
  const save = jest.fn((numbers: number[]) => {})

  const DBMock = jest.fn<DatabaseMock, any>().mockImplementation(() => {
    return {
      save: save,
    }
  })
  const database = new DBMock()

  test('配列内の数値をsaveし、数値の合計を取得できること', () => {
    return asyncSumOfArraySometimesZero([1, 2, 3, 4], database).then(sum => {
      expect(save.mock.calls.length).toBe(1) // 呼び出し回数の確認
      expect(save.mock.calls[0][0]).toEqual([1, 2, 3, 4]) // 引数のチェック
      expect(sum).toEqual(10)
    })
  })

  test('配列が空の場合、0が返ること', () => {
    expect.assertions(1)
    return asyncSumOfArraySometimesZero([], database).then(sum => {
      expect(sum).toEqual(0)
    })
  })
})
