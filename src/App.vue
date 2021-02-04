

        <template>
  <div id="app">
       <main>
         <header>
         <h1>{{title}}</h1>
        <p>{{about}}</p>
         </header>
        <div v-if="!this.$store.state.posts" class="u-align-center">
          
        </div>
      <div v-if="this.$store.state.posts" class="flex-posts">

        <a :href="`blog/${post.slug}`" class="post" v-for="post in this.$store.state.posts" :key="post.id">
          <h3>
           {{ post.title.rendered }}
          </h3>
          <small>{{ post.date }}</small>
          <p v-html="post.excerpt.rendered"></p>
          <p class="readmore slide">Read more ⟶</p>
        </a>

      </div>
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
      title: 'Chris Breimhurst',
      about: '',
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
    this.$store.dispatch('getPosts')
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
  margin-top: 0;
	font-family: 'Fraunces', serif;
	font-size: 11.7rem;
	word-break: break-all;
	line-height: 1;
	text-align: left;
}
main {
margin: 125px auto;
  max-width: 900px;
  padding: 0 15px;
  box-sizing: border-box;
}
main a {
	color: #2c3e50;
	font-weight: 900;
}
.flex-posts {
	display: flex;
	flex-flow: row wrap;
  text-decoration: none;
}
.flex-posts * {
  text-decoration: none;
}
.flex-posts .post {
	box-sizing: border-box;
	text-align: left;
	border: solid;
	margin: 0 1% 30px 0;
	padding: 40px;
	border-width: 17px;
	width: 48%;
}
.flex-posts .post h3 {
	font-size: 2rem;
	text-decoration: none;
	margin-top: 0;
	line-height: 1;
}
.flex-posts .post h3 a {
	text-decoration: none;
}

@media screen and (max-width: 668px) {
  .flex-posts .post {
    margin: 0 0 30px 0;
    width: 100%;
  }
}
</style>
