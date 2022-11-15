import { BaseApi } from '~/core/api'

export default class CapacityApi extends BaseApi {
  async getAll() {
    return await this.axios.get('/capacity/get-all', {})
  }
}
