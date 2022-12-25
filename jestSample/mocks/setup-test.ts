import { server } from "./server";
import { SetupServerApi } from "msw/node";

export const setupMockServer = (): SetupServerApi => {
  beforeAll((): void => server.listen());
  afterEach((): void => server.resetHandlers());
  afterAll((): void => server.close());

  return server;
};
