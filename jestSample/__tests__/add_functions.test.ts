import axios from "axios";
import { getLuckyItem, randomSelect, greet } from "../add_functions";

describe("getLuckyItem", (): void => {
  jest.spyOn(Date.prototype, "getFullYear").mockImplementation(() => {
    return 2021;
  });
  jest.spyOn(Date.prototype, "getMonth").mockImplementation(() => {
    return 1; // 1を指定したら2月
  });
  jest.spyOn(Date.prototype, "getDate").mockImplementation(() => {
    return 8;
  });
  const axiosMock: jest.SpyInstance = jest.spyOn(axios, "get");
  //Mon Feb 08 2021 17:02:26 GMT+0900 (GMT+09:00)
  axiosMock.mockResolvedValue({
    data: {
      horoscope: {
        "2021/02/08": [
          {
            item: "万年筆",
            sign: "射手座",
          },
        ],
      },
    },
  });
  test("成功する", (): void => {
    expect(getLuckyItem("射手座")).resolves.toBe("万年筆");
  });
  test("失敗する", (): void => {
    expect(getLuckyItem("ああああ")).resolves.toBe("");
  });
});

describe("randomSelect", (): void => {
  const mock = jest.spyOn(Math, "random");
  const arg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test("T型が返る", (): void => {
    mock.mockImplementation(() => {
      return 0.5;
    });
    // 0.5 かける 12 = 6 で arg[6]で7
    expect(randomSelect(arg)).toEqual(7);
  });
  test("undefinedが返る", (): void => {
    mock.mockImplementation(() => {
      return 0.9;
    });
    expect(randomSelect(arg)).toEqual(undefined);
  });
});

describe("greet", (): void => {
  const mock: jest.SpyInstance = jest.spyOn(Date.prototype, "getHours");
  const name = "テストくん";
  test("おはよう", (): void => {
    mock.mockImplementation(() => {
      return 10;
    });
    expect(greet(name)).toEqual(`おはよう、${name}`);
  });
  test("こんにちは", (): void => {
    mock.mockImplementation(() => {
      return 15;
    });
    expect(greet(name)).toEqual(`こんにちは、${name}`);
  });
  test("こんばんは", (): void => {
    mock.mockImplementation(() => {
      return 18;
    });
    expect(greet(name)).toEqual(`こんばんは、${name}`);
  });
  test("おやすみなさい", (): void => {
    mock.mockImplementation(() => {
      return 24;
    });
    expect(greet(name)).toEqual(`おやすみなさい、${name}`);
  });
});
