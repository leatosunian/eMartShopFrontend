<template>
    <header class="header header-absolute" >
        <!-- Top Bar-->
        <!-- <div class="top-bar" style="height: 44px !important;">
          <div class="container-fluid"  style="height: 44px !important;">
            <div class="row d-flex align-items-center" style="height: 44px !important;">
              <div class="col-sm-7 d-none d-sm-block align-items-center" style="height: 44px !important;">
                <ul class="mb-0 list-inline topbar-text align-items-center" style="height: 44px !important;" >
                  <li class="" >
                    <img src="/assets/icons/telephone-bl.png" style="width: 16px;">
                    020-800-456-747
                  </li>
                  <li class="px-3 list-inline-item">Envios gratis desde $300</li>
                </ul>
              </div>
              <div class="col-sm-5 d-flex justify-content-end" >
                <!- Language Dropdown->
                <div class="px-3 dropdown border-end"><a class="dropdown-toggle topbar-link" id="langsDropdown" href="#" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false"><img class="topbar-flag" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/flag/gb.svg" alt="english">English</a>
                  <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated" aria-labelledby="langsDropdown"><a class="text-sm dropdown-item" href="#"><img class="topbar-flag" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/flag/de.svg" alt="german">German</a><a class="text-sm dropdown-item" href="#"> <img class="topbar-flag" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/flag/fr.svg" alt="french">French</a></div>
                </div>
                <!- Currency Dropdown->
                <div class="dropdown ps-3 ms-0"><a class="dropdown-toggle topbar-link" id="currencyDropdown" href="#" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false">USD</a>
                  <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated" aria-labelledby="currencyDropdown">
                    <a class="text-sm dropdown-item" href="#"> 
                      EUR
                    </a>
                    <a class="text-sm dropdown-item" href="#">
                      GBP
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <!-- Top Bar End-->
        <!-- Navbar-->
        <nav class="navbar navbar-expand-lg navbar-sticky navbar-airy navbar-dark bg-fixed-white navbar-fixed-light" style="background:#121212" >
          <div class="container-fluid">  
            <!-- Navbar Header  -->
            <a class="navbar-brand"  style="color:white !important" href="index.html">
              <svg class="navbar-brand-svg" viewBox="0 0 65 16" width="85" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="navbar-brand-svg-text" d="M5.72266 18.1562C4.88281 18.1562 4.08529 18.0033 3.33008 17.6973C2.58138 17.3913 1.94661 16.9355 1.42578 16.3301C0.911458 15.7181 0.582682 14.9759 0.439453 14.1035L2.90039 13.4785C2.98503 14.2988 3.28776 14.9173 3.80859 15.334C4.33594 15.7507 4.98698 15.959 5.76172 15.959C6.23698 15.959 6.64714 15.8841 6.99219 15.7344C7.33724 15.5781 7.59766 15.3665 7.77344 15.0996C7.94922 14.8327 8.03711 14.5332 8.03711 14.2012C8.03711 13.804 7.91341 13.4655 7.66602 13.1855C7.42513 12.9056 7.1224 12.6745 6.75781 12.4922C6.39323 12.3099 5.89193 12.0918 5.25391 11.8379C4.42057 11.5059 3.74674 11.1999 3.23242 10.9199C2.7181 10.6335 2.27539 10.2363 1.9043 9.72852C1.53971 9.2207 1.35742 8.57943 1.35742 7.80469C1.35742 7.01693 1.54948 6.33659 1.93359 5.76367C2.32422 5.18424 2.84505 4.74479 3.49609 4.44531C4.15365 4.14583 4.8763 3.99609 5.66406 3.99609C6.54948 3.99609 7.35677 4.19792 8.08594 4.60156C8.8151 4.9987 9.40755 5.60417 9.86328 6.41797L7.80273 7.67773C7.56185 7.20898 7.24609 6.84766 6.85547 6.59375C6.46484 6.33333 6.03841 6.20312 5.57617 6.20312C5.25065 6.20312 4.95443 6.26497 4.6875 6.38867C4.42708 6.51237 4.21875 6.68815 4.0625 6.91602C3.91276 7.13737 3.83789 7.39128 3.83789 7.67773C3.83789 8.0293 3.95182 8.32878 4.17969 8.57617C4.40755 8.82357 4.69401 9.0319 5.03906 9.20117C5.39062 9.37044 5.86914 9.57227 6.47461 9.80664C7.33398 10.1387 8.0306 10.4512 8.56445 10.7441C9.09831 11.0371 9.55729 11.4473 9.94141 11.9746C10.3255 12.502 10.5176 13.1693 10.5176 13.9766C10.5176 14.8229 10.3027 15.5618 9.87305 16.1934C9.44987 16.8249 8.8737 17.3099 8.14453 17.6484C7.41536 17.987 6.60807 18.1562 5.72266 18.1562ZM16.8906 4.20117H26.0703V6.47656H19.3711V9.96289H25.6113V12.2383H19.3711V15.6562H26.0703V18H16.8906V4.20117ZM33.0586 4.20117H35.5391V15.6562H41.4375V18H33.0586V4.20117ZM47.4492 4.20117H49.9297V15.6562H55.8281V18H47.4492V4.20117Z" transform="translate(0 -3)" fill="#212529"/>
                <path class="text-primary" d="M62.0254 15.4219H64.418V18H62.0254V15.4219Z" transform="translate(0 -3)" fill="#9A6EE2"/>
              </svg>
            </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <!-- Navbar Collapse -->
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="mx-auto navbar-nav">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Inicio</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/products" class="nav-link">Productos</router-link>
                </li>

                <!-- Megamenu-->
                <li class="nav-item dropdown position-static"><a class="nav-link dropdown-toggle " href="#" data-bs-toggle="dropdown">Categorias</a>
                  <div class="dropdown-menu dropdown-menu-animated megamenu " style="left: auto !important;">
                    <div class="row" >
                      <div class="col-lg-12">
                        <div class="p-3 row ">
                       
                          <div class="col-auto" v-for="item in categories">
                            <!-- Megamenu list-->
                            <h6 class="text-uppercase" style="margin-bottom:12px;">{{item.category.name}}</h6>
                            <ul class="megamenu-list list-unstyled">
                              <li class="megamenu-list-item" v-for="subitem in item.subcategories"><a class="megamenu-list-link" href="about.html"> {{ subitem.name }} </a></li>
                              
                            </ul>
                            <!-- Megamenu list-->
                          </div>

                        </div>
                        
                      </div>
                  
                    </div>
                  </div>
                </li>

                <li class="nav-item"><a class="nav-link" href="">Contacto</a>
                </li>
              </ul>

              <!-- Search Button Desktop-->
              <div class="mt-1 mb-2 d-flex align-items-center justify-content-center justify-content-lg-end my-lg-0 desktop" style="margin-right: 10px;">
                
                <div class="" style="display:flex;align-items:center; background-color:white; border-radius:25px;height: 32px" data-bs-toggle="search">                  
                  <div class="" style="height: 32px; width:28px; display:flex;align-items:center; justify-content:center; padding-left:15px">
                    <img src="@/assets/search-interface-symbol.png" style="width:16px;" alt="">
                  </div>
                  <input v-on:keyup.enter="search()"  v-model="filter" class="form-control" type="search" placeholder="Buscar" aria-label="Search" style="border-radius:25px; border:none;height: 32px">
                </div>
              </div>

              <div class="mt-1 mb-2 d-flex align-items-center justify-content-between justify-content-lg-end my-lg-0">
                  
                  <!-- User Not Logged - link to login page-->
                  <div class="nav-item ">
                      <router-link v-if="!loggedIn" class="navbar-icon-link desktop" to="/login">
                        <img src="/assets/icons/user.png" style="width: 25px;" />
                        <span class="text-sm ms-2 ms-lg-0 text-uppercase fw-bold d-none d-sm-inline d-lg-none">&nbsp; Iniciar Sesión</span>
                      </router-link>
                      <router-link v-if="!loggedIn" class="navbar-icon-link mobile" to="/login">
                        <img src="/assets/icons/user.png" style="width: 25px;" />
                        <span class="text-sm ms-2 ms-lg-0 text-uppercase fw-bold d-none d-sm-inline d-lg-none">&nbsp; Iniciar Sesión</span>
                      </router-link>

                      <router-link to="/profile/orders" v-if="loggedIn" class="navbar-icon-link mobile" >
                        <img src="/assets/icons/user.png" style="width: 25px;" />
                        <span class="text-sm ms-2 ms-lg-0 text-uppercase fw-bold d-none d-sm-inline d-lg-none">&nbsp; Mi perfil</span>
                      </router-link>
                      

                      <a v-if="loggedIn" class="navbar-icon-link dropdown desktop" >
                        <img src="/assets/icons/user.png" style="width: 25px;" />
                        <span class="text-sm ms-2 ms-lg-0 text-uppercase fw-bold d-none d-sm-inline dropdown-toggle" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&nbsp; {{username.split(' ')[0]}}</span>
                        <div class="dropdown-menu dropdown-menu-animated" aria-labelledby="categoryDropdownMenuLink" style="left:-20px!important; bottom:45px!important; ">
                          <a class="dropdown-item" style="background-color:white;" href="">Mi perfil</a>
                          <router-link class="dropdown-item" style="background-color:white;" to="/profile/orders" >Mis pedidos</router-link>
                          <a class="dropdown-item" style="background-color:white;" v-on:click="logOut()">Cerrar Sesión</a>
                        </div>
                      </a>
                  </div>
                  <!-- search mobile -->
                  <div class=" mobile" style="display:flex;align-items:center; background-color:white; border-radius:25px;height: 32px" data-bs-toggle="search">                  
                    <div class="" style="height: 32px; width:28px; display:flex;align-items:center; justify-content:center; padding-left:15px">
                      <img src="@/assets/search-interface-symbol.png" style="width:16px;" alt="">
                    </div>
                    <input v-on:keyup.enter="search()" v-model="filter" class="form-control" type="search" placeholder="Buscar" aria-label="Search" style="border-radius:25px; border:none;height: 32px">
                  </div>
                  <!-- Cart Dropdown-->
                  <div class="nav-item dropdown " >
                      <router-link to="/cart" class="navbar-icon-link d-lg-none" >
                          <img src="/assets/icons/cart.png" style="width: 25px;" />
                          <span class="text-sm ms-2 ms-lg-0 text-uppercase fw-bold d-none d-sm-inline d-lg-none">Carrito</span>
                      </router-link>
                      <div class="d-none d-lg-block">
                          <a class="navbar-icon-link" id="cartdetails" href="cart.html" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img src="/assets/icons/cart.png" style="width: 25px;" />
                              <div class="navbar-icon-link-badge">{{cart.length}}</div>
                          </a>
                          <div class="p-4 dropdown-menu dropdown-menu-animated dropdown-menu-end" style="height:fit-content; border:1px solid rgba(0, 0, 0, 0.1)" aria-labelledby="cartdetails">
                              <div class="navbar-cart-product-wrapper" style="max-height:370px !important; ">
                                  <!-- cart item-->
                                  <div class="navbar-cart-product" v-for="item in cart">
                                      <div class="d-flex align-items-center">
                                          <a href="detail.html">
                                            <img class="img-fluid navbar-cart-product-image" :src="$url+'/getImage/'+item.product.image" alt="..." /></a>
                                          <div class="w-100">
                                              <a class="navbar-cart-product-close" v-on:click="deleteItem(item._id)">
                                                <img src="/assets/icons/close.png" style="width: 13px; height:13px;" />
                                              </a>
                                              <div class="ps-3"><router-link :to="/product/+item.product.slug" class="navbar-cart-product-link " style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap;" >{{item.product.name}}</router-link><small class="d-block text-muted">Cantidad: {{ item.amountOfProducts }} </small><small class="d-block text-muted">{{ item.product.str_variant }}: {{ item.variant.variant }} </small><strong class="text-sm d-block">{{ priceConverter(item.product.price*item.amountOfProducts ) }} </strong></div>
                                          </div>
                                      </div>
                                  </div>
                                
                              </div>
                              <!-- total price-->
                              <div class="navbar-cart-total"><span class="text-uppercase text-muted">Total</span><strong class="text-uppercase">{{ priceConverter(total) }} </strong></div>
                              <!-- buttons-->
                              <div class="d-flex justify-content-between">
                                  <div style="display:flex; flex-direction: column; align-items:center; justify-content:center; height">

                                    <router-link class="btn btn-link text-dark" to="/cart">Ver carrito</router-link>
                                  </div>
                                    
                                  <router-link class="btn btn-outline-dark" to="/checkout">Comprar</router-link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>


            </div>
          </div>
        </nav>
        <!-- /Navbar -->
       
    </header>
