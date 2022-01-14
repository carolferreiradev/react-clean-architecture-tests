import { HttpGetDrinkSpy } from '@/data/test'
import { DrinkByNameModel } from '@/domain/model'
import { mockDrinkByName } from '@/domain/test'
import { GetDrinkByNameParams } from '@/domain/usecases'
import faker from 'faker'
import { RemoteSearchDrink } from './remote-search-drink'

type SutTypes = {
    sut: RemoteSearchDrink
    httpSearchDrinkSpy: HttpGetDrinkSpy<GetDrinkByNameParams, DrinkByNameModel>
}

const makeSut = (url: string = faker.internet.url(), params: string = faker.name.firstName()): SutTypes => {
    const httpSearchDrinkSpy = new HttpGetDrinkSpy<GetDrinkByNameParams, DrinkByNameModel>()
    const sut = new RemoteSearchDrink(url, params, httpSearchDrinkSpy)
    return {
        sut,
        httpSearchDrinkSpy
    }
}

describe('RemoteCallApi', () => {
    test('Should call HttpSearchDrink with correct URL and param drink name', async () => {
        const params = faker.name.firstName()
        const url = faker.internet.url()
        const { sut, httpSearchDrinkSpy } = makeSut(url, params)
        await sut.getDrinkName(mockDrinkByName())
        expect(httpSearchDrinkSpy.url).toBe(`${url}${params}`)
    })
})
