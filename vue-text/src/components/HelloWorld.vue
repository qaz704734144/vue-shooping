<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a> <router-link to="/vuea"> 进入A页面</router-link></a>
     <a><router-link to="/vueb"> 进入B页面</router-link></a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your  myVue.js App'
    }
  },
 
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

</style>
