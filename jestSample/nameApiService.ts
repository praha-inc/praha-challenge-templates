import axios, { AxiosInstance } from "axios";

export class NameApiService {
  private MAX_LENGTH = 4;
  private axiosInstance: AxiosInstance;
  public constructor(axiosInstance: AxiosInstance = axios.create()) {
    this.axiosInstance = axiosInstance;
  }

  public async getFirstName(): Promise<string> {
    const { data } = await this.axiosInstance.get(
      "https://random-data-api.com/api/name/random_name"
    );
    const firstName = data.first_name as string;

    if (firstName.length > this.MAX_LENGTH) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}
