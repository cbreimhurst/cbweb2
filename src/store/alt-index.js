const postREST = "https://data.christopherbreimhurst.com/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1"
const siteREST = "https://data.christopherbreimhurst.com/wp-json/"

import axios from 'axios'
import 'core-js/es/promise'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // STATE
  state: {
    isLoading: false,
    posts: null,
    post: null,
    info: null
  },

  // GETTERS
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    post (state) {
      return state.post
    },
  },

  // MUTATIONS
  mutations: {
    loadingState (state, { isLoading }) {
      state.isLoading = isLoading
    },
    getPost (state, { slug }) {
      state.post = state.posts.find(post => post.slug === slug)
    }
  },

  // ACTIONS
  actions: {
    getPost ({ commit }, payload) {
      commit('loadingState', { isLoading: true })
      setTimeout(() => {
        commit('getPost', payload)
        commit('loadingState', { isLoading: false })
      }, 2000)
    }
  }
})
