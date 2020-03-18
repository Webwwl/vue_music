<template>
  <div class="slider" ref="slider">
    <div class="slider_group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <div class="dot" v-for="(dot, index) in dots" :key="index" :class="{active: index === currentPageIndex}"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import BScroll, { BsOption } from 'better-scroll'
import {  } from 'better-scroll'

interface A {
  $refs: {
    [index: string]: HTMLElement
  }
}

@Component
export default class Class extends Vue {

  @Prop({default: true}) readonly loop!: boolean

  @Prop({default: true}) readonly autoPlay!: boolean

  @Prop({default: 4000}) readonly interval!: number

  @Ref() readonly sliderGroup!: HTMLElement

  @Ref() readonly slider!: HTMLElement

  bsInstance!: BScroll

  timer!: number

  children!: HTMLCollection

  currentPageIndex = 0

  dots: any[] = []

  mounted() {
    setTimeout(() => {
      this.initSliderWidth()
      this.initDots()
      this.initSlider()
    }, 20);
  }

  initSliderWidth() {
    const containerWidth = this.sliderGroup.clientWidth
    this.children = this.sliderGroup.children
    let width = 0
    for(let child of this.children) {
      child.classList.add('slider_item');
      (child as HTMLElement).style.width = containerWidth + 'px'
      width += containerWidth
    }
    width += containerWidth * 2;  // better-scroll实现loop播放需要
    this.sliderGroup.style.width = width + 'px'
  }

  initSlider() {
    this.bsInstance = new BScroll(this.slider, {
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: {
        loop: this.loop,
      },
      bounce: false,
    })

    if (this.autoPlay) {
      this._play()
    }

    this.bsInstance.on('scrollEnd', this._onScrollEnd)
  }

  _onScrollEnd() {
    this.currentPageIndex = this.bsInstance.getCurrentPage().pageX
    if (this.autoPlay) {
      this._play()
    }
  }

  _play() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.bsInstance.next()
    }, this.interval);
  }

  initDots() {
    this.dots = new Array(this.children.length)
  }
}
</script>
<style lang='scss' scoped>
@import '@/common/styles/variable.scss';
.slider {
  overflow: hidden;
  position: relative;
  font-size: 0;
  .slider_group {
    .slider_item {
      display: inline-block;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        img {
        width: 100%;
        height: 100%;
        }
      }
    }
  }
  .dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12px;
    transform: translateZ(1px);
    text-align: center;
    font-size: 0;
    .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      margin: 0 4px;
      border-radius: 50%;
      background: $color-text-l;
      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
</style>