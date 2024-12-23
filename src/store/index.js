const postREST = "https://data.christopherbreimhurst.com/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1"
const quoteREST = "https://data.christopherbreimhurst.com/wp-json/wp/v2/quote?page=1&per_page=20&_embed=1"
const siteREST = "https://data.christopherbreimhurst.com/wp-json/"


import axios from 'axios'
//import 'core-js/es/promise'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({

  // STATE
  state: {
    isLoading: false,
    posts: null,
    quotes: null,
    post: null,
    info: null
  },

// MUTATIONS
  mutations: {
    loadingState (state, { isLoading }) {
      state.isLoading = isLoading
    },
    storePosts(state, response) {
      state.posts = response 
    },
    storeQuotes(state, response) {
      var picked = Math.floor(Math.random() * response.length);
      state.quotes = response[picked] 
    },
    storeInfo(state, response) {
      state.info = response 
    }
  },


  // ACTIONS
  actions: {
    getPosts: function(payload) {
      console.log(payload)
      payload.state.isLoading = true

      return new Promise((resolve, reject) => { 
      if(payload.state.posts) {
        payload.state.isLoading = false
        resolve()
      }
      else {
        axios.get(postREST)
        .then((response) => {
        payload.commit('storePosts',
        response.data)
        payload.state.isLoading = false
        resolve()
        }).catch((error) => {
        
          payload.state.isLoading = false
        reject(error);
        });
      }
      })
    },

    getQuotes: function(payload) {
      console.log(payload)
      payload.state.isLoading = true

      return new Promise((resolve, reject) => { 
      if(payload.state.quotes) {
        payload.state.isLoading = false
        resolve()
      }
      else {
        axios.get(quoteREST)
        .then((response) => {
          console.log(response)

          payload.commit('storeQuotes', response.data)
          payload.state.isLoading = false
        resolve()
        }).catch((error) => {
          payload.state.isLoading = false
          reject(error);
        });
      }
      })
    },
    getInfo: function(payload) {
      return new Promise((resolve, reject) => { 
      if(payload.state.info) {
      resolve()
      }
      else {
      axios.get(siteREST)
      .then((response) => {
      payload.commit('storeInfo',
      response.data)
      resolve()
      }).catch((error) => {
      reject(error);
      });
      }
      })
    }
  },



})
