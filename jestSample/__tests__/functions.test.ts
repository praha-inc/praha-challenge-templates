// todo: ここに単体テストを書いてみましょう！

import {sumOfArray} from "../functions"


describe("#sumOfArray", () => {
  test("[1,2]を渡すと3が返ってくる", () => {
    expect(sumOfArray([1,2])).toBe(3)
  })
})