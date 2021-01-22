"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nameApiService_1 = require("./nameApiService");
console.log("aaaa");
const nameApiService = new nameApiService_1.NameApiService();
const a = nameApiService.getFirstName();
a.then((value) => {
    console.log(value);
});
