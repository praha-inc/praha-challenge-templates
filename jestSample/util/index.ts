import { IDatabaseMock } from "../interface/IDatabaseMock";
import { INameApiService } from "../API/Interface/INameApiService";

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

export class DatabaseMock implements IDatabaseMock {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public save(_: number[]): void {
    // memo: 課題のために、あえて時々saveが失敗するようにしている
    if (getRandomInt(10) < 2) {
      throw new Error("fail!");
    }
  }
}

// save成功データベースモック
export class SuccessDatabaseMock implements IDatabaseMock{
  public save(args: number[]): void {
    console.log("Success");
  }
}

// save失敗データベースモック
export class ThrowDatabaseMock implements IDatabaseMock{
  public save(args: number[]): void {
    throw new Error;
  }
}

// 正常値を返すNameApiServiceモック
export class GetRightNameApiService implements INameApiService{
  public getFirstName(): Promise<string> {
    return new Promise<string>((resolve): void => {
      resolve("Taro");
    });
  };
}
