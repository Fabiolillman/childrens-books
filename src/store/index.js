import Vue from 'vue'
import Vuex from 'vuex'
import books from '@/assets/books.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   books: [...books],
   readingList:[],

  },
  mutations: {
    pushToReadList(state,book){
    // console.log("hello")
      
      state.readingList.push(book)
      console.log(book)
      
    }

  },

  // actions:{
  //   async fetchCharacters( context ){
  //     console.log(context);
  //     const response = await fetch('https://swapi.dev/api/people')
  //     const data = await response.json()
      
  //     context.commit('saveCharacters', data.results)      
  //   }
  // },

})
