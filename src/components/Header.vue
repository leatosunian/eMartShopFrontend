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
            <router-link class="navbar-brand"  style="heigth:fit-content!important;" to="/">
              <img src="@/assets/emart0000.png" class="logoImg" alt="">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <img src="@/assets/menu.png" style="width: 20px; margin:auto" alt="">
            </button>
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
                              <li class="megamenu-list-item" v-for="subitem in item.subcategories">
                                <a class="megamenu-list-link" style="cursor:pointer;" v-on:click="redirectToSubcategory(subitem)"> {{ subitem.name }} </a>
                              </li>
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
                
                <div class="" style="display:flex;align-items:center; background-color:white; border-radius:25px;height: 30px;" data-bs-toggle="search">                  
                  <div class="" style="height: 30px; width:28px; display:flex;align-items:center; justify-content:center; padding-left:12px">
                    <img src="@/assets/search-interface-symbol.png" style="width:13px;" alt="">
                  </div>
                  <input v-on:keyup.enter="search()"  v-model="filter" class="form-control" type="search" placeholder="Buscar" aria-label="Search" style="border-radius:25px; border:none;height: 30px;font-size:13px;">
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
.logoImg{
  width: 105px;
  margin: auto 0px;
  margin-bottom: 0px;
}
.navbar {
  padding-left: 5.6rem !important;
  padding-right: 5.6rem !important;
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
  .navbar {
    padding-left: .5rem !important;
    padding-right: 0 !important;
  }
  .logoImg{
    width: 94px;
    margin-bottom: 2px;
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
    this.getCategories()
    const token = localStorage.getItem('token_shopuser')
    if(token === null){
      this.loggedIn = false
    } else{
      this.loggedIn = true
      const username = JSON.parse(localStorage.getItem('data_shopuser'))
      this.username = username[0];
    }
    this.getCart()
    this.created()
    
  },
  methods: {
    redirectToSubcategory(subitem){
      console.log(subitem.categoryName);
      console.log(subitem.name);
      this.$router.push({name: 'products', query:{ category: subitem.categoryName, subcategory: subitem.name } })
    },
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