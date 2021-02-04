<template>
      <main>
         <header>
         <h1>{{title}}</h1>
        <p>{{about}}</p>
         </header>
        <div v-if="!this.$store.state.posts" class="u-align-center">
          <div class="lds-ripple"><div></div><div></div></div>
        </div>
      <div v-if="this.posts" class="flex-posts">

        <a :href="`blog/${post.slug}`" class="post" v-for="post in posts" :key="post.id">
          <h3>
           {{ post.title.rendered }}
          </h3>
          <small>{{ post.date }}</small>
          <p v-html="post.excerpt.rendered"></p>
          <p class="readmore slide">Read more ⟶</p>
        </a>

      </div>
        <p class="copyright">{{copyright}}</p>
      </main>
</template>


<script>

export default {
  components: {
    // HelloWorld
  },
  data() {
    return {
      title: 'Chris Breimhurst',
      about: 'Web developer, producer of online media, & branding consultant ',
      copyright: '© 2021',
      selectedTag: null,
      activeClass: "active"
    };
  },
  computed: {
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