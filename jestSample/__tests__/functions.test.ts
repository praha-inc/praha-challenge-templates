import { sumOfArray } from "../functions";

const VERY_LONG_ARRAY = Array.from({ length: 50 }, (_, i) => i + 1);

describe("sumOfArray", (): void => {
  describe("自然数の配列を渡した場合", (): void => {
    it.each([
      {
        argument: [1, 2, 3],
        result: 6,
      },
      {
        argument: VERY_LONG_ARRAY,
        result: VERY_LONG_ARRAY.reduce((acc, value) => acc + value, 0),
      },
    ])("$argumentを渡した場合、$resultが返却される", ({ argument, result }): void => {
      expect(sumOfArray(argument)).toBe(result);
    });
  });

  describe("自然数と負数の配列を渡した場合", (): void => {
    it.each([
      {
        argument: [1, 2, -30],
        result: -27,
      },
      {
        argument: [30, -30],
        result: 0,
      },
    ])("$argumentを渡した場合、$resultが返却される", ({ argument, result }): void => {
      expect(sumOfArray(argument)).toBe(result);
    });
  });

  describe("自然数と負数と0の配列を渡した場合", (): void => {
    it.each([
      {
        argument: [1, -3, 0],
        result: -2,
      },
      {
        argument: [0, 0, 9, -1],
        result: 8,
      },
    ])("$argumentを渡した場合、$resultが返却される", ({ argument, result }): void => {
      expect(sumOfArray(argument)).toBe(result);
    }
    );
  });

  describe("0の配列を渡した場合", (): void => {
    it("0が返却される", (): void => {
      expect(sumOfArray([0, 0, 0])).toBe(0);
    });
  });

  describe("空の配列を渡した場合", (): void => {
    it("エラーがスローされる", (): void => {
      expect(() => sumOfArray([])).toThrow(TypeError);
    });
  });

  describe("配列以外を渡した場合", (): void => {
    it.each([
      { title: "文字列を渡した場合", argument: "hoge" },
      { title: "trueを渡した場合", argument: true },
      { title: "nullを渡した場合", argument: null },
      { title: "undefinedを渡した場合", argument: undefined },
      { title: "NaNを渡した場合", argument: NaN },
      { title: "new Date()を渡した場合", argument: new Date() },

    ])("$title、エラーがスローされる", (argument): void => {
      // @ts-ignore
      expect(() => sumOfArray(argument)).toThrow(TypeError);
    }
    );
  });
});
