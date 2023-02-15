<template>
    <div style="margin-bottom:150px; " >
        <div class="notificationContainer" v-bind:class=" {actived: added} ">
          <div style="display:flex; justify-content:center; height:70%; align-items:center; gap:12px">
            <img src="@/assets/correct.png" alt="" style="width:35px;">
            <span>{{msg}}</span>
          </div>
        </div>
        <!-- Hero Section-->
        <section class="hero loginMargin">
          <div class="container">
            <!-- Hero Content-->
            <div class="pb-5 text-center hero-content">
              <h1 class="mb-0 hero-heading categorySize">Iniciá Sesión</h1>
            </div>
          </div>
        </section>
        <!-- customer login-->
        <section>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="block">
                <div class="block-header">
                  <h5 class="mb-0 text-uppercase">Soy cliente</h5>
                </div>
                <div class="block-body">
                  <p class="lead">Ya tenés una cuenta?</p>
                  <p class="text-muted">¡Iniciá sesión y hacenos tu pedido!</p>
                  <hr>
                  <form >
                    <div class="mb-4">
                      <label class="form-label" for="email1">Email</label>
                      <input class="form-control" id="email1" type="text" style="border-radius: 8px;" v-model="loginClient.email" >
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="password1">Contraseña</label>
                      <input class="form-control" id="password1" type="password" style="border-radius: 8px;" v-model="loginClient.password">
                    </div>

                    <template v-if="loading">
                      <div>
                          <div class="row">
                              <div class="text-center col-12">
                                  <div class="mt-2 mb-4 spinner-border" role="status">
                                  <span class="visually-hidden">Cargando...</span>
                                  </div>
                              </div>
                          </div> 
                      </div>
                    </template>
            
                    <!-- ERROR ALERT -->
                    <div class="alert" style="border-radius: 10px;" v-if="!validLogin">
                      <small class="">{{ msm_error }} </small>
                    </div>

                    <template v-if="!loading">
                      <div class="mb-4 text-center">
                        <button class="buttonLogin"  type="button" v-on:click="login()" >Iniciar sesión</button>
                      </div>
                    </template>
                    
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="block">
                <div class="block-header">
                  <h5 class="mb-0 text-uppercase">Crear cuenta</h5>
                </div>
                <div class="block-body"> 
                  <p class="lead">Todavia no estas registrado?</p>
                  <p class="text-muted">¡Registrate para disfrutar de nuestros descuentos a clientes y realizar tus compras!</p>
                  <p class="text-muted">Si estas teniendo alguna dificultad en el registro no dudes en <a href="contact.html">contactarnos</a> para ayudarte</p>
                  <hr>
                  <form action="customer-orders.html" method="get">
                    <div class="mb-4">
                      <label class="form-label" for="name">Nombre</label>
                      <input class="form-control" id="name" type="text" style="border-radius: 8px;" v-model="newClient.name">
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="email">Email</label>
                      <input class="form-control" id="email" type="text" style="border-radius: 8px;" v-model="newClient.email">
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="password">Contraseña</label>
                      <input class="form-control" type="password" style="border-radius: 8px;" v-model="newClient.password">
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="password">Confirmar contraseña</label>
                      <input class="form-control" type="password" style="border-radius: 8px;" v-model="newClient.confPassword">
                    </div>

                    <template v-if="loading_">
                      <div>
                          <div class="row">
                              <div class="text-center col-12">
                                  <div class="mt-2 mb-4 spinner-border" role="status">
                                  <span class="visually-hidden">Cargando...</span>
                                  </div>
                              </div>
                          </div> 
                      </div>
                    </template>

                    <!-- ERROR ALERT -->
                    <div class="alert" style="border-radius:8px;"  v-if="!valid">
                      <small class="">{{ msm_error }} </small>
                    </div>

                    <template v-if="!loading_">
                      <div class="mb-4 text-center" >
                        <button class="buttonLogin" type="button" v-on:click="validateReg()">Crear cuenta</button>
                      </div>
                    </template>
                    

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Login',
    data(){
      return {
        newClient: {},
        loginClient: {
          email: '',
          password: ''
        },
        valid: true,
        validLogin: true,
        msm_error: '',
        loading: false,
        loading_: false,
        added: false,
        msg: ''
      }
    },
    methods: {
      validateReg(){
        if(!this.newClient.name || !this.newClient.email || !this.newClient.password || !this.newClient.confPassword){
          this.pass= true
          this.msm_error = '¡Todos los campos son obligatorios!'
          this.valid= false
          setTimeout(() => {
            this.valid = true
          }, 3000);
          return 
           
        } else if(this.newClient.name.split(' ').length != 2) {
          this.msm_error = 'Ingresá tu nombre y apellido'
          this.valid= false 
          this.pass= false
          setTimeout(() => {
            this.valid = true
          }, 3000);
          return 
        }else if(this.newClient.password !== this.newClient.confPassword ){
          this.msm_error = 'Las contraseñas deben ser iguales.'
          this.valid= false 
          this.pass= false
          setTimeout(() => {
            this.valid = true
          }, 3000);
          return 
        }
        this.valid= true
        this.pass= true
        axios.post(this.$url+'/register', this.newClient, {
            headers: {
              "Content-Type": 'application/json',
            }
            }).then((response) => {
              const {data} = response
              this.msg = data.msg
              this.valid= true
              this.added = true
              setTimeout(() => {
                this.added = false
              }, 4000);
            }).catch( error => {
              this.msm_error = error.response.data.msg
              this.valid= false 
            })
      },

      login(){
        if(!this.loginClient.email || !this.loginClient.password ){
          this.pass= true
          this.msm_error = '¡Todos los campos son obligatorios!'
          this.validLogin= false
          setTimeout(() => {
            this.validLogin = true
          }, 3000);
          return 
        } 
        this.validLogin= true
        this.loading = true
        axios.post(this.$url+'/loginClient', this.loginClient, {
            headers: {
              "Content-Type": 'application/json',
            }
            }).then((response) => {
              const {data} = response
              localStorage.setItem('token_shopuser', data.token)
              localStorage.setItem('data_shopuser', JSON.stringify([data.name, data._id, data.email]))
              
              this.validLogin = true
              this.$router.push({name: 'home'})
              this.loading = false
              window.location.reload()
            }).catch( error => {
              console.log(error.response.data.msg)
              this.msm_error = error.response.data.msg
              this.validLogin = false 
              this.loading = false
            })
      }
    },
    mounted(){
      window.scrollTo(0, 0)
    },
    beforeMount(){
      const token = localStorage.getItem('token_shopuser')
      if(token === null){
      } else{
        this.$router.push({name: 'home'})
      }
    }
}
</script>