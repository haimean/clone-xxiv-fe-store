<template>
  <div class="my-component">
    <div>{{ reverseMessage }}</div>
    <div><button @click="changeMessage">Click me</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('')
    },
  },
  watch: {
    reverseMessage() {
      al('Computed changed')
    },
  },
  methods: {
    changeMessage() {
      this.message = 'this is new message'
    },
  },
}
</script>

<style lang="scss" scoped>
.my-component {
  color: red;
}
</style>
