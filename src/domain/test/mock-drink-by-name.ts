import { GetDrinkByNameParams } from '@/domain/usecases'
import { DrinkByNameModel } from '@/domain/model'
import faker from 'faker'

export const mockDrinkByName = (): GetDrinkByNameParams => ({
    url: faker.internet.url()
})

export const mockDrinkByNameModel = (): DrinkByNameModel => ({
    drinksList: faker.random.objectElement()
})
