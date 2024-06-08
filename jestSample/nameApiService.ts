import axios from "axios";

export type NameApiService = {
  getFirstName(): Promise<string>;
};

const MAX_FIRST_NAME_LENGTH = 4;

export const NameApiService: NameApiService = {
  async getFirstName(): Promise<string> {
    const { data } = await axios.get(
      "https://random-data-api.com/api/name/random_name"
    );
    const firstName = data.first_name as string;

    if (firstName.length > MAX_FIRST_NAME_LENGTH) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}

export const NameApiServiceMock: NameApiService = {
  async getFirstName(): Promise<string> {
    return "mockedName"
  }
}
