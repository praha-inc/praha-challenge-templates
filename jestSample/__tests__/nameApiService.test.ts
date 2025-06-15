import { DataFetcher, NameApiService } from "../nameApiService";

// 課題2-3
test("取得したfirstNameが4文字以下だったらその値を返す", async () => {
  class FetchDataMockFourCharacter implements DataFetcher {
    getData(): any {
      return {
        data: {
          first_name: "Taro"
        }
      }
    }
  }
  const fetchDataMock = new FetchDataMockFourCharacter();
  const nameApiService = new NameApiService(fetchDataMock);
  expect(await nameApiService.getFirstName()).toBe("Taro");
});

test("取得したfirstNameが5文字以上だったら例外を発生させる", async () => {
  class FetchDataMockFiveCharacter implements DataFetcher {
    getData(): any {
      return {
        data: {
          first_name: "Alice"
        }
      }
    }
  }
  const fetchDataMock = new FetchDataMockFiveCharacter();
  const nameApiService = new NameApiService(fetchDataMock);
  await expect(nameApiService.getFirstName()).rejects.toThrow();
});