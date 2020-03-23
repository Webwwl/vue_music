<template>
  <div class="loading" ref="loading">
    <img width="24" height="24" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import BScroll from 'better-scroll';

@Component
export default class LoadingClass extends Vue {

  @Ref() loading!: HTMLElement

  title = '加载中...'

  isShow = false

  show() {
    this.isShow = true
  }

  close() {
    this.isShow = false
    this.loading.remove()
  }

}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/styles/stylus/variable.styl"
  .loading
    position: fixed
    display: flex
    align-items: center
    justify-content: center
    z-index: 10
    top: 0
    bottom: 0
    left: 0
    right: 0
    text-align: center
    .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
</style>
