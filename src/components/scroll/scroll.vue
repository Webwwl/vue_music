<template>
  <div ref="wrapper" class="scroll_wrap">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref, Watch } from 'vue-property-decorator';
import BScroll from 'better-scroll';

@Component
export default class Class extends Vue {

  @Prop({default: 1}) readonly probType!: number

  @Prop({default: true}) readonly click!: boolean

  @Prop({default: null}) readonly data!: any[]

  @Ref() wrapper!: HTMLElement

  scroller!: BScroll

  mounted() {
    setTimeout(() => {
      this.initScroll()
    }, 20);
  }

  @Watch('data')
  onDataChange(newVal: any[], oldVal: any[]) {
    this.$nextTick(() => {
      this.scroller.refresh()
    })
  }

  initScroll() {
    if (!this.wrapper) {
      return 
    }
    this.scroller = new BScroll(this.wrapper, {
      probeType: this.probType,
      click: this.click
    })
  }

  enable() {
    this.scroller && this.scroller.enable()
  }

  disable() {
    this.scroller && this.scroller.disable()
  }

  refresh() {
    this.scroller && this.scroller.refresh()
  }

  scrollToIndex() {
    // this.scroller && this.scroller.scrollTo()
  }

  scrollToElement(el: Element) {
    this.scroller && this.scroller.scrollToElement(el as HTMLElement)
  }
}
</script>
<style lang='scss' scoped>
</style>