<template>
  <div>
    <div class="bg-[#FAFAFA]">
      <div class="my-[10px] mt-[70px]">
        <div class="mx-[40px] max-w-[1680px] mx-auto">
          <div class="mx-[40px]">
            <b-breadcrumb align="is-left" size="is-small">
              <b-breadcrumb-item tag="router-link" to="/"
                >Trang chủ
              </b-breadcrumb-item>
              <b-breadcrumb-item tag="router-link" to="/brand">
                Thương hiệu
              </b-breadcrumb-item>
              <b-breadcrumb-item
                tag="router-link"
                :to="'/brand/' + product.brands_id"
              >
                {{ product.brand ? product.brand.name : ' ' }}
              </b-breadcrumb-item>
              <b-breadcrumb-item
                tag="router-link"
                :to="'/product' + product.tid"
                active
              >
                {{ product.title }}
              </b-breadcrumb-item>
            </b-breadcrumb>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-[40px] max-w-[1680px] mx-auto">
      <ProductCard
        :product="product"
        style="border-bottom: 1px solid #ccc"
        class="pb-[40px] mb-[40px]"
      />
      <ProductNews />
      <ProductRelated />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
    }
  },
  mounted() {
    this.getProdcuct()
  },
  methods: {
    async getProdcuct() {
      try {
        await this.$api.product
          .get(this.$route.params.id)
          .then((response) => {
            this.product = response.data
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