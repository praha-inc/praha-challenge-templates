import axios from "axios";

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

export const isMale = async (): Promise<boolean> => {
  const { data } = await axios.get("https://randomuser.me/api/");
  const sex = data.results[0].gender;
  if (sex === "male") {
    return true;
  } else {
    return false;
  }
};
