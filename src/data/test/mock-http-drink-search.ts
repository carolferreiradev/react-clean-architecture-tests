import { HttpGetParams } from '@/data/protocols/http'
import faker from 'faker'
export const mockDrinkSearch = (): HttpGetParams<any> => ({
    url: faker.internet.url(),
    drinkName: faker.name.firstName(),
    drinksList: faker.random.objectElement()
})
