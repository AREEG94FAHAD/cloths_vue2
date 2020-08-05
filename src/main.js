import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import "bootstrap";
import "animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import Checkout from './components/Checkout';
import ProductList from './components/ProductList';

import {
  faShoppingCart,
  faDollarSign,
  
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign);

Vue.use(VueRouter);


Vue.config.productionTip = false


const router = new VueRouter({
  routes: [
 
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      props: true
    },
    {
      path: '/',
      name: 'ProductList',
      component: ProductList,
      props: true
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
