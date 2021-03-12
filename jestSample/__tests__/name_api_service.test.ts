import { NameApiService } from "../nameApiService";
import axios from "axios";


jest.mock('axios');

test('should fetch name', () => {
  const resp = {data: {first_name: 'hel'}};
  (axios.get as any).mockResolvedValue(resp);
  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))
  const service = new NameApiService();
  return service.getFirstName().then(data => expect(data).toEqual('hel'));
});

test('should fetch name', () => {
  const resp = {data: {first_name: 'hello'}};
  (axios.get as any).mockResolvedValue(resp);
  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))
  const service = new NameApiService();
  return service.getFirstName().then(data => expect(data).toThrow('firstName is too long!'));
});