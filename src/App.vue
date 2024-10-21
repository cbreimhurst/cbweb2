<template>
  <div id="app">
    <header id="sitewide">
      <a href="/" class="site-logo">
        <svg version="1.1" id="Layer_1" xmlns:serif="http://www.serif.com/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 72.5 80.7" style="enable-background:new 0 0 72.5 80.7;" xml:space="preserve">
<g transform="matrix(0.280224,-0.191152,0.229163,0.335947,-99.7633,30.8267)">
	<path class="st0" d="M326.2,153.8l12.3-32.5c0,0,84.3-3.3,116.1,74.3c0,0-93.1,23.3-118.6,61.9c0,0-3.6,55,4.6,68.8
		c0,0-2.4,7.5-9.6,9.7l0,0h-0.1c0,0,0,0-0.1,0l0,0c-7.3-1.9-10.1-9.2-10.1-9.2c7.5-14.2,1.1-68.9,1.1-68.9
		c-27.5-37.2-121.7-55.7-121.7-55.7c27.7-79.1,112.1-80.2,112.1-80.2L326.2,153.8z"/>
</g>
</svg>
<span>Chris Breimhurst</span>
      </a>

      <nav>
        <ul>
          <li><a href="/resume">Résumé</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        </nav>
      </header>



    <transition name="fade">
         <router-view></router-view>
    </transition>


    <footer>

      <svg version="1.1" id="Layer_1" xmlns:serif="http://www.serif.com/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 72.5 80.7" style="enable-background:new 0 0 72.5 80.7;" xml:space="preserve">
<g transform="matrix(0.280224,-0.191152,0.229163,0.335947,-99.7633,30.8267)">
	<path class="st0" d="M326.2,153.8l12.3-32.5c0,0,84.3-3.3,116.1,74.3c0,0-93.1,23.3-118.6,61.9c0,0-3.6,55,4.6,68.8
		c0,0-2.4,7.5-9.6,9.7l0,0h-0.1c0,0,0,0-0.1,0l0,0c-7.3-1.9-10.1-9.2-10.1-9.2c7.5-14.2,1.1-68.9,1.1-68.9
		c-27.5-37.2-121.7-55.7-121.7-55.7c27.7-79.1,112.1-80.2,112.1-80.2L326.2,153.8z"/>
</g>
</svg>

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/resume">Résumé</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        </nav>
    </footer>
        <p class="copyright" v-html="copyright"></p>
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
      about: 'Web developer, branding specialist, commercial artist, from Lancaster, Pennsylvania.',
      copyright: '© 2021 - 2024 | Chris Breimhurst',
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
  --highlighter: #ddd900;
  --blue: #76ecff;
  --just-white: #fff;
  --grey: #2c3e50;
  --ink: #080c10;
  --parch: #fefcf6;
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
  background-color: var(--parch);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--grey);
  min-height: 100vh;
  max-width: 100vw;
  box-sizing: border-box;
  width: 100%;
}

main > header {
	text-align: center;
}

h1 {
  margin-top: 0;
    font-family: 'Averia Serif Libre', serif;
    font-size: 5.4rem;
    font-size: clamp(1.9rem, 9vw, 5.9rem);
    word-break: break-all;
    line-height: 1;
    text-align: left;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: -5px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


main a {
    color: var(--grey);
    font-weight: 900;
    text-decoration-color: var(--highlight);
text-decoration-thickness: 0.3rem;
}

main .note a {
	background: var(--highlighter);
	padding: 30px 60px;
	border-radius: 10px;
	text-decoration-color: var(--just-white);
	font-size: 1.4rem;
  transition: all ease .2s;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 12px;
  text-underline-offset: -7px;
}


main .note a:hover {
  background: var(--highlight);
  text-decoration-thickness: 6px;
  text-underline-offset: -3px;
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
    margin: 0;
    width: 100%;
}
}
  
