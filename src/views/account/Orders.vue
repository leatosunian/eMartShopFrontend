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
                <div class="pb-2 text-center hero-content">
                    <h1 class="hero-heading">Mis pedidos</h1>
                    <div class="row">   
                    <div class="col-xl-8 offset-xl-2"><p class="lead">Este es el historial de tus compras</p></div>
                    </div>
                </div>
            </div>
        </section>

        <section style="margin-bottom: 200px">
            <div class="container">
                <div class="row">

                    <div class="col-lg-8 col-xl-9" v-if="orders.length >= 1" style="overflow-x:scroll!important;">
                        <table class="table table-borderless table-hover table-responsive-md table-responsive-sm" style="overflow-x:scroll!important;">
                            <thead class="bg-light">
                                <tr>
                                    <th class="py-4 text-sm text-uppercase" style="font-size:13px;">Pedido</th>
                                    <th class="py-4 text-sm text-uppercase" style="font-size:13px;">Fecha de compra</th>
                                    <th class="py-4 text-sm text-uppercase" style="font-size:13px;">Total</th>
                                    <th class="py-4 text-sm text-uppercase" style="font-size:13px;">Estado</th>
                                    <th class="py-4 text-sm text-uppercase" style="font-size:13px;"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in orders">
                                    <th class="py-4 align-middle">#{{item.orderNumber}}</th>
                                    <td class="py-4 align-middle">{{item.day}}/{{item.month}}/{{item.year}}</td>
                                    <td class="py-4 align-middle">{{priceConverter(item.total)}}</td>
                                    <td class="py-4 align-middle" v-if="item.statusStr === 'En preparación'" ><span class="p-2 badge text-uppercase badge-info-light">En preparación</span></td>
                                    <td class="py-4 align-middle" v-if="item.statusStr === 'En camino'" ><span class="p-2 badge text-uppercase badge-warning-light">En camino</span></td>
                                    <td class="py-4 align-middle" v-if="item.statusStr === 'Recibido'" ><span class="p-2 badge text-uppercase badge-success-light">Recibido</span></td>
                                    <td class="py-4 align-middle"><router-link class="btn btn-outline-dark btn-sm" :to="'/profile/order/'+item._id">Detalles</router-link></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="col-lg-8 col-xl-9" v-if="orders.length === 0">
                        <div class="card">
                            <div class="card-body">
                            <div class="row" >
                                <div class="text-center col-12">
                                <img src="../../../public/assets/icons/empty-cart.png" style="width:90px; height:90px; margin-bottom:35px" alt="">
                                <h3 style="font-size:24px;">Aún no hiciste pedidos.</h3>
                                <span style="color:black;font-weight:400;font-size:17px;">Qué esperas? </span>
                                <router-link to="/products" class="textLink" style="font-weight:600;font-size:17px;margin-left:1px!important;">¡Hacé tu primer compra!</router-link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <!-- Customer Sidebar-->
                    <div class="mb-5 col-xl-3 col-lg-4 ">
                        <AccountSidebar/>
                    </div>
                    <!-- /Customer Sidebar-->
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.borderCard{
    border-radius: 8px;
    border: 1px solid rgb(214, 214, 214);
    padding: 30px 0;
    
}
</style>

<script>
import axios from 'axios'
import currencyFormatter from 'currency-formatter'
import AccountSidebar from '@/components/AccountSidebar.vue'

export default {
    name: 'Orders',
    components:{
        AccountSidebar
    },
    data(){
        return {
            orders: []
        }

    },
    beforeMount(){
        this.getOrders()
    },
    mounted(){
        window.scrollTo(0, 0)
    },
    methods: {
        priceConverter(price){
            return currencyFormatter.format(price, { code: 'ARS' });
        },
        getOrders(){
            var loader = this.$loading.show({
                container: this.fullPage ? null : this.$refs.formContainer,
                canCancel: false,
                color: "orange",
                opacity: 1
                
            });
            const userId = JSON.parse(localStorage.getItem('data_shopuser'))[1]
            const token = localStorage.getItem('token_shopuser')
            axios.get(this.$url+'/profile/orders/'+userId, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization" : `Bearer ${token}`
                }
            }).then((response) => {
                const {data} = response
                console.log(data);
                this.orders = data
                loader.hide()
            }).catch( error => {
                loader.hide()
            })
        }
    }

}
</script>