<template>
  <transition name="fade">
    <div v-if="sliderStatus">
      <div>
        <input
          type="text"
          id="max"
          class="form-control mx-2 text-center"
          style="width:60px"
          v-model="max"
          @change="update()"
        />
        <input
          type="range"
          class="custom-range"
          min="0"
          max="200"
          v-model="max"
          @input="update()"
        />
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["sliderStatus"],
  data() {
    return {
      max: 99,
    };
  },
  methods: {
    update() {
      this.$emit("update", this.max);
    },
  },
};
</script>
