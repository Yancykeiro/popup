<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <input v-anti-shake type="text" >
  </div>
</template>

<script>
import antiShake from './directive/antiShake'

export default {
  directives:{
    antiShake
  },
  name: 'App',
  
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
