import { NameApiService } from "./nameApiService";

console.log("aaaa");

const nameApiService = new NameApiService();
const a = nameApiService.getFirstName();

a.then((value) => {
  console.log(value);
});
