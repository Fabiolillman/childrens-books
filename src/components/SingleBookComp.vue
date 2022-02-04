<template>
  <div class="body">
    <header>
     <h1> {{book.Title}}</h1>
     <p>By {{book.Author}}</p>
     </header>
     <main>
     <p>{{book.Plot}}</p>
     </main>
     <footer>
     <p>Audience: {{book.Audience}}</p>
     <p>First published: {{book.Year}}</p>
     <p>Pages: {{book.Pages}}</p>
     <p>Publisher: {{book.Publisher}}</p>
     </footer>
  </div>
</template>

<script>
export default {
props: ['book'],
}
</script >

<style scoped lang="scss">

</style>

