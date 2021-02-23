<template>
  <div id="app">
    <pre style="text-align: left;">
    </pre>
    <transition name="fade">
         <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Chris Breimhurst',
      //title: this.$store.state.isLoading ? 'Loading...' : 'Chris Breimhurst',
      // all titles will be injected into this template
      titleTemplate: '%s | Web Developer'
  },
  components: {
    // HelloWorld
  },
  data() {
    return {
      title: 'Chris Breimhurst',
      about: 'Commercial artist, web developer, & branding specialist from Lancaster, Pennsylvania.',
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

  serverPrefetch () {
    // return the Promise from the action
    // so that the component waits before rendering
    return this.fetchPosts() 
  },

  mounted () {
    // If we didn't already do it on the server
    // we fetch the item (will first show the loading text)
    if (!this.posts) {
      this.fetchPosts()
    }
    if (!this.info) {
      this.fetchInfo()
    }
  },


  methods: {
    fetchPosts () {
      // return the Promise from the action
      return this.$store.dispatch('getPosts')
    },
    fetchInfo () {
      // return the Promise from the action
      return this.$store.dispatch('getInfo')
    },
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



:root {
  --highlight: #c4c238;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .75s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

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
    font-size: 5.4rem;
    font-size: clamp(2.3rem, 9vw, 5.4rem);
    word-break: break-all;
    line-height: 1;
    text-align: left;
  margin-bottom: 0;
  text-align: center;
}


header p {
  margin-top: 0;
  margin-bottom: 6rem;
}


.individual h1 {
  word-break: break-word;
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
    text-decoration-color: var(--highlight);
text-decoration-thickness: 0.3rem;
}


.flex-posts {
    display: flex;
    flex-flow: row wrap;
  text-decoration: none;
  justify-content: center;
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
  border-radius: 5px;
}


@supports (grid-template-rows: masonry) {
.flex-posts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: masonry;
  grid-gap: 1rem;
}

.flex-posts .post {
    margin: 0 0% 30px 0;
    width: 100%;
}
  }
  
.flex-posts .post h3 {
    font-family: 'Fraunces', serif;
    font-size: 2rem;
    text-decoration: underline;
    text-decoration-color: var(--highlight);
text-decoration-thickness: 0.3rem;
    margin-top: 0;
    line-height: 1;
}
.flex-posts .post h3 a {
    text-decoration: none;
}


.readmore.slide {
  margin-top: auto;
    text-decoration: underline;
  text-decoration-color: var(--highlight);
text-decoration-thickness: 0.3rem;
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
  .flex-posts .post {
    margin: 0 0 30px 0;
    width: 100%;
  }
}


code {
    border-radius: 5px;
    background: #00000008;
    display: inline-block;
    padding: 2rem;
    font-size: 1rem;
}

</style>
