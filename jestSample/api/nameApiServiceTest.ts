
import { NameApiBase } from "./nameApiBase";

export class NameApiServiceTest implements NameApiBase {
  private MAX_LENGTH = 4;
  private firstName: string;

  public constructor(firstName: string) {
    this.firstName = firstName;
  }

  public async getFirstName(): Promise<string> {
    if (this.firstName.length > this.MAX_LENGTH) {
      throw new Error("firstName is too long!");
    }

    return this.firstName;
  }
}
