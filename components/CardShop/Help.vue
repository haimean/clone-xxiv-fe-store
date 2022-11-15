<template>
  <div class="mt-[15px] pb-[15px]" style="border-bottom: 1px solid #e5e5e5">
    <b-collapse v-model="isOpenHelp" aria-id="contentIdForA11y2" class="">
      <template #trigger>
        <div class="flex justify-between">
          <div
            class=""
            role="button"
            aria-controls="contentIdForA11y2"
            :aria-expanded="isOpenHelp"
          >
            <p class="is-size-5 text-slate-500">
              {{ title }}
            </p>
          </div>
          <div v-show="isOpenHelp">
            <b-icon icon="plus"> </b-icon>
          </div>
          <div v-show="!isOpenHelp">
            <b-icon icon="minus"> </b-icon>
          </div>
        </div>
      </template>
      <div class="mt-[20px] text-slate-400">
        <slot></slot>
      </div>
    </b-collapse>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpenHelp: false,
    }
  },
}
</script>