<template>
    <div>
        <section class="hero productMargin">
          <div class="container">
            <!-- Breadcrumbs -->
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
              <li class="breadcrumb-item">Mi perfil</li>
              <li class="breadcrumb-item active">Mis pedidos</li>
            </ol>
            <!-- Hero Content-->
            <div class="pb-5 text-center hero-content">
              <h1 class="hero-heading">Pedido #{{ saleData.orderNumber }} </h1>
              <div class="row">
                <div class="col-xl-8 offset-xl-2"><p class="lead text-muted">El pedido #{{ saleData.orderNumber }} abonado el {{ saleData.day }}/{{ saleData.month }}/{{ saleData.year }}, está siendo preparado. Al ser despachado en el correo, te enviaremos un código de seguimiento. Si tenés algún inconveniente con tu compra, <a href="">contactanos</a></p></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-xl-9">
                <div class="cart">
                  <div class="cart-wrapper">
                    <div class="text-center cart-header">
                      <div class="row">
                        <div class="col-6">Producto</div>
                        <div class="col-2">Precio</div>
                        <div class="col-2">Cantidad</div>
                        <div class="col-2">Subtotal</div>
                      </div>
                    </div>
                    <div class="cart-body">
                      <!-- Product-->
                      <div class="cart-item"  v-for="item in products">
                        <div class="text-center row d-flex align-items-center">
                          <div class="col-6">
                            <div class="d-flex align-items-center">
                              <router-link :to="/product/+item.product.slug">
                                <img class="cart-item-img" :src="$url+'/getImage/'+item.product.image" alt="...">
                              </router-link>
                              <div class="cart-title text-start">
                                <a class="text-uppercase text-dark" href="detail.html"><strong>{{item.product.name}}</strong>
                                </a>
                                <br>
                                <span class="text-sm text-muted">{{item.product.str_variant
                                }}: {{item.variant.variant}}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-2">{{priceConverter(item.unitPrice)}}</div>
                          <div class="col-2">
                            {{item.items}}
                          </div>
                          <div class="text-center col-2">{{priceConverter(item.unitPrice*item.items)}}</div>
                        </div>
                      </div>
                      <!-- Product-->

                    </div>
                  </div>
                </div>
                <div class="my-5 row">

                  <div class="col-md-6">
                    <div class="block mb-5">
                      <div class="block-header">
                        <h6 class="mb-0 text-uppercase">Resumen del pedido</h6>
                      </div>
                      <div class="pt-1 block-body bg-light">
                        <ul class="mb-0 order-summary list-unstyled">
                            <li class="order-summary-item"><span>Subtotal </span><span>{{priceConverter(saleData.total)}}</span></li>
                            <li class="order-summary-item"><span>Envío</span><span>{{priceConverter(saleData.shippingPrice)}}</span></li>
                            <li class="border-0 order-summary-item"><span>Total</span><strong class="order-summary-total">{{priceConverter(saleData.total + saleData.shippingPrice)}}</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="block-header">
                      <h6 class="mb-0 text-uppercase">Datos de envío</h6>
                    </div>
                    <div class="pt-1 block-body bg-light">
                      <p>
                          <strong>Destinatario</strong>: {{ address.surname }}, {{address.name}}
                        <br>
                          <strong>Domicilio</strong>: {{address.address}}
                        <br>
                          <strong>Provincia</strong>: {{address.province}}
                        <br>
                          <strong>Ciudad</strong>: {{address.city}}
                        <br>
                          <strong>Código postal</strong>: {{address.code}}
                        <br>
                          <strong>País</strong>: {{address.country}}
                        <br>
                          <strong>Estado</strong>: 
                            <span v-if="saleData.statusStr === 'En preparación' " style="color: black; font-weight:800;" >{{saleData.statusStr}}</span>
                            <span v-if="saleData.statusStr === 'En camino' " style="color: yellow;" >{{saleData.statusStr}}</span>
                            <span v-if="saleData.statusStr === 'Recibido' " style="color: green;" >{{saleData.statusStr}}</span>
                        <br>
                        <strong v-if="saleData.trackingCode">Código de seguimiento:</strong> {{saleData.trackingCode}}
                        <br>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              <!-- Customer Sidebar-->
              <div class="mb-5 col-xl-3 col-lg-4">
                <AccountSidebar/>
              </div>
              <!-- /Customer Sidebar-->
            </div>
          </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import currencyFormatter from 'currency-formatter'
import AccountSidebar from '@/components/AccountSidebar.vue'

export default {
    name: 'PurchaseDetails',
    components:{
      AccountSidebar
    },
    data(){
        return {
          products: [],
          address: {},
          saleData: {}
        }
    },
    mounted(){
      window.scrollTo(0, 0)
    },
    beforeMount(){
        this.getPurchaseData()
    },
    methods: {
      priceConverter(price){
            return currencyFormatter.format(price, { code: 'ARS' });
      },

      getPurchaseData(){
        var loader = this.$loading.show({
          container: this.fullPage ? null : this.$refs.formContainer,
          canCancel: false,
          color: "orange",
          opacity: 1
        });
        if(this.$route.params.id.length < 15){
          loader.hide()
          return
        }
        const token = localStorage.getItem('token_shopuser')
        axios.get(this.$url+'/profile/order/'+this.$route.params.id, {
            headers: {
                "Content-Type": 'application/json',
                "Authorization" : `Bearer ${token}`
            }
        }).then((response) => {
          const {data} = response
          console.log(data);
          this.address = data.sale[0].address
          this.saleData = data.sale[0]
          this.products = data.saleDetails
          console.log(this.saleData);
          console.log(this.products);
          loader.hide()
        }).catch( error => {
          console.log(error.response.data.msg)
          loader.hide()
        })
      }
    },

}
</script>