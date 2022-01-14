import { HttpGetParams, HttpResponse, HttpGetDrink } from '@/data/protocols/http'

export class HttpGetDrinkSpy<T, R> implements HttpGetDrink<T, R> {
    url?: string
    params?: string
    response: HttpResponse<R> = {
        drinksList: null
    }

    async get(params: HttpGetParams<T>): Promise<HttpResponse<R>> {
        this.url = params.url
        return await Promise.resolve(this.response)
    }
}
