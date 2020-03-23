<template>
  <scroll class="listview" :data="data" ref="scroll">
    <ul>
      <li v-for="(group, index) in data" :key="index" class="list-group" ref="scrollGrpup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="singer in group.items" :key="singer.index" class="list-group-item">
            <img class="avatar" v-lazy="singer.avatar">
            <span class="name">{{singer.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart.stop.prevent="onShortcutTouchStart"
        @touchmove.stop.prevent="onShortcutTouchMove"
        @touchend.stop>
      <ul>
        <li v-for="(item, index) in shortcutList" :data-index="index" class="item" :key="index"
            :class="{'current':currentIndex === index}">{{item}}
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import Scroll from '@/components/scroll/scroll.vue'
import { SingerMapKeyItem } from '@/common/class/singer';
import { getElData } from "@/common/utils/dom";

@Component({
  components: {
    Scroll
  }
})
export default class ListViewClass extends Vue {

  @Ref() scroll!: Scroll

  @Ref() scrollGrpup!: HTMLCollection
  
  @Prop({default: () => []}) data!: SingerMapKeyItem[]

  currentIndex = 0


  onShortcutTouchStart($event: MouseEvent) {
    const anchorIndex = getElData($event.target as HTMLElement, 'index')
    this.currentIndex = Number(anchorIndex)
    this.scroll.scrollToElement(this.scrollGrpup[this.currentIndex])
  }

  onShortcutTouchMove() {

  }

  get shortcutList() {
    return this.data.map(item => item.title.substr(0, 1))
  }

}
</script>
<style lang='stylus' scoped>
@import "~@/common/styles/stylus/variable.styl"

  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>