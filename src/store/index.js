const siteURL = "https://data.christopherbreimhurst.com/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1"

import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    posts: null
  },
  actions: {
    getPosts: function(context) {
      return new Promise((resolve, reject) => { 
      if(context.state.posts) {
      resolve()
      }
      else {
      axios.get(siteURL)
      .then((response) => {
      context.commit('storePosts',
      response.data)
      resolve()
      }).catch((error) => {
      reject(error);
      });
      }
      })
    }
  },
  mutations: {
    storePosts(state, response) {
      state.posts = response }
  }
})
export default store