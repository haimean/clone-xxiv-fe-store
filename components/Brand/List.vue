<template>
  <div>
    <div class="pt-[70px]">
      <p class="is-size-1 text-center mb-[20px]">Thương hiệu</p>
      <div class="py-[10px] bg-[#FAFAFA]">
        <div class="mx-[40px] max-w-[1680px] mx-auto">
          <div class="mx-[40px]">
            <div class="is-flex is-justify-content-center">
              <p
                class="px-[5px] font-semibold text-lg hover:underline"
                @click="allChar"
              >
                ALL BRANDS
              </p>
              <div
                v-for="ch in listChars"
                :key="ch"
                class="px-[5px]"
                @click="chooseChar(ch)"
              >
                <p
                  class="text-lg hover:underline"
                  :class="hideChar(ch) ? 'font-semibold' : ''"
                >
                  {{ ch }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-[70px] mx-[40px] max-w-[1200px] mx-auto">
      <div class="mx-[40px]">
        <div class="columns is-multiline">
          <div v-for="ch in listChars" :key="ch" class="column is-3 py-[20px]">
            <BrandCard
              :class="hideCard(ch) ? ' ' : 'opacity-30'"
              :list-brands="listBrands"
              :char="ch"
            />
          </div>
        </div>
      </div>
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
  },
  data() {
    return {
      listChars: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'R',
        'S',
        'T',
        'U',
        'V',
        'Z',
      ],
      char: 'ALL BRANDS',
    }
  },
  computed: {},
  methods: {
    allChar() {
      this.char = 'ALL BRANDS'
    },
    chooseChar(c) {
      this.char = c
    },
    hideCard(c) {
      if (this.char === 'ALL BRANDS') return true
      if ((this.char + '').toString().toLowerCase().includes(c.toLowerCase()))
        return true
      return false
      // if()
    },
    hideChar(c) {
      if (this.char === 'ALL BRANDS') return false
      if ((this.char + '').toString().toLowerCase().includes(c.toLowerCase()))
        return true
      return false
      // if()
    },
  },
}
</script>