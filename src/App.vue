<template>
  <div id="app">
    <router-view
      :buiedItem="buiedItem"
      :products="products"
      @slidChange="sliderStatus = $event"
      @add="additem($event)"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      products: null,
      sliderStatus: true,

      buiedItem: [],
    };
  },
  mounted: function() {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  methods: {
    additem(item) {
      this.buiedItem.push(item);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

a.text.left {
  text-decoration: none;
  color: green;
}
.btn.btn-outline-success {
  color: green;
  border: none;
}
.bb {
  margin: 55px;
}
</style>
