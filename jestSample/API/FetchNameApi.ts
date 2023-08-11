import { IFetchNameApi } from "../interface/IFetchNameApi";
import axios from "axios";

export class FetchNameApi implements IFetchNameApi{
    public async getFirstName(): Promise<string>{
        const { data } = await axios.get(
            "https://random-data-api.com/api/name/random_name"
        );

        const firstName = data.first_name as string;

        return firstName;
    };
};

export class FetchNameApiMock implements IFetchNameApi{
    private firstName: string;

    constructor(firstName: string){
        this.firstName = firstName;
    }

    public async getFirstName(): Promise<string>{
        return this.firstName;
    }
}