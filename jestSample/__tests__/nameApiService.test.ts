import { NameApiService } from "../nameApiService";

test("getFirstNameのテスト", async () => {
  const nameApiService = new NameApiService();
  jest
    .spyOn(nameApiService, "getFirstName")
    .mockReturnValue(new Promise((resolve) => resolve("tom")));
  expect(await nameApiService.getFirstName()).toBe("tom");
});
