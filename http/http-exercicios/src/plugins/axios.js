import Vue from 'vue'
import axios from 'axios'

//url do meu banco de dados
//axios.defaults.baseURL = 'https://curso-vue-337e5-default-rtdb.firebaseio.com/'

//acessando o axios de forma global, disponivel então em toda a aplicação
Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-337e5-default-rtdb.firebaseio.com/'
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        })
    }
})