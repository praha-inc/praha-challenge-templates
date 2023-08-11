import { IFetchNameApi } from "./interface/IFetchNameApi";

export class NameApiService {
  private MAX_LENGTH = 4;
  private fetchNameApi: IFetchNameApi;
  
  public constructor(fetchNameApi: IFetchNameApi) {
    this.fetchNameApi = fetchNameApi
  }

  public async getFirstName(): Promise<string> {

    const firstName = await this.fetchNameApi.getFirstName();

    if (firstName.length > this.MAX_LENGTH) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}