<template>
  <div>
    <div class="px-[3.75rem] text-black">
      <div class="columns">
        <div class="column is-align-items-baseline">
          <b-navbar class="h-[80px]">
            <template #start>
              <b-navbar-item class="underline-hover" tag="router-link" to="/">
                <p>Trang chủ</p>
              </b-navbar-item>
              <b-navbar-item
                class="underline-hover"
                tag="router-link"
                to="/about"
              >
                <p>Giới thiệu</p>
              </b-navbar-item>
              <b-navbar-item
                class="underline-hover"
                tag="router-link"
                to="/brand"
              >
                <p>Thương hiệu</p>
              </b-navbar-item>
              <b-navbar-item
                class="underline-hover"
                tag="router-link"
                to="/product"
              >
                <p>Sản phẩm</p>
              </b-navbar-item>
              <b-navbar-item
                class="underline-hover"
                tag="router-link"
                to="/blog"
              >
                <p>Blog</p>
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