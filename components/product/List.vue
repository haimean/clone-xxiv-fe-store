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
              field="name"
              :data="filteredDataArray"
              placeholder="e.g. jQuery"
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
                <b-radio v-model="sex" native-value="unisex"> Unisex </b-radio>
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
                  1.500.000 - 3.000.000
                </b-radio>
                <b-radio
                  v-model="price"
                  class="column is-full"
                  native-value="2"
                >
                  3.000.000 - 5.000.000
                </b-radio>
                <b-radio
                  v-model="price"
                  class="column is-full"
                  native-value="3"
                >
                  >5.000.000
                </b-radio>
              </div>
            </b-field>
          </div>
        </div>
        <div class="column is-four-fifths">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listProducts: [],
      listBrands: [],
      sex: '',
      season: '',
      price: '',
      nameBand: '',
      perPage: 30,
      pageSize: '30',
      pageNumber: 1,
      selectedBrand: null,
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
            this.listProducts = response.data
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