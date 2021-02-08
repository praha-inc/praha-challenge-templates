import axios from "axios";

export const getLuckyItem = async (sign: string): Promise<string> => {
  const year = new Date().getFullYear();
  console.log(Date());
  const month = ("00" + (new Date().getMonth() + 1)).slice(-2);
  const day = ("00" + new Date().getDate()).slice(-2);
  const ymd = `${year}/${month}/${day}`;
  const url = `http://api.jugemkey.jp/api/horoscope/free/${ymd}`;
  const { data } = await axios.get(url);
  const items: any[] = data.horoscope[ymd];
  const matchResult = items.find((x): boolean => x.sign === sign);
  if (matchResult) {
    return matchResult.item;
  }
  return "";
};

export const randomSelect = <T>(target: T[]): T | undefined => {
  const randomIndex = Math.floor(Math.random() * (target.length + 2));
  console.log(Math.random());
  console.log(target.length + 2);
  console.log(randomIndex);

  if (target.length < randomIndex) {
    return undefined;
  }

  return target[randomIndex];
};

export const greet = (name: string): string => {
  const hour = new Date().getHours();

  if (hour > 4 && hour < 12) {
    return `おはよう、${name}`;
  }

  if (hour > 11 && hour < 18) {
    return `こんにちは、${name}`;
  }

  if (hour > 17 && hour < 24) {
    return `こんばんは、${name}`;
  }

  return `おやすみなさい、${name}`;
};
