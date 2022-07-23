<template>
  <div>
    <div class="columns">
      <div class="column is-half">
        <div class="is-flex is-justify-content-center">
          <img
            class="m-[20px]"
            :src="product.image"
            alt=""
            width="600"
            height="600"
          />
        </div>
        <p class="is-size-3">mô tả</p>
        <p>{{ product.description }}</p>
      </div>
      <div class="column is-half">
        <p>
          {{ product.brand ? product.brand.name : ' ' }}
        </p>
        <p class="is-size-1">{{ product.title }}</p>
        <p class="my-[20px]">
          {{ changePrice }}
        </p>
        <div class="my-[30px]">
          <div>
            <div class="columns">
              <div class="column is-3"><p>Dung tích</p></div>
              <div class="column is-9">
                <b-field>
                  <b-select
                    v-model="capacities"
                    placeholder="Chọn một tùy chọn"
                  >
                    <option
                      v-for="option in product.capacities"
                      :key="option.id"
                      :value="option"
                    >
                      {{ option.name }}
                    </option>
                  </b-select>
                </b-field>
              </div>
            </div>
          </div>
          <div>
            <div class="columns">
              <div class="column is-3">
                <b-numberinput
                  v-model="quantity"
                  :controls="false"
                  type="number"
                  :min="0"
                  :max="capacities ? capacities.pivot.quantity : 0"
                />
              </div>
              <div class="column is-9">
                <b-button type="is-dark" expanded @click="addToCard"
                  >THÊM VÀO GIỎ HÀNG</b-button
                >
              </div>
            </div>
          </div>
        </div>

        <div class="mt-[10px]">
          <div class="columns">
            <p
              class="column is-2 font-bold is-size-4"
              style="cursor: pointer"
              @click="smell"
            >
              hương
            </p>
            <p
              class="column is-2 font-bold is-size-4"
              style="cursor: pointer"
              @click="feature"
            >
              đặc điểm
            </p>
            <p
              class="column is-3 font-bold is-size-4"
              style="cursor: pointer"
              @click="recommend"
            >
              khuyên dùng
            </p>
          </div>
          <div v-if="choose == 1">
            <div class="columns">
              <div class="column is-one-fifth font-bold"><p>tone hương</p></div>
              <div class="column is-four-fifths">
                <p v-for="item in product.main_scent" :key="item.id">
                  {{ item.name }}.
                </p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-fifth font-bold"><p>hương đầu</p></div>
              <div class="column is-four-fifths">
                <p v-for="item in product.top_scent" :key="item.id">
                  {{ item.name }}.
                </p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-fifth font-bold"><p>hương giữa</p></div>
              <div class="column is-four-fifths">
                <p v-for="item in product.middle_scent" :key="item.id">
                  {{ item.name }}.
                </p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-fifth font-bold">
                <p>hương cuối</p>
              </div>
              <div class="column is-four-fifths">
                <p v-for="item in product.last_scent" :key="item.id">
                  {{ item.name }}.
                </p>
              </div>
            </div>
          </div>
          <div v-if="choose == 2">
            <div class="columns">
              <div class="column is-one-fifth font-bold"><p>phát hành</p></div>
              <div class="column is-four-fifths">
                {{ product.published_at }}
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-fifth font-bold"><p>giới tính</p></div>
              <div class="column is-four-fifths">{{ sex }}</div>
            </div>
            <div class="columns">
              <div class="column is-one-fifth font-bold"><p>độ tuổi</p></div>
              <div class="column is-four-fifths">{{ product.age }}+</div>
            </div>
            <div class="columns">
              <div class="column is-one-fifth font-bold"><p>độ lưu mùi</p></div>
              <div class="column is-four-fifths">
                <b-progress
                  type="is-primary"
                  :value="product.time_smell"
                  max="24"
                  show-value
                ></b-progress>
              </div>
            </div>
          </div>
          <div v-if="choose == 3">
            <div>
              <div class="columns">
                <div class="column is-2 font-bold">mùa</div>
                <div class="column">
                  <div class="columns">
                    <div class="column is-one-fifth"><p>xuân</p></div>
                    <div class="column is-four-fifths">
                      <b-progress
                        size="is-small"
                        type="is-primary"
                        :value="product.spring"
                      ></b-progress>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-one-fifth"><p>hạ</p></div>
                    <div class="column is-four-fifths">
                      <b-progress
                        size="is-small"
                        type="is-primary"
                        :value="product.summer"
                      ></b-progress>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-one-fifth"><p>thu</p></div>
                    <div class="column is-four-fifths">
                      <b-progress
                        size="is-small"
                        type="is-primary"
                        :value="product.fall"
                      ></b-progress>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-one-fifth"><p>đông</p></div>
                    <div class="column is-four-fifths">
                      <b-progress
                        size="is-small"
                        type="is-primary"
                        :value="product.winter"
                      ></b-progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="columns">
                <div class="column is-2 font-bold">thời gian</div>
                <div class="column">
                  <div class="columns">
                    <div class="column is-one-fifth"><p>ngày</p></div>
                    <div class="column is-four-fifths">
                      <b-progress
                        size="is-small"
                        type="is-primary"
                        :value="product.day"
                      ></b-progress>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-one-fifth"><p>đêm</p></div>
                    <div class="column is-four-fifths">
                      <b-progress
                        size="is-small"
                        type="is-primary"
                        :value="product.night"
                      ></b-progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
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
  data() {
    return {
      choose: 1,
      capacities: null,
      notExists: true,
      quantity: null,
      listCard: localStorage.getItem('listCard')
        ? JSON.parse(localStorage.getItem('listCard'))
        : [],
    }
  },
  computed: {
    sex() {
      if (this.product.sex === 'Male') {
        return 'Nam'
      }
      if (this.product.sex === 'Female  ') {
        return 'Nữ'
      }
      return this.product.sex
    },
    changePrice() {
      if (this.capacities) {
        return Intl.NumberFormat('vi', {
          style: 'currency',
          currency: 'VND',
        }).format(this.capacities.pivot.price)
      } else {
        return Intl.NumberFormat('vi', {
          style: 'currency',
          currency: 'VND',
        }).format(this.product.price)
      }
    },
  },

  methods: {
    addToCard() {
      if (this.capacities) {
        if (this.quantity) {
          if (this.quantity > this.capacities.pivot.quantity) {
            this.$buefy.snackbar.open({
              duration: 5000,
              message: 'Bạn nhấp quá số lượng sản phẩm.',
              type: 'is-danger',
              position: 'is-bottom-right',
              queue: false,
            })
          } else {
            try {
              this.notExists = true
              this.listCard.forEach((element) => {
                if (
                  element.product.id === this.product.id &&
                  element.capacities.id === this.capacities.id
                ) {
                  element.quantity += this.quantity
                  this.notExists = false
                }
              })
              if (this.notExists) {
                this.listCard.push({
                  product: this.product,
                  capacities: this.capacities,
                  quantity: this.quantity,
                })
              }

              localStorage.setItem('listCard', JSON.stringify(this.listCard))
              // this.listCard = JSON.parse(localStorage.getItem('listCard'))
              this.$buefy.toast.open({
                message: `Thêm vào giỏ hàng thành công`,
                type: 'is-success',
                duration: 5000,
              })
            } catch (error) {
              this.$buefy.toast.open({
                message: `Thêm vào giỏ hàng không thành công`,
                type: 'is-danger',
                duration: 5000,
              })
            }
          }
        } else {
          this.$buefy.snackbar.open({
            duration: 5000,
            message: 'Bạn thiếu số lượng sản phẩm.',
            type: 'is-danger',
            position: 'is-bottom-right',
            queue: false,
          })
        }
      } else {
        this.$buefy.snackbar.open({
          duration: 5000,
          message: 'Bạn thiếu dung tích bình.',
          type: 'is-danger',
          position: 'is-bottom-right',
          queue: false,
        })
      }
    },
    smell() {
      this.choose = 1
    },
    feature() {
      this.choose = 2
    },
    recommend() {
      this.choose = 3
    },
  },
}
</script>