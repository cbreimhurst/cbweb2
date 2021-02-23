<template>
      <main>
         <header v-if="this.info">
         <h1 v-html="info.name"></h1>
        <p v-html="info.description"></p>
         </header>
        <div v-if="!this.$store.state.posts" class="u-align-center">
          <div class="lds-ripple"><div></div><div></div></div>
        </div>
      <div v-if="this.posts" class="flex-posts">

        <a :href="`blog/${post.slug}`" class="post" v-for="post in posts" :key="post.id">
          <h3 v-html="post.title.rendered"></h3>
          <small>{{post.date | dateformat }}</small>
          <p v-html="post.excerpt.rendered"></p>
          <p class="readmore slide">Read more<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M5 14l7-6.5L5 1" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path></svg></p>
        </a>

      </div>
      </main>
</template>


<script>

export default {
  components: {
    // HelloWorld
  },
  data() {
    return {
      copyright: '© 2021',
      selectedTag: null,
      activeClass: "active"
    };
  },
  computed: {
    info() {
      return this.$store.state.info;
    },
    posts() {
      return this.$store.state.posts;
    },
    tags() {
      return this.$store.state.tags;
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts;
      return this.posts.filter(el => el.tags.includes(this.selectedTag));
    }
  },
  created() {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getInfo')
  },
  filters: {
    dateformat: function(value){
      let date = new Date(value)
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',    'November', 'December'];
      return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

    }
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id;
      } else {
        this.selectedTag = null;
      }
    },
  }
}
</script>

