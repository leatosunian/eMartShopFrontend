import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ProductList from '../views/products/ProductList.vue'
import ProductDetail from '../views/products/ProductDetail.vue'
import Cart from '../views/products/Cart.vue'
import Address from '../views/account/Address.vue'
import Checkout from '../views/products/Checkout.vue'
import VerificationStatus from '../views/VerificationStatus.vue'
import PurchaseDetails from '../views/account/PurchaseDetails.vue'
import Orders from '../views/account/Orders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/products',
    name: 'products',
    component: ProductList
  },
  {
    path: '/product/:slug',
    name: 'product',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/verify/:status/:address?/:shipMethod?/:shippingCost?/',
    name: 'Success',
    component: VerificationStatus
  },
  {
    path: '/profile/address',
    name: 'address',
    component: Address
  },
  {
    path: '/profile/order/:id',
    name: 'order',
    component: PurchaseDetails
  },
  {
    path: '/profile/orders',
    name: 'orders',
    component: Orders
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
