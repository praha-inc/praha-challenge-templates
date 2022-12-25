import axios from "axios";
import { NameApiService } from "../nameApiService";
import { setupMockServer } from "../mocks/setup-test";
import { DefaultBodyType, PathParams, rest } from "msw";

describe("NameApiService", (): void => {
  let nameApiService: NameApiService;
  const server = setupMockServer();

  const setMockHandler = ({
    firstName,
    status = 200,
  }: {
    firstName?: string;
    status?: number;
  }): void => {
    server.use(
      rest.get<DefaultBodyType, PathParams, { first_name: string }>(
        "https://random-data-api.com/api/name/random_name",
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        (_req, res, ctx) => {
          const transformers = [ctx.status(status)];
          if (firstName) {
            // eslint-disable-next-line @typescript-eslint/camelcase
            transformers.push(ctx.json({ first_name: firstName }));
          }
          return res(...transformers);
        }
      )
    );
  };

  beforeEach((): void => {
    nameApiService = new NameApiService(axios.create());
  });

  describe("getFirstName", (): void => {
    test("Random Data API から名前を取得できる", async (): Promise<void> => {
      setMockHandler({ firstName: "Mike" });

      const actual = await nameApiService.getFirstName();
      expect(actual).toBe("Mike");
    });

    test("Random Data API から名前を取得した名前が 4 文字より大きいと例外を投げる", async (): Promise<
      void
    > => {
      setMockHandler({ firstName: "Michael" });

      const throwFn = async (): Promise<void> => {
        await nameApiService.getFirstName();
      };
      await expect(throwFn).rejects.toThrow(
        new Error("firstName is too long!")
      );
    });

    test("Random Data API がダウンしている時はエラーを投げる", async (): Promise<
      void
    > => {
      setMockHandler({ status: 500 });

      const throwFn = async (): Promise<void> => {
        await nameApiService.getFirstName();
      };
      await expect(throwFn).rejects.toThrow(
        "Request failed with status code 500"
      );
    });
  });
});
