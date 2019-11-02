<template>
  <div >
    <h1>{{ msg }}</h1>
      <div>
        <router-link to="/">
            返回主页
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueB',
  data () {
    return {
      msg: '我使B页面'
    }
  },
  component: {
    
  },
  methods: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: bold;
  color:#000;
  font-size:50px;
}

</style>
