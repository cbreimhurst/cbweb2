<template>
  <div id="app">
       <main>
         <h1>{{msg}}</h1>
        <!-- <div class="post" v-for="post in sortedPosts" :key="post.id">
          <h3>
            <a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a>
          </h3>
          <small>{{ post.date }}</small>
          <div v-html="post.excerpt.rendered"></div>
          <a :href="`blog/${post.slug}`" class="readmore slide">Read more ⟶</a>
        </div> -->
      </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      msg: 'Chris Breimhurst',
      // selectedTag: null,
      // activeClass: "active"
    };
  },
  computed: {
    // posts() {
    //   return this.$store.state.posts;
    // },
    // tags() {
    //   return this.$store.state.tags;
    // },
    // sortedPosts() {
    //   if (!this.selectedTag) return this.posts;
    //   return this.posts.filter(el => el.tags.includes(this.selectedTag));
    // }
  },
  created() {
   // this.$store.dispatch("getPosts");
  },
  methods: {
    // updateTag(tag) {
    //   if (!this.selectedTag) {
    //     this.selectedTag = tag.id;
    //   } else {
    //     this.selectedTag = null;
    //   }
    // },
      // increment() {
      //   this.$store.commit('increment')
      //   console.log(this.$store.state.count)
      // }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
	background-color: #fefcf6;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  box-sizing: border-box;
}
h1 {
	font-family: 'Fraunces', serif;
	font-size: 13rem;
	word-break: break-all;
	line-height: 1;
	text-align: left;
    background: url(/img/chris.b238fc8c.png) 0 0 / 40% repeat;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>
