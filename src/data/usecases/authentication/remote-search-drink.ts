import { DrinkByNameModel } from '@/domain/model'
import { HttpGetDrink } from '@/data/protocols/http'
import { GetDrinkByName, GetDrinkByNameParams } from '@/domain/usecases'

export class RemoteSearchDrink implements GetDrinkByName {
    constructor(
        private readonly url: string,
        private readonly params: string,
        private readonly httpGetDrink: HttpGetDrink<GetDrinkByNameParams, DrinkByNameModel>
    ) { }

    async getDrinkName(params: GetDrinkByNameParams): Promise<DrinkByNameModel> {
        const drinksList = await this.httpGetDrink.get({
            url: `${this.url}${this.params}`
        })

        return drinksList
    }
}
