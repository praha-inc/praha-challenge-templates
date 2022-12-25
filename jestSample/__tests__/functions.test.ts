import {
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
  sumOfArray,
} from "../functions";
import { Database } from "../util";
import { NameApiService } from "../nameApiService";

describe("functions", (): void => {
  describe("sumOfArray", (): void => {
    test("数値の配列を渡すと合計値が返ってくる", (): void => {
      expect(sumOfArray([1, 1, 1])).toBe(3);
    });

    test("空の配列を渡すとエラーになる", (): void => {
      expect((): void => {
        sumOfArray([]);
      }).toThrow("Reduce of empty array with no initial value");
    });
  });

  describe("asyncSumOfArray", (): void => {
    test("数値の配列を渡すと合計値が返ってくる", async (): Promise<void> => {
      expect(await asyncSumOfArray([1, 1, 1])).toBe(3);
    });

    test("空の配列を渡すとエラーになる", async (): Promise<void> => {
      const throwFn = async (): Promise<void> => {
        await asyncSumOfArray([]);
      };

      await expect(throwFn).rejects.toThrow(
        "Reduce of empty array with no initial value"
      );
    });
  });

  describe("asyncSumOfArraySometimesZero", (): void => {
    test("データベースが保存に成功すると配列の合計値を返す", async (): Promise<
      void
    > => {
      const databaseMock: Database = {
        save(): void {},
      };

      const actual = await asyncSumOfArraySometimesZero(
        [1, 2, 3],
        databaseMock
      );
      expect(actual).toBe(6);
    });

    test("データベースが保存に失敗すると 0 を返す", async (): Promise<void> => {
      const databaseMock: Database = {
        save(): void {
          throw new Error("fail!");
        },
      };

      const actual = await asyncSumOfArraySometimesZero(
        [1, 2, 3],
        databaseMock
      );
      expect(actual).toBe(0);
    });
  });

  describe("getFirstNameThrowIfLong", (): void => {
    let nameApiServiceMock: NameApiService;

    beforeEach((): void => {
      nameApiServiceMock = new NameApiService();
    });

    test("API から取得した名前の文字数が maxNameLength 以下であれば名前を返す", async (): Promise<
      void
    > => {
      const getFirstNameSpy = jest.spyOn(nameApiServiceMock, "getFirstName");
      getFirstNameSpy.mockResolvedValueOnce("Mary");

      const actual = await getFirstNameThrowIfLong(4, nameApiServiceMock);
      expect(actual).toBe("Mary");
    });

    test("API から取得した名前の文字数が maxNameLength より大きければ例外を投げる", async (): Promise<
      void
    > => {
      const getFirstNameSpy = jest.spyOn(nameApiServiceMock, "getFirstName");
      getFirstNameSpy.mockResolvedValueOnce("Mary");

      const throwFn = async (): Promise<void> => {
        await getFirstNameThrowIfLong(3, nameApiServiceMock);
      };
      expect(throwFn).rejects.toThrow(new Error("first_name too long"));
    });

    test("API が例外を投げると、この関数も例外を投げる", async (): Promise<
      void
    > => {
      const getFirstNameSpy = jest.spyOn(nameApiServiceMock, "getFirstName");
      getFirstNameSpy.mockRejectedValue(new Error("firstName is too long!"));

      const throwFn = async (): Promise<void> => {
        await getFirstNameThrowIfLong(4, nameApiServiceMock);
      };

      await expect(throwFn).rejects.toThrow(
        new Error("firstName is too long!")
      );
    });
  });
});
