// todo: ここに単体テストを書いてみましょう！

import { sumOfArray,asyncSumOfArray,asyncSumOfArraySometimesZero } from "../functions"


describe("#sumOfArray", () => {
  test("[1,2]を渡すと3が返ってくる", () => {
    expect(sumOfArray([1,2])).toBe(3)
  })
})

describe("#asyncSumOfArray", () => {
  test("[1,2]を渡すと3が返ってくる", () => {
    asyncSumOfArray([1.2]).then((result) => {
      expect(result).toBe(3)
    })
  })
})

describe("#asyncSumOfArraySometimesZero", () => {
  test("[1,2]を渡すと3が返ってくる && mockdatabaseに保存できる", () => {
    asyncSumOfArraySometimesZero([1.2]).then((result) => {
      expect(result).toBe(3)
    })
  })
  test("[1,2]を渡し、mockdatabaseが例外を投げる", () => {
    asyncSumOfArraySometimesZero([1.2]).then((result) => {
      expect(result).rejects.toThrow();
    })
  })
})