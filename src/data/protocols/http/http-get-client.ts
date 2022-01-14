import { HttpResponse } from '.'

export type HttpGetParams<T> = {
    url: string
    drinkName?: string
    drinksList?: T
}
export interface HttpGetDrink<T, R> {
    get(params: HttpGetParams<T>): Promise<HttpResponse<R>>
}