</template>
  
<style>

.mobile {
  display: none !important;
}

.desktop {
  display: flex !important;
}

.navbar.fixed-top.bg-fixed-white {
  background-color: #121212 !important ;
}

.navbar-icon-link-badge {
  position: absolute;
  top: -5px;
  right: -8px;
  width: 20px;
  height: 20px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: #343a40;
  font-size: 0.7rem;
  font-weight: 800;
  line-height: 20px;
}

.navbar-light .navbar-icon-link, .navbar-fixed-light.fixed-top .navbar-icon-link, .navbar-hover-light:hover .navbar-icon-link {
  color: rgba(255, 255, 255, 1);
}

.navbar-light .navbar-icon-link-badge, .navbar-fixed-light.fixed-top .navbar-icon-link-badge, .navbar-hover-light:hover .navbar-icon-link-badge {
  color: #000;
  background: #ffffff;
}

.navbar-light .navbar-nav .nav-link, .navbar-hover-light:hover .navbar-nav .nav-link, .navbar-fixed-light.fixed-top .navbar-nav .nav-link {
  color:  rgba(255, 255, 255, 1);
}

.navbar-light .navbar-nav .show>.nav-link, .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active, .navbar-hover-light:hover .navbar-nav .show>.nav-link, .navbar-hover-light:hover .navbar-nav .active>.nav-link, .navbar-hover-light:hover .navbar-nav .nav-link.show, .navbar-hover-light:hover .navbar-nav .nav-link.active, .navbar-fixed-light.fixed-top .navbar-nav .show>.nav-link, .navbar-fixed-light.fixed-top .navbar-nav .active>.nav-link, .navbar-fixed-light.fixed-top .navbar-nav .nav-link.show, .navbar-fixed-light.fixed-top .navbar-nav .nav-link.active{
  color: white;;
}

