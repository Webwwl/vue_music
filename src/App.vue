<template>
  <div id="app">
    <m-head></m-head>
    <Nav></Nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
}
</style>
