import axios from "axios";

export class NameApiService {
  private MAX_LENGTH = 4;
  public constructor() {}

  public async getFirstName(): Promise<string> {
    const { data } = await axios.get(
      "https://randomuser.me/api/"
    );

    const firstName = data.results[0].name.first as string;

    if (firstName.length > this.MAX_LENGTH) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}
