import axios from 'axios';

export class ZipCloudApiService {
  private END_POINT = 'https://zipcloud.ibsnet.co.jp/api/search';

  public async getPrefecture(zipCode: string): Promise<string | null> {
    if (!zipCode.match(/\d{7}/)) throw new Error('郵便番号は数字7桁で入力してください');

    const { data } = await axios.get(`${this.END_POINT}?zipcode=${zipCode}`);
    return data[0]['address1'];
  }
}
