import { ZipCloudApiService } from './zipCloudApiService';

export const omikuji = (yourName: string): string => {
  const list = ['大吉', '中吉', '小吉', '凶', '大凶'];
  return `今日の${yourName}の運勢は、${list[Math.floor(Math.random() * list.length)]}です！`;
}

export const isPrimeNumber = (number: number):boolean => {
  if (number < 2) return false;
  if (number === 2) return true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

export const whatPrefecture = (zipCode: string, zipCloudApiService: ZipCloudApiService): string => {
  const prefecture = zipCloudApiService.getPrefecture(zipCode);
  if (prefecture) {
    return `〒${zipCode}は${prefecture}に存在します`;
  } else {
    return `〒${zipCode}は存在しません`;
  }
}