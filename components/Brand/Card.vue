<template>
  <div>
    <p class="is-size-3">
      {{ char }}
    </p>
    <div v-for="brand in brands" :key="brand">
      <BrandItem :brand="brand" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listBrands: {
      type: Object,
      required: true,
    },
    char: {
      type: String,
      required: true,
    },
  },
  computed: {
    brands() {
      return this.listBrands.filter((option) => {
        return (option.name + '')
          .toString()
          .charAt(0)
          .toLowerCase()
          .includes(this.char.toLowerCase())
      })
    },
  },
  methods: {},
}
</script>