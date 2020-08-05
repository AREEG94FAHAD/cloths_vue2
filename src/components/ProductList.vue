<template>
  <div>
    <Navbar  @slidChange="sliderStatus=$event"/>
    <PriceSlider :sliderStatus="sliderStatus" @update="maximum = $event" />
    <div class="row  justify-content-center m-4">
      <div
        v-for="(item, index) in selectedProducts"
        :key="item.id"
        :data-index="index"
        class="col-lg-3 col-md-4 col-sm-6 colmargin"
      >
        <div class="card">
          <img class="imageim" :src="item.image" height="220" />

          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text m-2">{{ item.description }}</p>
          </div>
          <div>
            <h3>
              <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
              {{ item.price }}
            </h3>
          </div>
          <button
            type="button"
            class="align-self-end btn btn-outline-success m-4"
            @click="addToCart(item)"
          >
            <font-awesome-icon icon="shopping-cart"></font-awesome-icon> Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PriceSlider from "./PriceSlider";
import Navbar from "./Navbar";
// import PriceSlider from "./PriceSlider"
export default {
  props: ["products"],
  components: {
    FontAwesomeIcon,
    Navbar,
    PriceSlider,
  },
  data() {
    return {
      productss: this.products,
      maximum: 90,
      sliderStatus:true
    };
  },

  computed: {
    selectedProducts() {
      var selectedProducts = [];

      for (var i in this.products) {
        if (this.products[i].price <= Number(this.maximum)) {
          selectedProducts.push(this.products[i]);
        }
      }
      return selectedProducts;
    },
  },

  methods: {
    addToCart(item) {
      this.$emit("add", item);
    },
    beforeEnter: function(el) {
      el.className = "d-none";
    },
    enter: function(el) {
      var delay = el.dataset.index * 100;
      setTimeout(function() {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave: function(el) {
      var delay = el.dataset.index * 100;
      setTimeout(function() {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    },
  },
};
</script>

<style scoped>
.card {
  margin: auto;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(77, 10, 90, 0.3);
  transition: 0.8s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.colmargin {
  margin-bottom: 10px;
}
.imageim {
  align-items: center;
}
</style>
