<template>
  <div id="app">
    <HelloWorld msg="Chris Breimhurst"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
	line-height: 0.5;
	text-align: left;
}
</style>
