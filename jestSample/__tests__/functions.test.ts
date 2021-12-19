import { asyncSumOfArray, sumOfArray, asyncSumOfArraySometimesZero } from "../functions"

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
  test('配列内の数値をsaveし、数値の合計を取得できること', () => {
    return asyncSumOfArraySometimesZero([1, 2, 3, 4]).then(sum => {
      expect(sum).toEqual(10)
    })
  })

  test('配列が空の場合、0が返ること', () => {
    expect.assertions(1)
    return asyncSumOfArraySometimesZero([]).then(sum => {
      expect(sum).toEqual(0)
    })
  })
})