.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus, .navbar-hover-light:hover .navbar-nav .nav-link:hover, .navbar-hover-light:hover .navbar-nav .nav-link:focus, .navbar-fixed-light.fixed-top .navbar-nav .nav-link:hover, .navbar-fixed-light.fixed-top .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 1)
}

.navbar-dark .dropdown-toggle::after, .navbar-hover-dark:hover .dropdown-toggle::after, .navbar-fixed-dark.fixed-top .dropdown-toggle::after {
  background: right center url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EAngle Down%3C/title%3E%3Cdesc%3EA line styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' fill='none' stroke='rgba(255,255,255,0.9)' stroke-miterlimit='10' stroke-width='5' d='M20 26l11.994 14L44 26' stroke-linejoin='round' stroke-linecap='round'%3E%3C/path%3E%3C/svg%3E") no-repeat !important;
}

.megamenu {
  min-width: 300px !important;
  width: fit-content !important;
  padding: 10px 10px !important;
}
@media (max-width:991px) {
  .mobile {
    display: flex !important;
  }
  .desktop {
    display: none !important;
  }
}
@media (max-width:768px) {
  .megamenu {
    min-width: 400px !important;
  }
}
</style>

<script>
import axios from 'axios'
import currencyFormatter from 'currency-formatter'
import { Result } from 'postcss'

