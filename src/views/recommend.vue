<template>
  <div class="recommend">
    <scroll ref="scroller" class="recommend_content" :data="discList">
      <div>
        <div class="slider_container">
          <slider v-if="recommends.length">
            <div v-for="item in recommends" :key="item.linkUrl">
              <a :href="item.linkUrl">
                <img @load="loadImg" :src="item.picUrl" alt="">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend_list">
          <h5 class="list_title">热门歌单推荐</h5>
          <ul ref="loadingContainer">
            <li v-for="(item, index) in discList" class="item" :key="index">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl" alt="">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { getRecommend, getDiscList } from '@/api/index'
import { RESPONSE_STATUS, IRESPONSE } from '@/api/request'
import slider from '@/components/slider/slider.vue'
import scroll from '@/components/scroll/scroll.vue'

@Component({
  components: {
    slider,
    scroll
  }
})
export default class RecommendClass extends Vue {

  @Ref() scroller!: scroll

  @Ref() loadingContainer!: HTMLElement
  
  recommends: any[] = []

  discList: any[] = []

  checkLoadImg: boolean = false

  created() {
    this.getBannerData()
    this.getDiscListData()
  }

  getDiscListData() {
    this.$loading()
    getDiscList().then((res) => {
      if (res.code === RESPONSE_STATUS.STATUS_OK) {
        this.discList = res.data.list
      }
      this.$closeLoading()
    })
  }

  getBannerData() {
    getRecommend().then((res) => {
      if (res.code === RESPONSE_STATUS.STATUS_OK) {
        this.recommends = res.data.slider
      }
    })
  }

  loadImg() {
    if (!this.checkLoadImg) {
      this.checkLoadImg = true
      setTimeout(() => {
        this.scroller.refresh()
      }, 20);
    }
  }
}
</script>
<style lang='stylus' scoped>
  @import '~@/common/styles/stylus/variable.styl'
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend_content
      height: 100%
      overflow: hidden
      .slider_wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider_content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend_list
        .list_title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          font-size: 0
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading_container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>