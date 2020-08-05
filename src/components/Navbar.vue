<template>
  <nav class="navbar navbar-light  justify-content-between">
    <a href="/" class="navbar-brand"
      ><router-link class="btn btn-secondary" to="/">Home</router-link></a
    >
    <form class="form-inline">
      <button class="btn btn-outline-success" @click="slidChanged">
        $
      </button>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        <router-link class="text left" to="checkout">
          Checkout
        </router-link>
      </button>
    </form>
  </nav>
</template>

<script>
export default {
  props: ["sliderStatus"],
  data() {
    return {
      max: 90,
      o: true,
    };
  },
  methods: {
    slidChanged() {
      this.o = !this.o;
      this.$emit("slidChange", this.o);
    },
  },
};
</script>
