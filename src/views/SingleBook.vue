<template>
  <div>
    <!-- <h1>singlebook</h1> -->
    <!-- <p>{{book}}</p> -->
    <BookCover :book="book"/>
    <SingleBook :book="book"/>
    
    <button @click="sendToReadList">Send To ReadingList</button>
    
  </div>
</template>

<script>
 import BookCover from '../components/BookCover.vue'
 import SingleBook from '../components/SingleBookComp.vue'
export default {
 
  components: {BookCover,SingleBook},
  data(){
    return{
      // newArr:[]

    }
  },

computed:{
    book(){
     return this.$store.state.books.find(book => book.id == this.$route.params.id)
  }
},
methods:{
  sendToReadList(){
    // let newArr=[]
    this.$store.commit('pushToReadList', this.book)
    // this.newArr.push(this.book)
    // console.log(this.newArr)
  }
}
}
</script>

<style>

</style>

// findBook(){
//   this.books.find(book => book.Title == this.$router.params)
// }