import { FetchNameApiMock } from "../API/FetchNameApi"
import { INameApiService } from "../API/Interface/INameApiService"
import { IFetchNameApi } from "../interface/IFetchNameApi"
import { NameApiService } from "../nameApiService"

describe('getFirstName test', () => {

    test('Length of FirstName is 3 should return FirstName ', async () => {
        // SetUp
        const fetchNameApi: IFetchNameApi = new FetchNameApiMock('Jun');
        const nameApiService: INameApiService = new NameApiService(fetchNameApi);
        // Exercise
        const actual: string = await nameApiService.getFirstName();
        // Verify
        expect(actual).toBe('Jun');
    });

    test('Length of FirstName is 4 should return FirstName', async () => {
        // SetUp
        const fetchNameApi: IFetchNameApi = new FetchNameApiMock('Taro');
        const nameApiService: INameApiService = new NameApiService(fetchNameApi);
        // Exercise
        const actual: string = await nameApiService.getFirstName();
        // Verify
        expect(actual).toBe('Taro');
    });

    test('Length of FirstName is 5 should throw Error', async () => {
        // SetUp
        const fetchNameApi: IFetchNameApi = new FetchNameApiMock('Kenta');
        const nameApiService: INameApiService = new NameApiService(fetchNameApi);
        // Exercise,Verify
        await expect(nameApiService.getFirstName()).rejects.toThrowError('firstName is too long!');
    })
})