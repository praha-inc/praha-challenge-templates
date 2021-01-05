import axios from "axios";

export class NameApiService {
  private MAX_LENGTH = 4;
  public constructor() {}

  public async getFirstName(): Promise<string> {
    const { data } = await axios.get(
      "https://random-data-api.com/api/name/random_name"
    );
    const firstName = data.first_name as string;

    if (firstName.length > this.MAX_LENGTH) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}
