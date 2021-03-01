/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-parameter-properties */

export class Employee {
  public static readonly ENGINEER: number = 0;
  public static readonly SALESMAN: number = 1;
  public static readonly MANAGER: number = 2;
  public static readonly SUPER_MANAGER: number = 3;
  public constructor(
    private _type: number,
    private _monthlySalary: number,
    private _comission: number,
    private _bonus: number
  ) {}

  // memo:給与計算
  public payAmount() {
    switch (this._type) {
      case Employee.ENGINEER:
        return this._monthlySalary;
      case Employee.SALESMAN:
        return this._monthlySalary + this._comission;
      case Employee.MANAGER:
        return this._monthlySalary + this._bonus;
      case Employee.SUPER_MANAGER:
        return this._monthlySalary + this._comission + this._bonus;
      default:
        throw new Error("invalid employee type");
    }
  }
  // memo: 退職プランを適用するか否か
  public hasRetirementPlan() {
    switch (this._type) {
      case Employee.ENGINEER:
        return true;
      case Employee.SALESMAN:
        return false;
      case Employee.MANAGER:
        return true;
      case Employee.SUPER_MANAGER:
        return true;
      default:
        throw new Error("invalid employee type");
    }
  }
  // memo: 取締役か否か
  public isBoardMember() {
    switch (this._type) {
      case Employee.ENGINEER:
        return false;
      case Employee.SALESMAN:
        return false;
      case Employee.MANAGER:
        return true;
      case Employee.SUPER_MANAGER:
        return true;
      default:
        throw new Error("invalid employee type");
    }
  }
}

const engineer = new Employee(Employee.ENGINEER, 300, 100, 50);
engineer.payAmount();
