const siteURL = "https://data.christopherbreimhurst.com/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1"

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
     coins: []
  },
  actions: {
    loadCoins () {
      axios
        .get(siteURL)
        .then(r => r.data)
        .then(coins => {
        console.log(coins)
        })
    }
  },
  mutations: {
    SET_COINS (state, coins) {
      state.coins = coins
    
    }
  }
})