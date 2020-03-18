<template>
  <div>
    <div class="slider_container">
      <slider v-if="recommends.length">
        <div v-for="item in recommends" :key="item.linkUrl">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getRecommend } from '@/api/index'
import { RESPONSE_STATUS, IRESPONSE } from '@/api/request'
import slider from '@/components/slider/slider.vue'


@Component({
  components: {
    slider
  }
})
export default class Class extends Vue {

  recommends: any[] = []

  created() {
    this.getBannerData()
  }

  getBannerData() {
    getRecommend().then((res) => {
      if (res.code === RESPONSE_STATUS.STATUS_OK) {
        this.recommends = res.data.slider
      }
    })
  }
}
</script>
<style lang='scss' scoped>
</style>