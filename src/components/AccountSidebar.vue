<template>
    <div>
        <!-- Customer Sidebar-->
        
            <div class="customer-sidebar borderCard" > 
                <div class="customer-profile" style="background:white!important; margin-bottom:17px;">
                        <img class="shadow img-fluid rounded-circle customer-image" src="@/assets/defaultprofile.png" alt="">
                <h5>{{profile.name}}</h5>
                <span style="color:gray">Cliente</span>
                </div>
                <nav class="list-group customer-nav">
                    <router-link class="list-group-item d-flex justify-content-between align-items-center text-decoration-none" active-class="active" to="/profile/address">
                        <span>
                            <svg class="svg-icon svg-icon-heavy me-2">
                                <use xlink:href="#navigation-map-1"> </use>
                            </svg>
                            Mi perfil
                        </span>
                    </router-link>
                    <router-link class="list-group-item d-flex justify-content-between align-items-center text-decoration-none" active-class="active" to="/profile/orders">
                        <span>
                            <svg class="svg-icon svg-icon-heavy me-2">
                                <use xlink:href="#male-user-1"> </use>
                            </svg>
                            Mis pedidos
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
.borderCard{
    border-radius: 8px;
    border: 1px solid rgb(214, 214, 214);
    padding-top: 30px !important;
    padding-bottom: 4px !important;
    margin-top: 0px;
}
.rounded-circle {
    border-radius: 0 !important;
}

.customer-profile {
    padding: 0 !important;
    
}
.customer-image{
    width: 140px;
    height: 135px;
    border-radius: 20% !important;
}

.customer-nav .list-group-item{
    border: none !important;
    border-top: 1px solid #e9ecef !important;
}

@media (max-width:991px) {
    .borderCard{
        margin-top: 50px;
    }
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
  
  