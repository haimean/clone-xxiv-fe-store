<template>
  <div>
    <nuxt-link :to="'product/' + product.id">
      <img
        class="m-[20px]"
        :src="product.image"
        alt=""
        width="205"
        height="205"
    /></nuxt-link>
    <div class="text-center">
      <div>
        <nuxt-link :to="'product/' + product.id">
          <p class="my-[10px]" style="color: #6d321b">
            {{ product.brand ? product.brand.name : ' ' }}
          </p>
          <p class="text-black">{{ product.title }}</p>
        </nuxt-link>
      </div>

      <p v-show="product.price > 0" class="mb-[10px]">
        {{ changePrice(product.price) }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changePrice(price) {
      return Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      }).format(price)
    },
  },
}
</script>