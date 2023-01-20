<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <p>{{ $t("hello") }}</p>
  <!-- props -->
  <!-- child components -->
  <basic :news="news"
   @listenerChild="newFunction2">
   <template v-slot:header>
    <h1>Here might be a page title</h1>
</template>
   </basic>

  <router-view/>
</template>
<script>
import Basic from './shared/components/Basic.vue'
export default {
  components: { Basic },
  data(){
    return{
      news:[1,23,55,456]
    }
  },
  methods: {
    newFunction2(reply) {
      console.log('function parent',reply)
      this.news.push(99)
    }
  },
}
</script>
<style lang="scss">

</style>
