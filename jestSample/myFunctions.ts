export const fizzBuzz = (number: number): string | number => {
  if (number % 15 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

export class RandomUserService {
  private data: any;
  public constructor(data: any) {
    this.data = data;
  }
  public async isMale(): Promise<boolean> {
    const gender = await this.data.results[0].gender;
    return gender === "male";
  }
}


export const exponentiation = (numbers:[number,number]): number => {
  return numbers[0] ** numbers[1];
};
