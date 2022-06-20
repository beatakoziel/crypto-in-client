
import Vuex from 'vuex'
import CalculationsStore from './modules/calculationsStore'
import Vue from "vue";

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        calculationsStore: CalculationsStore
    }
})