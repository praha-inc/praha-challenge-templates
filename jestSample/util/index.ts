const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

export interface BaseDatabase {
  save(numbers: number[]): void;
}

export class Database implements BaseDatabase {
  public save(_: number[]): void {
    // DB保存処理を実装
  }
}

export class DatabaseMock implements BaseDatabase {
  public saveCallback!: () => void;
  public save(_: number[]): void {
    this.saveCallback();
  }
}
