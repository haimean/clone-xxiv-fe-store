<template>
  <div>
    <BrandList :list-brands="listBrands" />
  </div>
</template><script>
export default {
  data() {
    return {
      listBrands: [],
    }
  },

  mounted() {
    this.getBrands()
  },
  methods: {
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