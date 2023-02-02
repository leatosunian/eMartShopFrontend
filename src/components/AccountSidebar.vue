<template>
    <div>
        <!-- Customer Sidebar-->
        
            <div class=" customer-sidebar card"> 
                <div class="customer-profile">
                    <a class="d-inline-block" href="#">
                        <img class="shadow img-fluid rounded-circle customer-image" src="../../public/assets/icons/default-profile.png" alt="">
                    </a>
                <h5>{{profile.name}}</h5>
                </div>
                <nav class="list-group customer-nav">
                    <a class="list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="customer-orders.html">
                        <span>
                            <svg class="svg-icon svg-icon-heavy me-2">
                                <use xlink:href="#paper-bag-1"> </use>
                            </svg>
                            Profile
                        </span>
                        <!-- <div class="px-3 badge rounded-pill bg-dark fw-normal">5</div> -->
                    </a>
                    <router-link class="list-group-item d-flex justify-content-between align-items-center text-decoration-none" to="/profile/orders">
                        <span>
                            <svg class="svg-icon svg-icon-heavy me-2">
                                <use xlink:href="#male-user-1"> </use>
                            </svg>
                            Mis pedidos
                        </span>
                    </router-link>
                    <router-link class="list-group-item d-flex justify-content-between align-items-center text-decoration-none" active-class="active" to="/profile/address">
                        <span>
                            <svg class="svg-icon svg-icon-heavy me-2">
                                <use xlink:href="#navigation-map-1"> </use>
                            </svg>
                            Domicilios de envío
                        </span>
                    </router-link>
                    <a v-on:click="logOut()" class="list-group-item d-flex justify-content-between align-items-center text-decoration-none" style="cursor:pointer;">
                        <span>
                            <svg class="svg-icon svg-icon-heavy me-2">
                                <use xlink:href="#exit-1"> </use>
                        </svg>
                            Cerrar sesión
                        </span>
                    </a>
                </nav>
            </div>
        
    </div>
</template>

<style>
.rounded-circle {
    border-radius: 0 !important;
}
.borderCard{
    border-radius: 8px;
    border: 1px solid rgba(88, 88, 88, 0.445);
}
.customer-profile {
    padding: 0 !important;
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'AccountSidebar',
  data(){
    return {
        profile: {}
    }
  },
  beforeMount(){
    this.getProfile()
  },
  methods: {
    getProfile(){
        const token = localStorage.getItem('token_shopuser')
        const getUser = JSON.parse(localStorage.getItem('data_shopuser'))
        const user = getUser[2]
        this.profile.name = getUser[0]
    },
    logOut(){
      localStorage.removeItem('token_shopuser')
      localStorage.removeItem('data_shopuser')
      if(this.$route.path !== '/'){
        this.$router.push({name: 'home'})
      }
      window.location.reload()
    },
  }
}
</script>
  
  