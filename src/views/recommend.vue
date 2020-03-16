<template>
  <div>recommend</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getRecommend } from '@/api/index'
import { RESPONSE_STATUS, IRESPONSE } from '@/api/request'

@Component
export default class Class extends Vue {
  created() {
    this.getBannerData()
  }

  getBannerData() {
    getRecommend().then((res) => {
      if (res.code === RESPONSE_STATUS.STATUS_OK) {
        console.log('ok req:::', res)
      }
    })
  }
}
</script>
<style lang='scss' scoped>
</style>