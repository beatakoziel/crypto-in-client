import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {store} from './stores/index'
import {calculatorRoutes} from "./routers/calculatorRouter"
import {chartsRoutes} from "./routers/chartsRouter"
import VueRouter from "vue-router"
import '@/plugins/apexcharts'
import ResultCard from "@/components/ResultCard";

Vue.config.productionTip = false
let routes = [...calculatorRoutes, ...chartsRoutes]

Vue.use(VueRouter);
export const router = new VueRouter({
    mode: "history",
    routes
})

new Vue({
    vuetify,
    store,
    router,
    ResultCard,
    render: h => h(App)
}).$mount('#app')

