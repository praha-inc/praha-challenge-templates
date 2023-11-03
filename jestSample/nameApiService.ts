import axios from "axios";

export class NameApiService {
  public constructor() {}

  public async getFirstName(maxNameLength: number): Promise<string> {
    const { data } = await axios.get(
      "https://random-data-api.com/api/name/random_name"
    );
    const firstName = data.first_name as string;

    if (firstName.length > maxNameLength) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}
