
import Vuex from 'vuex'
import CalculationsStore from './modules/calculationsStore'
import InfoStore from './modules/infoStore'
import Vue from "vue";

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        infoStore: InfoStore,
        calculationsStore: CalculationsStore
    }
})