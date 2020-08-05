<template>
  <div>
    <h1>Checkout</h1>

    <table class="table table-hover" v-if="count.length">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" class="text-left">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in count" :key="item.id">
          
          <th v-if="item.name">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button @click="icreaseItem(item.name)" class="btn btn-info">
                +
              </button>
              <button
                @click="deleteItem(item.name)"
                class="btn btn-outline-info"
              >
                -
              </button>
            </div>
          </th>
          <th v-if="item.name" scope="row" class="text-left">
            {{ item.name }}
          </th>

          <td v-if="item.count" class="text-center">{{ item.count }}</td>
          <td v-if="item.price" class="text-right">{{ Number(item.price) }}</td>
          <td v-if="item.subtotal" class="text-right">
            {{ Number(item.subtotal) }}
          </td>
        </tr>
      </tbody>
      <caption class="text-right h3">
        <div class="d-block text-success font-weight-ligh">
          Total: <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
          {{ count[count.length - 1].sumTotal }}
        </div>
      </caption>
    </table>
    <router-link class="btn btn-sm btn-outline-info text-dark" to="/"
      >Keep Shopping</router-link
    >
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      itemname: "",
      itempricetotal: 0,
    };
  },
  props: ["buiedItem"],

  methods: {
    icreaseItem(item) {
      for (var i in this.buiedItem) {
        if (item == this.buiedItem[i].name) {
          this.buiedItem.push(this.buiedItem[i]);
          break;
        }
      }
    },
    deleteItem(item) {
      for (var i in this.buiedItem) {
        if (item == this.buiedItem[i].name) {
          console.log(i)
          this.buiedItem.splice(i, 1);
          break;
        }
      }
    },
  },

  computed: {
    items() {
      let unique = [...new Set(this.buiedItem)];
      return unique;
    },

    count() {
      var object_without_repait = [];
      var count = 0;
      var sumTotal = 0;
      let unique = [...new Set(this.buiedItem)];
      for (var i in unique) {
        for (var j in this.buiedItem) {
          if (unique[i].id == this.buiedItem[j].id) {
            count = count + 1;
          }
        }
        object_without_repait.push({
          name: unique[i].name,
          price: unique[i].price,
          count: count,
          subtotal: unique[i].price * count,
        });
        sumTotal = sumTotal + Number(count * unique[i].price);
        count = 0;
      }
      object_without_repait.push({ sumTotal: Number(sumTotal) });

      return object_without_repait;
    },

    Total() {
      var totalPrice = 0;
      for (var i in this.buiedItem) {
        totalPrice = totalPrice + Number(this.buiedItem[i].price);
      }
      return totalPrice;
    },
  },
};
</script>

<style scoped></style>
