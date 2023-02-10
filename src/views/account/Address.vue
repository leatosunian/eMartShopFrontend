<template>
    <div>
            <!-- Hero Section-->
        <div class="notificationContainer" v-bind:class=" {actived: notif} ">
          <div style="display:flex; justify-content:center; height:70%; align-items:center; gap:12px">
            <img src="@/assets/correct.png" alt="" style="width:35px;">
            <span> Domicilio de envío añadido correctamente</span>
          </div>
        </div>
        <section class="hero productMargin">
        <div class="container">
          <!-- Breadcrumbs -->
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
            <li class="breadcrumb-item"><a >Perfil</a></li>
            <li class="breadcrumb-item active">Mis datos</li>
          </ol>
          <!-- Hero Content-->
          <div class="pb-2 text-center hero-content">
            <h1 class="hero-heading">Mi perfil</h1>
          </div>
        </div>
        </section>
        <section>
        <div class="container">
          <div class="mb-5 row">
            <div class="col-lg-8 col-xl-9">
            
                <div class="block">
                  <!-- Invoice Address-->
                  <div class="block-header">
                    <h6 class="mb-0 text-uppercase">Datos de envío</h6>
                  </div>
                  <div class="block-body">
                    <div class="row">
                      <div class="form-group col-md-6">
                        <label class="form-label" for="fullname_invoice">Nombre<span style="color: red; font-size:18px">*</span></label>
                        <input class="form-control" type="text" name="fullname_invoice" placeholder="John" v-model="address.name">
                      </div>
                      <div class="form-group col-md-6">
                        <label class="form-label" for="fullname_invoice">Apellido<span style="color: red; font-size:18px">*</span></label>
                        <input class="form-control" type="text" name="fullname_invoice" placeholder="Doe" v-model="address.surname" >
                      </div>
                      <div class="form-group col-md-6">
                        <label class="form-label" for="emailaddress_invoice">Email<span style="color: red; font-size:18px">*</span></label>
                        <input class="form-control" type="email" name="emailaddress_invoice" placeholder="johndoe@gmail.com" v-model="address.email">
                      </div>
                      <div class="form-group col-md-6">
                        <label class="form-label" for="phonenumber_invoice">Número de teléfono<span style="color: red; font-size:18px">*</span></label>
                        <input class="form-control" type="number" name="phonenumber_invoice" placeholder="Phone Number" v-model="address.phone">
                      </div>
                      <div class="form-group col-md-6">
                        <label class="form-label" for="city_invoice">Número de Documento (DNI)<span style="color: red; font-size:18px">*</span></label>
                        <input class="form-control" type="number" name="city_invoice" placeholder="41031429" v-model="address.dni">
                      </div>
                      <div class="form-group col-md-6">
                        <label class="form-label" for="state_invoice">Provincia<span style="color: red; font-size:18px">*</span></label>
                        <input class="form-control" type="text" name="state_invoice" placeholder="Buenos Aires" v-model="address.province">
                      </div>
                      <div class="form-group col-md-6">
                        <label class="form-label" for="state_invoice">Ciudad<span style="color: red; font-size:18px">*</span></label>
                        <input class="form-control" type="text" name="state_invoice" placeholder="Mar del Plata" v-model="address.city">
                      </div>
                      <div class="form-group col-md-6">
                        <label class="form-label" for="street_invoice">Domicilio<span style="color: red; font-size:18px">*</span></label>
                        <input class="form-control" type="text" name="street_invoice" placeholder="Juan B. Justo 3401" v-model="address.address">
                      </div>
                      <div class="form-group col-md-6">
                        <label class="form-label" for="street_invoice">Piso y N° de departamento</label>
                        <input class="form-control" type="text" name="street_invoice" placeholder="8C" v-model="address.floor">
                      </div>
                      <div class="form-group col-md-6">
                        <label class="form-label" for="zip_invoice">Código postal<span style="color: red; font-size:18px">*</span></label>
                        <input class="form-control" type="number" name="zip_invoice" placeholder="7600" v-model="address.code">
                      </div>
                      <span style="color: red; font-size:15px">Los campos con * son obligatorios</span>
                    </div>
                  </div>
                </div>
                
                 <!-- ERROR ALERT -->
                  <div class="alert" style="width:fit-content !important; height:fit-content !important; padding: 7px 14px; display: flex !important; justify-content:center !important; border-radius: 8px; margin: auto !important; margin-bottom:25px !important;"  v-if="!valid">
                    <small class="">{{ msm_error }} </small>
                  </div>

                <div class="mt-3 mb-4 text-center">
                 
                  <button class="btn btn-dark" type="button" v-on:click="validate()">Agregar domicilio</button>
                </div>

                <div class="block">
                  <div class="block-header">
                    <h6 class="mb-0 text-uppercase">Domicilios de entrega</h6>
                  </div>

                  <div v-if="addresses.length >= 1" class="addressesCont" v-for="item in addresses">
                    <div class="">
                      <label class="form-label" stlye="margin-bottom:0px!important;">Destinatario</label>
                      <div style="width:fit-content; height:fit-content; border:1px solid rgba(0, 0, 0, 0.18); padding:8px 20px; border-radius: 8px; font-size:14px;">{{item.surname}}, {{item.name}}</div>
                    </div>
                    <div class="">
                      <label class="form-label" stlye="margin-bottom:2px!important;">Domicilio </label>
                      <div style="width:fit-content; height:fit-content; border:1px solid rgba(0, 0, 0, 0.18); padding:8px 20px; border-radius: 8px; font-size:14px;">{{item.address}}</div>
                    </div>
                    <div class="">
                      <label class="form-label" stlye="margin-bottom:2px!important;">Ciudad</label>
                      <div style="width:fit-content; height:fit-content; border:1px solid rgba(0, 0, 0, 0.18); padding:8px 20px; border-radius: 8px; font-size:14px;">{{item.city}}</div>
                    </div>
                    
                      <a class="cart-remove" v-on:click="deleteAddress(item._id)" style="width:12px; height:12px; margin: 5px 10px; cursor:pointer">
                          <img src="/assets/icons/redclose.png" alt="" style="width:12px; height:12px;">
                      </a>
                    
                  </div>

                  <div class="card" v-if="addresses.length === 0">
                    <div class="card-body">
                      <div class="row">
                        <div class="text-center col-12">
                          <img src="../../../public/assets/icons/map.png" style="width:70px; height:70px; margin-bottom:20px" alt="">
                          <h3 style="font-size:24px;">Aún no tenés domicilios.</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
  
               
            </div>
            <div class="mb-5 col-xl-3 col-lg-4">
              <AccountSidebar/>
            </div>
          </div>

       
        </div>
        </section>
    </div>