export default {
  name: 'Header',
  data(){
    return{
      loggedIn: false,
      username: '',
      cart: [],
      total: 0,
      categories: [],
      filter: ''
    }
  },
  beforeMount(){
    const token = localStorage.getItem('token_shopuser')
    if(token === null){
      this.loggedIn = false
    } else{
      this.loggedIn = true
      const username = JSON.parse(localStorage.getItem('data_shopuser'))
      this.username = username[0];
    }
    this.getCart()
    this.created(),
    this.getCategories()
  },
  methods: {
    search(){
      this.$router.push({
        name: 'products',
        query: { filter: this.filter}
      })
    }, 
    getCategories(){
      axios.get(this.$url+'/public/getallcategories', {
        headers: {
          "Content-Type": 'application/json',
        }
        }).then((response) => {
          const {data} = response
          this.categories = data
          console.log(this.categories);

        }).catch( error => {
          console.log(error.response.data.msg)
          this.msm_error = error.response.data.msg
            
        })
    },

    getCart(){
        const token = localStorage.getItem('token_shopuser')
        const getUser = JSON.parse(localStorage.getItem('data_shopuser'))
        const user = getUser[1]
        console.log(user);
        axios.get(this.$url+'/cart/get/'+user, {
        headers: {
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${token}`
        }
        }).then((response) => {
          const {data} = response
          this.total = 0
          this.cart = data
          console.log(this.cart);

          for(const item of data){
            const subtotal = item.product.price * item.amountOfProducts
            this.total = this.total + subtotal
          }

        }).catch( error => {
          console.log(error.response.data.msg)
          this.msm_error = error.response.data.msg
        })
        
    },
    priceConverter(price){
      return currencyFormatter.format(price, { code: 'ARS' });
    },
    logOut(){
      localStorage.removeItem('token_shopuser')
      localStorage.removeItem('data_shopuser')
      if(this.$route.path !== '/'){
        this.$router.push({name: 'home'})
      }
      window.location.reload()
    },
    
    created(){
      this.sockets.subscribe('listenCart', (data) => {
        this.getCart()
      });
    },
    deleteItem(id){
            const token = localStorage.getItem('token_shopuser')
            axios.delete(this.$url+'/cart/delete/'+id, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            }).then((response) => {
                const {data} = response
                console.log(data);
                this.getCart()
                this.$socket.emit('sendCart', true)
            }).catch( error => {
            console.log(error.response.data.msg)
            this.msm_error = error.response.data.msg
            })  
        }
  }
}
</script>