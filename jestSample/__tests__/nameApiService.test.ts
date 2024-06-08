import axios from "axios";
import { NameApiService } from "../nameApiService";

describe("NameApiService", (): void => {
  describe("getFirstName", (): void => {
    
    describe("MAX_FIRST_NAME_LENGTHより大きいfirstNameが取得された場合", (): void => {
      it("エラーをスローする", (): void => {
        jest.spyOn(axios, 'get').mockResolvedValue({
          data: {
            first_name: "mockedName"
          }
        });
        expect(NameApiService.getFirstName()).rejects.toThrow();
      });
    });

    describe("MAX_FIRST_NAME_LENGTHより小さいfirstNameが取得された場合", (): void => {
      it("firstNameが返却される", (): void => {
        jest.spyOn(axios, 'get').mockResolvedValue({
          data: {
            first_name: "a"
          }
        });
        expect(NameApiService.getFirstName()).resolves.toBe("a");
      });
    });
  });
});
