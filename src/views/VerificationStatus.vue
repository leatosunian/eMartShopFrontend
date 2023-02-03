<template>
    <div >
        <section class="hero productMargin">
            <div class="container">
            <!-- Breadcrumbs -->
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
                <li class="breadcrumb-item active">Estado de compra</li>
            </ol>
            
            </div>
        </section>
        <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; gap:30px; margin-top:40px; margin-bottom:50vh;">
            <img :src="status.icon" alt="icon" style="width: 100px;height: 100px;" v-if="isAddress">
            <h1 v-if="isAddress">{{ status.title }}</h1>
            <h1 v-if="!isAddress">{{ submsm_error }} </h1>
            <h2 v-if="!isAddress">{{ msm_error }} </h2>
            <p style="font-size:20px" v-if="isAddress">{{ status.subtitle }} </p>
            <template v-if="validSale">
                <div>
                    <span style="font-weight:500; font-size:18px">Redirigiendo al detalle de compra</span>

                    <div class="row">
                        <div class="text-center col-12">
                            <div class="mt-4 mb-5 spinner-border" role="status">
                            <span class="visually-hidden">Cargando...</span>
                            </div>
                        </div>
                    </div> 
                </div>
            </template>
            <router-link v-if="!validSale" to="/" class="btnAdd" style="padding: 11px 26px !important;" >Volver al inicio</router-link>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'VerificationStatus',
    data(){
        return {
            status: {
                title: '',
                subtitle: '',
                icon: ''
            },
            payment_id: '',
            payment: {},
            address: '',    
            msm_error: '', 
            submsm_error: '',
            isAddress: true,
            sale: {},
            saleDetail: [],
            total: 0,
            cart: [],
            validSale: true
        }
    },
    mounted(){
        window.scrollTo(0, 0)
    },
    beforeMount(){
        this.payment_id = this.$route.query.payment_id 
        this.sale.transaction = this.payment_id 

        this.getCart()
        this.getPayment(this.payment_id)

        if(this.$route.params.address){
            this.address = this.$route.params.address
            this.sale.address = this.address
            this.isAddress = true
        } else{
            this.isAddress = false
            this.msm_error = 'No se obtuvo un domicilio de envío'
            this.submsm_error = 'Error'
        }
        
        if(this.$route.params.status == 'success'){
            this.status.title = "Pago aprobado"
            this.status.subtitle = '¡El pago ha sido efectuado correctamente!'
            this.status.icon = '/assets/icons/checked.png'
        }
        if(this.$route.params.status === 'pending'){
            this.status.title = 'Pendiente de pago'
            this.status.subtitle = 'Mercado Pago está procesando tu pago. No te preocupes, en unas horas te avisaremos por e-mail si se acreditó.'
            this.status.icon = '/assets/icons/pending.png'
            this.validSale = false
            this.isAddress = true
        }
        if(this.$route.params.status === 'failure'){
            this.status.title = "Pago rechazado"
            this.status.subtitle = 'El pago no pudo ser efectuado.'
            this.status.icon = '/assets/icons/cancel.png'
            this.validSale = false
            this.isAddress = true
        }
        console.log(this.address);
        console.log(this.$route.params.shipMethod);
        
     },
    methods: {
        getPayment(payment_id){
            this.payment_id
            axios.get('https://api.mercadopago.com/v1/payments/'+payment_id, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization" : `Bearer TEST-8345754408126296-011013-80551365f23e905a81e45c9b2e873d68-172136330`
                }
            }).then((response) => {
              const {data} = response
              this.payment = data
              console.log(this.payment.status);
              if(this.payment.status === 'approved'){
                this.validateSale(this.payment_id)
              }
            }).catch( error => {
              console.log(error.response.data.msg)
            }) 
        },

        validateSale(payment_id){
            const token = localStorage.getItem('token_shopuser')
            console.log(payment_id);
            axios.get(this.$url+'/sales/get/'+payment_id, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization" : `Bearer ${token}`
                }
            }).then((response) => {
              const {data} = response
              console.log(data);
              if(data.length >= 1){
                return // no se hace la venta //
              }
              if(data.length === 0){
                setTimeout(() => {
                    this.createSale()
                }, 1000);
              }
            }).catch( error => {
              console.log(error.response.data.msg)
            }) 
        },

        getCart(){
            const token = localStorage.getItem('token_shopuser')
            const getUser = JSON.parse(localStorage.getItem('data_shopuser'))
            const user = getUser[1]
            axios.get(this.$url+'/cart/get/'+user, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            }).then((response) => {
                this.total = 0
                const {data} = response
                this.cart = data
                console.log(this.cart);

                for(const item of data){
                    const subtotal = item.product.price * item.amountOfProducts
                    this.total = this.total + subtotal

                    this.saleDetail.push({
                        subtotal: subtotal,
                        unitPrice: item.product.price,
                        items: item.amountOfProducts,
                        client: user,
                        product: item.product._id,
                        variant: item.variant._id
                    })
                }
                this.sale.status = this.payment.status
                this.sale.total = this.total
                this.sale.client = user
                console.log(this.sale);
                console.log(this.saleDetail);
               
            }).catch( error => {
                console.log(error.response.data.msg)
            })  
        },

        createSale(){
            this.sale.shippingPrice = this.$route.params.shippingCost
            this.sale.shipMethod = this.$route.params.shipMethod
            this.sale.saleDetail = this.saleDetail
            const token = localStorage.getItem('token_shopuser')
            axios.post(this.$url+'/sales/save', this.sale, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization" : `Bearer ${token}`
                }
            }).then((response) => {
              const {data} = response
              console.log(data);
              this.$socket.emit('sendCart', true)
              this.validSale = true
              setTimeout(() => {
                this.$router.push({name: 'order', params: {id:data._id}})
              }, 2000);
            }).catch( error => {
              console.log(error.response.data.msg)
            }) 
        }
    }
}
</script>