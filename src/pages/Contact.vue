<template>
  <main class="post">
    <header>
      <h1>Contact</h1>
      <p>Reach me here: <a href="mailto:cbreimhurst@gmail.com">cbreimhurst@gmail.com</a></p>
      
    </header>
  </main>
</template>

<script>

export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  filters: {
    dateformat: function(value){
      let date = new Date(value)
      console.log(date)
      return date
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<style scoped>
h1 + p {
  margin-top: 40px;
}
</style>