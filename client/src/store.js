import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let _api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})


export default new Vuex.Store({
  state: {
    user: {},
    homeComp: [],
    profileComp: {},
    posts: [],
    userSearchResults: [],
    followers: [],
    following: []
  },
  mutations: {

    setUser(state, user) {
      state.user = user
    },
    setHomeComp(state, homecomp) {
      state.homeComp = homecomp
    },
    setProfileComp(state, profileComp) {
      state.profileComp = profileComp
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    setFollowers(state, followers) {
      state.followers = followers
    },
    setFollowing(state, following) {
      state.following = following
    },
    setUserSearchResults(state, users) {
      state.userSearchResults = users
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion

    //#region -- USERS --

    async findUsersByName({ commit, dispatch }, query) {
      try {
        //NOTE the query for this method will be the user name
        let res = await _api.get('users/find?name=' + query)
        commit('setUserSearchResults', res.data)
      } catch (error) {
        //TODO handle this catch
      }

    },
    //#endregion

    //#region -- POSTS --
    async getHomeComp({ commit, dispatch }) {
      try {
        let res = await _api.get('posts')
        commit('setHomeComp', res.data)
      } catch (error) {

      }
    },
    async getProfileComp({ commit, dispatch }, userId) {
      try {
        let res = await _api.get('users/' + userId + '/profile')
        commit('setProfileComp', res.data)

      } catch (error) {

      }
    },
    async getProfileById({ commit, dispatch }, userId) {
      try {
        let postsRequest = await _api.get(`/users/${userId}/posts`)
        commit('setPosts', postsRequest.data)

        let followersRequest = await _api.get(`users/${userId}/followers`)
        let followingRequest = await _api.get(`users/${userId}/following`)

        commit('setFollowers', followersRequest.data)
        commit('setFollowing', followingRequest.data)





      } catch (error) {
        console.error(error)
      }
    }



    //#endregion


    //#region -- COMMENTS --

    //#endregion
  }
})
