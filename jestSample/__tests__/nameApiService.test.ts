import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { NameApiService } from "../nameApiService";

const server = setupServer(
  http.get("https://random-data-api.com/api/name/random_name", () => {
    return HttpResponse.json({ first_name: "John" });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("NameApiService (msw v2)", () => {
  it("短い名前を返すとき、正常に返す", async () => {
    const service = new NameApiService();
    const name = await service.getFirstName();
    expect(name).toBe("John");
  });

  it("長い名前を返すとき、エラーを投げる", async () => {
    server.use(
      http.get("https://random-data-api.com/api/name/random_name", () => {
        return HttpResponse.json({ first_name: "Johnathan" });
      })
    );

    const service = new NameApiService();
    await expect(service.getFirstName()).rejects.toThrow("firstName is too long!");
  });
});
