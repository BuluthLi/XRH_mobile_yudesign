import Vue from 'vue';
import Vuex from "vuex";
import active from './modules/active'
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    modules: {
        user: active
    },
    strict: debug,
})