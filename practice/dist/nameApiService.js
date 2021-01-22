"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameApiService = void 0;
const axios_1 = __importDefault(require("axios"));
class NameApiService {
    constructor() {
        this.MAX_LENGTH = 4;
    }
    async getFirstName() {
        const { data } = await axios_1.default.get("https://random-data-api.com/api/name/random_name");
        const firstName = data.first_name;
        if (firstName.length > this.MAX_LENGTH) {
            throw new Error("firstName is too long!");
        }
        return firstName;
    }
}
exports.NameApiService = NameApiService;