.flex-posts .post h3 {
    font-family: 'Averia Serif Libre', serif;
    font-size: 2rem;
    margin-top: 0;
    line-height: 1;
    text-decoration: underline;
    text-decoration-color: var(--highlight);
    text-decoration-thickness: 12px;
  text-underline-offset: -8px;
  text-decoration-skip-ink: none;
  letter-spacing: -2px;
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

.readmore svg {
    transform: translate(6px,3px);
}


.posts-loading {
	display: flex;
	justify-content: center;
	width: 100%;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid var(--grey);
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

nav ul {
	display: flex;
	list-style: none;
	margin: 0 auto;
	padding: 0;
	gap: 3px;
	align-items: center;
}

nav ul a {
	color: var(--grey);
	transition: all ease .2s;
	background: var(--parch);
	padding: 10px 20px;
	border-radius: 9px;
	text-decoration-thickness: 3px;
  text-decoration-color: var(--blue);
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
    text-decoration-thickness: 12px;
  text-underline-offset: -8px;
  text-decoration-skip-ink: none;
}

nav ul a:hover {
  background: var(--highlighter);
  text-decoration-color: var(--just-white);
    text-decoration-thickness: 7px;
  text-underline-offset: -3px;
  text-decoration-skip-ink: none;
}

@media screen and (max-width: 668px) {
  
  .flex-posts .post {
    margin: 0 0 30px 0;
    width: 100%;
  }
  main .note a {
	padding: 20px 30px;
	font-size: 1rem;
}

#sitewide nav ul {
display: none;
}


  @supports (grid-template-rows: masonry) {
.flex-posts {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: masonry;
  grid-gap: 1rem;
}


}
}




.site-logo {
	margin-right: auto;
	text-decoration: none;
	color: var(--grey);
	transition: all ease .2s;
	background: var(--parch);
	padding: 10px 20px;
	border-radius: 9px;
  display: flex;
}

.site-logo:hover {
	background: var(--highlighter);
}

.site-logo svg {
	height: 20px;
	margin-right: 8px;
	transform: rotate(0deg);
	transition: all ease .2s;
}


.site-logo:hover svg {
	transform: rotate(84deg);
}

.site-logo path {
	fill: var(--highlight);
	transition: all ease .2s;
}



.site-logo:hover path {
	fill: var(--grey);
}

footer svg {
  max-width: 100px;
}

footer path {
	fill: var(--highlight);
}

footer nav ul {
	align-items: center;
	justify-content: center;
}


code {
    border-radius: 5px;
    background: #00000008;
    display: inline-block;
    padding: 2rem;
    font-size: 1rem;
    max-width: 100%;
box-sizing: border-box;
overflow-y: scroll;
}




#sitewide {
  text-align: left;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px;
  display: flex;
  align-items: center;
}
#sitewide img {
  height: 20px;
  margin-right: 8px;
}



@media (prefers-color-scheme: dark) {
  body {
    background: var(--grey);
    color: var(--parch);
  }
  
  #app,
   main a {
    color: var(--parch);
  }
  
  .site-logo,
    nav ul a {
    color: var(--parch);
    background: var(--grey);
  }
  
  nav ul a  {
    text-decoration-color: var(--ink);
  }
   
   .site-logo:hover,
     nav ul a:hover,
   main .note a{
    color: var(--grey);
  }



.flex-posts .post h3 {
  text-decoration-color: var(--ink);
  transition: all ease .2s;
}

.flex-posts .post:hover h3 {
  text-decoration-color: var(--highlight);
}

.flex-posts .post {
  border-color: var(--ink);
  transition: all ease .2s;
  background: var(--gray);
}

.flex-posts .post:hover {
  border-color: var(--highlight);
  background: var(--ink);
}

main .note a {
	background: var(--highlight);
}

main .note a:hover {
	background: var(--highlighter);
}


.post article a {
  color: var(--blue);
  transition: all ease .2s;
}

.post article a:hover {
  color: var(--just-white);
}
  
}
</style>
