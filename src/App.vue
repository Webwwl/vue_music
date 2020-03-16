<template>
  <div id="app">
    <m-head></m-head>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MHead from '@/components/m-header/m-header.vue'
import Nav from '@/components/nav/nav.vue'

@Component({
  components: {
    MHead,
    Nav
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
