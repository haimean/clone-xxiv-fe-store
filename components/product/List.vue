<template>
  <div class="pb-[70px] mx-auto max-w-[1680px]">
    <div class="">
      <div class="columns px-[40px]">
        <div class="column is-one-fifth">
          <div class="btn-search">
            <p class="is-size-5 py-[10px]">THƯƠNG HIỆU</p>
            <b-autocomplete
              v-model="nameBand"
              rounded
              open-on-focus
              field="name"
              :data="filteredDataArray"
              icon="magnify"
              clearable
              @select="(option) => (selectedBrand = option)"
            >
              <template #empty>No results found</template>
            </b-autocomplete>
          </div>
          <div class="btn-search">
            <p class="is-size-5 py-[10px]">GIỚI TÍNH</p>

            <div>
              <b-field>
                <b-radio v-model="sex" native-value="male"> Nam </b-radio>
                <b-radio v-model="sex" native-value="female"> Nữ </b-radio>
                <b-radio v-model="sex" native-value="oversex"> Unisex </b-radio>
              </b-field>
            </div>
          </div>
          <div class="btn-search">
            <p class="is-size-5 py-[10px]">MÙA</p>
            <div>
              <b-field>
                <div class="columns is-multiline">
                  <b-radio
                    v-model="season"
                    class="column is-one-third"
                    native-value="spring"
                  >
                    Xuân
                  </b-radio>
                  <b-radio
                    v-model="season"
                    class="column is-one-third"
                    native-value="summer"
                  >
                    Hạ
                  </b-radio>
                  <b-radio
                    v-model="season"
                    class="column is-one-third"
                    native-value="fall"
                  >
                    Thu
                  </b-radio>
                  <b-radio
                    v-model="season"
                    class="column is-one-third"
                    native-value="winter"
                  >
                    Đông
                  </b-radio>
                </div>
              </b-field>
            </div>
          </div>
          <div class="btn-search">
            <p class="is-size-5 py-[10px]">THEO GIÁ</p>
            <b-field>
              <div class="columns is-multiline">
                <b-radio
                  v-model="price"
                  class="column is-full"
                  native-value="1"
                >
                  0 - 1.500.000
                </b-radio>
                <b-radio
                  v-model="price"
                  class="column is-full"
                  native-value="2"
                >
                  1.500.000 - 3.000.000
                </b-radio>
                <b-radio
                  v-model="price"
                  class="column is-full"
                  native-value="3"
                >
                  3.000.000 - 5.000.000
                </b-radio>
                <b-radio
                  v-model="price"
                  class="column is-full"
                  native-value="4"
                >
                  >5.000.000
                </b-radio>
              </div>
            </b-field>
          </div>
        </div>
        <div class="column is-four-fifths">
          <div v-if="listProducts.length > 0">
            <div
              class="
                columns
                pr-[15px]
                is-multiline is-flex is-justify-content-center
              "
            >
              <div
                v-for="item in products"
                :key="item.id"
                class="column is-one-fifth"
              >
                <ProductItem :product="item" />
              </div>
            </div>
            <b-pagination
              v-model="pageNumber"
              :total="lengthOfListProducs"
              :per-page="perPage"
              order="is-centered"
              :size="pageSize"
            >
            </b-pagination>
          </div>
          <div v-else>
            <p class="is-size-3 text-center py-[70px]">Không có kết quả</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sexProps: {
      type: String,
      default: '',
    },
    seasonProps: {
      type: String,
      default: '',
    },
    priceProps: {
      type: Number,
      default: null,
    },
    selectedBrandProps: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      dataOfProducts: [],
      listBrands: [],
      sex: this.sexProps,
      selectedBrand: this.selectedBrandProps,
      season: this.seasonProps,
      price: this.priceProps,
      nameBand: '',
      perPage: 30,
      pageSize: '30',
      pageNumber: 1,
    }
  },
  computed: {
    lengthOfListProducs() {
      return this.listProducts.length
    },
    products() {
      return this.listProducts.slice(
        (this.pageNumber - 1) * this.pageSize,
        this.pageNumber * this.pageSize
      )
    },
    filteredDataArray() {
      return this.listBrands.filter((option) => {
        return (option.name + '')
          .toString()
          .toLowerCase()
          .includes(this.nameBand.toLowerCase())
      })
    },
    listProducts() {
      let data = this.dataOfProducts
      if (this.selectedBrand) {
        data = data.filter((value) => {
          return (this.selectedBrand.id + '')
            .toLowerCase()
            .includes((value.brand.id + '').toLowerCase())
        })
      }
      if (this.sex !== '') {
        data = data.filter((value) => {
          return (this.sex + '')
            .toLowerCase()
            .includes((value.sex + '').toLowerCase())
        })
      }
      if (this.season !== '') {
        data = data.filter((value) => {
          return (this.season + '')
            .toLowerCase()
            .includes((value.season + '').toLowerCase())
        })
      }
      switch (this.price) {
        case '1':
          console.log('he')
          data = data.filter((value) => {
            return value.price < 1500000
          })
          break
        case '2':
          data = data.filter((value) => {
            return value.price > 1500000 && value.price < 3000000
          })
          break
        case '3':
          data = data.filter((value) => {
            return value.price > 3000000 && value.price < 5000000
          })
          break
        case '4':
          data = data.filter((value) => {
            return value.price > 5000000
          })
          break
        default:
          break
      }
      return data
    },
  },
  mounted() {
    this.getProdcucts()
    this.getBrands()
  },
  methods: {
    async getProdcucts() {
      try {
        await this.$api.product
          .getAll()
          .then((response) => {
            this.dataOfProducts = response.data
          })
          .catch((e) => {
            Object.keys(err.response.data.errors).forEach((key) => {
              e.response.data.errors[key].forEach((msg) => {
                this.$notify.create({
                  message: msg,
                  color: 'negative',
                })
              })
            })
          })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async getBrands() {
      try {
        await this.$api.brand
          .getBrands()
          .then((response) => {
            this.listBrands = response.data
          })
          .catch((e) => {
            Object.keys(err.response.data.errors).forEach((key) => {
              e.response.data.errors[key].forEach((msg) => {
                this.$notify.create({
                  message: msg,
                  color: 'negative',
                })
              })
            })
          })
      } catch (e) {
        return Promise.reject(e)
      }
    },
  },
}
</script>
<style  lang="scss" scoped>
.btn-search {
  padding: 10px 0;
}
</style>