<template>
  <div>
    <!-- <div class="h-[531px] section">
      <iframe
        width="1920"
        height="1080"
        mute="1"
        autoplay="1"
        loop="1"
        controls="0"
        src="https://www.youtube.com/embed/oB6L2nIreaQ?rel=0&amp;loop=1&amp;playlist=oB6L2nIreaQ&amp;autoplay=1&amp;controls=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;wmode=transparent&amp;playsinline=1&amp;v=oB6L2nIreaQ&amp;disablekb=1&amp;enablejsapi=1"
        class="cover"
        style="height: 1041px; width: 1850px"
        title="XXIV  Video Web"
      ></iframe>

      <div
        class="position-cover"
        style="background-color: rgba(0, 0, 0, 0.53)"
      ></div>
    </div> -->
    <LaypoutNavbar
      style="border-bottom: 1px solid #000"
      class="pt-[37px] bg-white"
    />
    <Nuxt />
    <LaypoutFooter />
  </div>
</template>
<style scoped>
/* .containerr {
  position: relative;
  width: 100%;

  overflow: hidden;
  padding-top: 56.25%;
} */
/* .responsive-iframe {
  position: absolute;
  top: -152px;
  left: 0;
  bottom: -7px;
  right: 0;
  width: 100% !important;
  height: 100% !important;
  border: none;
} */
.position-cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.cover {
  max-width: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>