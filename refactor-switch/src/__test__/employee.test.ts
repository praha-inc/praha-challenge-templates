/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Employee } from "../employee";

// memo: この単体テストには「アサーションルーレット」と呼ばれるテストにおけるアンチパターンが含まれています
// どんなアンチパターンなのか、なぜ良くないとされるのか、考えてみましょう！
describe("employee", () => {
  test("給与が正しく計算できる", () => {
    const testData: { input: number; output: number }[] = [
      {
        input: 0,
        output: 300,
      },
      {
        input: 1,
        output: 400,
      },
      {
        input: 2,
        output: 350,
      },
    ];
    testData.forEach((testDatum) => {
      const employee = new Employee(testDatum.input, 300, 100, 50);
      expect(employee.payAmount()).toBe(testDatum.output);
    });
  });
  test("退職金の適用有無が正しく計算できる", () => {
    const testData: { input: number; output: boolean }[] = [
      {
        input: 0,
        output: true,
      },
      {
        input: 1,
        output: false,
      },
      {
        input: 2,
        output: true,
      },
    ];
    testData.forEach((testDatum) => {
      const employee = new Employee(testDatum.input, 300, 100, 50);
      expect(employee.hasRetirementPlan()).toBe(testDatum.output);
    });
  });
  test("取締役区分を正しく取得できる", () => {
    const testData: { input: number; output: boolean }[] = [
      {
        input: 0,
        output: false,
      },
      {
        input: 1,
        output: false,
      },
      {
        input: 2,
        output: true,
      },
    ];
    testData.forEach((testDatum) => {
      const employee = new Employee(testDatum.input, 300, 100, 50);
      expect(employee.isBoardMember()).toBe(testDatum.output);
    });
  });
});
