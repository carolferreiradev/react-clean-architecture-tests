import { DrinkByNameModel } from '@/domain/model/drink-by-name-model'

export type GetDrinkByNameParams = {
    url?: string
}

export interface GetDrinkByName {
    getDrinkName(params: GetDrinkByNameParams): Promise<DrinkByNameModel>
}
