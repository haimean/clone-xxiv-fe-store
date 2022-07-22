import { BaseApi } from '~/core/api'

export default class BrandApi extends BaseApi {
  async getBrands() {
    return await this.axios.get('/brand/get-brands', {})
  }
}
