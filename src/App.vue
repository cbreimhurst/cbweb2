

<template>
  <div id="app">
         <router-view></router-view>
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

.individual h1 {
  font-size: 5.4rem;
  word-break: break-word;
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
  display: flex;
  flex-flow: column;
  justify-content: space-between;
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


.readmore.slide {
  margin-top: auto;
}



.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #2c3e50;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}



@media screen and (max-width: 668px) {
  h1 {
	font-size: 6.7rem;
  }
  .flex-posts .post {
    margin: 0 0 30px 0;
    width: 100%;
  }
}

</style>
