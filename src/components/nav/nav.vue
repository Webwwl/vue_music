<template>
  <div class="navs">
    <router-link tag="div" to="/recommend" class="nav">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" to="/singer" class="nav">
      <span>歌手</span>
    </router-link>
    <router-link tag="div" to="/rank" class="nav">
      <span>排行</span>
    </router-link>
    <router-link tag="div" to="/search" class="nav">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Class extends Vue {
  
}
</script>
<style lang='scss' scoped>
@import '@/common/styles/scss/variable.scss';
.navs {
  display: flex;
  color: $color-text-l;
  .nav {
    flex: auto;
    line-height: 44px;
    text-align: center;
    font-size: $font-size-medium;
    span {
      padding-bottom: 5px;
      color: $color-text-l;
    }
  }
  .router-link-active {
    span {
      color: $color-theme;
      border-bottom: 2px solid $color-theme;
    }
  }
}
</style>