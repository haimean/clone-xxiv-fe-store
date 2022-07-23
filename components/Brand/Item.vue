<template>
  <div class="relative item-brand">
    <nuxt-link :to="'/brand/' + brand.id" class="text-black">
      {{ brand.name }}
      <img class="img-hover" :src="brand.logo" />
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    brand: {
      type: Object,
      required: true,
    },
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.img-hover {
  z-index: -1;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 30%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border: none;
}

.item-brand:hover .img-hover {
  display: block;
}
</style>