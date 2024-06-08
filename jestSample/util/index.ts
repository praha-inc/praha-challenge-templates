const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

export type Database = {
  save(numbers: number[]): void;
};

export const DatabaseSuccessMock: Database = {
  save(_: number[]) {
    return;
  }
}

export const DatabaseFailureMock: Database = {
  save(_: number[]) {
    throw new Error("fail!");
  }
}