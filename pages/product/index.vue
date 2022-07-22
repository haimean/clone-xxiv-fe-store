<template>
  <div>
    <div class="pt-[70px]">
      <p class="is-size-1 text-center mb-[20px]">Shop</p>
      <div class="py-[10px] bg-[#FAFAFA]">
        <div class="mx-[40px] max-w-[1680px] mx-auto">
          <div class="mx-[40px]">
            <b-breadcrumb align="is-left" size="is-small">
              <b-breadcrumb-item tag="router-link" to="/"
                >Trang chủ</b-breadcrumb-item
              >
              <b-breadcrumb-item tag="router-link" to="/product" active
                >Shop</b-breadcrumb-item
              >
            </b-breadcrumb>
          </div>
        </div>
      </div>
    </div>
    <ProductList />
  </div>
</template>