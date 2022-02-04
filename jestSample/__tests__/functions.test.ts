// todo: ここに単体テストを書いてみましょう！
import {
  sumOfArray,
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
} from '../functions';

describe('sumOfArray', () => {
  test('argument [1, 1] to equal 2', () => {
    expect(sumOfArray([1, 1])).toBe(2);
  })

  test('argument [-1, -1] to equal -2', () => {
    expect(sumOfArray([-1, -1])).toBe(-2);
  })

  test('argument [] to equal 0', () => {
    expect(sumOfArray([])).toBe(0);
  })
})

describe('asyncSumOfArray', () => {
  test('async argument [1, 1] to equal 2', () => {
    return expect(asyncSumOfArray([1, 1])).resolves.toBe(2);
  })

  test('async argument [-1, -1] to equal -2', () => {
    return expect(asyncSumOfArray([-1, -1])).resolves.toBe(-2);
  })

  test('async argument [] to equal 0', () => {
    return expect(asyncSumOfArray([])).resolves.toBe(0);
  })
})

describe('asyncSumOfArraySometimesZero', () => {
  test('async argument [1, 1] to equal 2', async () => {
    try {
      const res = await asyncSumOfArraySometimesZero([1, 1]);
      expect(res).toBe(2);
    } catch (e) {
      expect(e).toBe(0);
    }
  })
})
