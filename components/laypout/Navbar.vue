<template>
  <div>
    <div class="px-[3.75rem]">
      <div class="columns">
        <div class="column is-align-items-baseline">
          <b-navbar class="h-[80px]">
            <template #start>
              <b-navbar-item class="underline-hover">
                <nuxt-link to="/">Trang chủ </nuxt-link>
              </b-navbar-item>
              <b-navbar-item class="underline-hover">
                <nuxt-link to="/about">Giới thiệu</nuxt-link>
              </b-navbar-item>
              <b-navbar-item class="underline-hover">
                <nuxt-link to="/product">Sản phẩm</nuxt-link>
              </b-navbar-item>
              <b-navbar-item class="underline-hover">
                <nuxt-link to="/blog">Blog</nuxt-link>
              </b-navbar-item>
            </template>
          </b-navbar>
        </div>
        <div class="column is-flex is-justify-content-center">
          <nuxt-link to="/">
            <img
              class="w-[80px] h-[80px] pt-[5px] pb-[5px]"
              src="https://xxivstore.com/wp-content/themes/yootheme/cache/XXIV-Logo-Web-da8bec8c.webp"
              alt="XXIV"
            />
          </nuxt-link>
        </div>
        <div class="column">
          <b-navbar class="h-[5rem]">
            <template #end>
              <b-navbar-item href="">
                <b-icon icon="magnify" />
              </b-navbar-item>
              <b-navbar-item href="">
                <b-icon icon="account" />
              </b-navbar-item>
              <b-navbar-item href="">
                <b-icon icon="cart-minus" />
              </b-navbar-item>
            </template>
          </b-navbar>
        </div>
      </div>
    </div>
  </div>
</template
          ></b-navbar>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
</style>