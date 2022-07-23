<template>
  <div class="py-[70px] mx-[40px] max-w-[1200px] mx-auto">
    <p class="is-size-1 mb-[20px]">Sản phẩm đã chọn</p>

    <div>
      <div v-if="listCard.length === 0">
        <div class="bg-[#FAFAFA] p-[15px] my-[20px]">
          <p class="font-thin">Chưa có sản phẩm nào trong giỏ hàng.</p>
        </div>
        <b-button to="/product" tag="router-link">
          QUAY TRỞ LẠI CỬA HÀNG
        </b-button>
      </div>
      <div v-else class="columns">
        <div class="column is-9">
          <div
            v-for="(card, key) in listCard"
            :key="key"
            class="columns"
            style="border-top: 1px solid #e5e5e5"
          >
            <div class="column is-3 w-[300px] h-[300px]">
              <img
                class="m-[20px]"
                :src="card.product ? card.product.image : ''"
                alt=""
                width="180"
                height="180"
              />
            </div>
            <div class="column is-5">
              <div
                class="pt-[40px] px-[12px] pb-[16px] font-semibold is-size-4"
              >
                <p>{{ card.product.title }} - {{ card.capacities.name }}</p>
                <p>
                  {{ changePrice(card.capacities.pivot.price) }}
                </p>
              </div>
            </div>
            <div class="column is-4">
              <b-field class="pt-[40px]">
                <b-numberinput
                  v-model="card.quantity"
                  type="number"
                  controls-rounded
                  :min="1"
                  :max="card.capacities.pivot.quantity"
                  @input="updateLocal"
                />
              </b-field>
              <div class="mr-[24px] flex justify-end font-bold">
                <button @click="deleteCard(card)">
                  <b-icon icon="close-thick" type="is-black"> </b-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="bg-[#FAFAFA] p-[20px]">
            <div class="mb-[20px]">
              <p class="is-size-5 text-center">Phiếu thanh toán</p>
            </div>
            <div class="mb-[20px]">
              <div class="flex justify-between py-[16px]">
                <p class="font-medium">Tạm tính</p>
                <p>
                  {{ changePrice(temporaryPrice) }}
                </p>
              </div>
              <div
                class="flex justify-between py-[16px]"
                style="border-top: 1px solid #e5e5e5"
              >
                <p class="font-medium">Tổng</p>
                <p>{{ changePrice(totalPrice) }}</p>
              </div>
            </div>
            <b-button
              class="py-[18px]"
              type="is-dark"
              expanded
              to="/checkout"
              tag="router-link"
              >TIẾN HÀNH THANH TOÁN</b-button
            >
          </div>
          <div>
            <CardShopHelp title="trợ giúp ?">
              <div>
                <p>
                  Nếu trong quá trình đặt hàng có bất kỳ thắc mắc nào, quý khách
                  vui lòng liên hệ theo Hotline:
                </p>
                <br />
                <p>+ Chi nhánh Hà Nội: 090 721 9889</p>
                <br />
                <p>+ Chi nhánh Sài Gòn: 093 194 8668</p>
              </div>
            </CardShopHelp>
            <CardShopHelp title="thông tin ship ?">
              <div>
                <p>
                  XXIV Store miễn phí ship với tất cả các đơn hàng toàn quốc.
                </p>
              </div>
            </CardShopHelp>
            <CardShopHelp title="đổi trả và hoàn tiền">
              <div class="uk-accordion-content">
                <p>Chính sách đổi trả sản phẩm:</p>
                <ul style="list-style-type: circle">
                  <li
                    class="mt-[15px] pb-[15px]"
                    style="border-bottom: 1px solid #e5e5e5"
                  >
                    XXIV Store hỗ trợ đổi trả sản phẩm trong vòng 3 ngày kể từ
                    khi nhận hàng.
                  </li>
                  <li
                    class="mt-[15px] pb-[15px]"
                    style="border-bottom: 1px solid #e5e5e5"
                  >
                    Với việc đổi sản phẩm, chỉ áp dụng với các sản phẩm còn
                    nguyên seal, tem. Chỉ áp dụng đổi sang các sản phẩm có giá
                    trị bằng hoặc cao hơn.
                  </li>
                  <li class="mt-[15px] pb-[15px]">
                    Với việc hoàn tiền, chỉ áp dụng trong trường hợp sản phẩm có
                    lỗi từ nhà sản xuất hoặc bể, vỡ trong quá trình vận chuyển.
                  </li>
                </ul>
              </div>
            </CardShopHelp>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listCard: localStorage.getItem('listCard')
        ? JSON.parse(localStorage.getItem('listCard'))
        : null,
      isOpenHelp: false,
    }
  },
  computed: {
    totalPrice() {
      return this.temporaryPrice
    },
    temporaryPrice() {
      return this.listCard
        ? this.listCard.reduce((total, value) => {
            return total + value.capacities.pivot.price * value.quantity
          }, 0)
        : 0
    },
  },
  watch: {},
  methods: {
    updateLocal() {
      localStorage.setItem('listCard', JSON.stringify(this.listCard))
    },
    changePrice(price) {
      return Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      }).format(price)
    },
    deleteCard(card) {
      this.listCard = this.listCard.filter((item) => item !== card)
      this.updateLocal()
    },
  },
}
</script>