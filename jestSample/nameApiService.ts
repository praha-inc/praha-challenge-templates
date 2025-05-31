import axios from "axios";

export interface FetchInterface {
  getData(): Promise<any>;
}

class FetchDataWithApi implements FetchInterface {
  async getData(): Promise<any> {
    return await axios.get(
      "https://random-data-api.com/api/name/random_name"
    );
  }
}

export class NameApiService {
  private MAX_LENGTH = 4;
  private fetchService: FetchInterface

  public constructor(fetchService: FetchInterface) {
    this.fetchService = fetchService;
  }

  public async getFirstName(): Promise<string> {
    const { data } = await this.fetchService.getData();
    const firstName = data.first_name as string;

    if (firstName.length > this.MAX_LENGTH) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}