</template>
<style>
.addressesCont{
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 12px;
  padding: 1.5rem 0;
  margin: 0 1.5rem ;
  border-bottom: 1px solid rgba(70, 70, 70, 0.329);
  width: fit-content
}
</style>
<script>

import axios from 'axios'
import AccountSidebar from '@/components/AccountSidebar.vue'

export default {
    name: 'Address',
    components: {
      AccountSidebar
    },
    data(){
      return {
        address: {},
        addresses: [],
        msm_error: '',
        valid: true,
        notif: false
      }
    },
    mounted(){
      window.scrollTo(0, 0)
    },
    beforeMount(){
      this.getAddress()
    },
    methods: {
      validate(){
        if(!this.address.name || !this.address.surname || !this.address.phone || !this.address.dni || !this.address.email || !this.address.province || !this.address.city || !this.address.address || !this.address.code){
          this.pass= true
          this.msm_error = '¡Todos los campos son obligatorios!'
          return this.valid= false
        } 
        this.valid= true
        this.saveAddress()
      },
      saveAddress(){
        const userId = JSON.parse(localStorage.getItem('data_shopuser'))[1]
        const token = localStorage.getItem('token_shopuser')
        axios.put(this.$url+'/profile/saveAddress/'+userId, this.address, {
            headers: {
              "Content-Type": 'application/json',
              "Authorization" : `Bearer ${token}`
            }
            }).then((response) => {
              const {data} = response
              if(data.msg){
                this.valid = false
                this.msm_error = data.msg
                return
              }
              this.notif = true
              setTimeout(() => {
                this.notif = false
              }, 4000);
              this.getAddress()

            }).catch( error => {
              console.log(error.response.data.msg)
            })
      },
      getAddress(){
        var loader = this.$loading.show({
          container: this.fullPage ? null : this.$refs.formContainer,
          canCancel: false,
          color: "orange",
          opacity: 1
        });
        const userId = JSON.parse(localStorage.getItem('data_shopuser'))[1]
        const token = localStorage.getItem('token_shopuser')
        axios.get(this.$url+'/profile/getAddress/'+userId, {
            headers: {
              "Content-Type": 'application/json',
              "Authorization" : `Bearer ${token}`
            }
            }).then((response) => {
              const {data} = response
              this.addresses = data
              loader.hide()

            }).catch( error => {
              console.log(error.response.data.msg)
              loader.hide()
            })
      },
      deleteAddress(id){
        const token = localStorage.getItem('token_shopuser')
        axios.delete(this.$url+'/profile/deleteAddress/'+id, {
            headers: {
              "Content-Type": 'application/json',
              "Authorization" : `Bearer ${token}`
            }
            }).then((response) => {
              const {data} = response
              this.getAddress()
              
            }).catch( error => {
              console.log(error.response.data.msg)
            })
      },
    }
}

</script>
