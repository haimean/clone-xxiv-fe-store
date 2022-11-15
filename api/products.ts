import { BaseApi } from '~/core/api'

export default class ProductApi extends BaseApi {
  async getAll() {
    return await this.axios.get('/product/get-all', {})
  }

  async get(id: number) {
    return await this.axios.get(`/product/${id}`)
  }
}
