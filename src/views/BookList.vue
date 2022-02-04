<template>
  <div>
     <h1>BookList</h1>
      <BookCover v-for="book in books" :key="book.id" :book="book"/>
     
      <!-- <router-link :to="'/singlebook/'+book.id" v-for="book in books" :key="book.id" :books="books"> {{book.Title}}<br>{{book.Author}}</router-link> -->
      <!-- <button @click="getChar">DOES STUFF</button> -->
  </div>
</template>

<script>
// import books from '../assets/books.json'
import BookCover from '../components/BookCover.vue'
export default {
    components: {BookCover},
    // data(){
    //   return{
    //     books: [...books]
          computed:{
            books(){
              return this.$store.state.books
            },

    //             characters(){
    //   return this.$store.state.characters
    // }

            
          },
      
      //  async mounted(){
      //       await this.$store.dispatch('fetchCharacters'),
      //       console.log("boooo")  
      //       },
            
      //       methods:{
      //         async getChar(){

      //         }
      //       }
            
        
          
    // }
    // }

}
</script>

<style>

</style>