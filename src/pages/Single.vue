<template>


  <main class="post individual">
    <div v-if="!posts">
    <div class="lds-ripple"><div></div><div></div></div>
    </div>
    <article v-if="posts">
    <h1>{{ post.title.rendered }}</h1>
    <small class="date">{{ post.date | dateformat}}</small>
    <section v-html="post.content.rendered"></section>
    <a href="/" class="see-all"><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M10 14L3 7.5 10 1" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path></svg>see all posts</a>
    </article>
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
  metaInfo () {
    return {
     // title: this.post.title.rendered;
      title: this.$store.state.isLoading ? 'Loading...' : this.post.title.rendered
    }
  },
  filters: {
    dateformat: function(value){
      let date = new Date(value)
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',    'November', 'December'];
      return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

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

<style scoped>main {
  text-align: left;
}

section {
 font-size: clamp(1rem, 4.1vw, 1.5rem);
}

section h3 {
  font-weight: 900;
}

section a {
      word-break: break-all;
}

.see-all svg {
    transform: translate(-6px,3px);
}
</style>