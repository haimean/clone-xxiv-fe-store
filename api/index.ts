import BrandApi from './brands'
import CapacityApi from './capacities'
import ProductApi from './products'
import { BaseApi } from '~/core/api'

export default class RootApi extends BaseApi {
  deps = {
    brand: BrandApi,
    capacity: CapacityApi,
    product: ProductApi,
  }
}
