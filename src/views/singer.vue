<template>
  <div class="singer">
    <list-view :data="singers"></list-view>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getSingerList } from '@/api/singer'
import { RESPONSE_STATUS, IRESPONSE } from '@/api/request'
import Signer, { OrignSingerData, normlizeSingerData, SingerMapKeyItem } from '@/common/class/singer'
import ListView from '@/components/list-view/list-view.vue'

@Component({
  components: {
    ListView
  }
})
export default class Class extends Vue {

  singers: SingerMapKeyItem[] = []

  created() {
    this.getSingers()
  }

  getSingers() {
    this.$loading()
    getSingerList().then(res => {
      if (res.code === RESPONSE_STATUS.STATUS_OK) {
        this.singers = normlizeSingerData(res.data.list)
      }
      this.$closeLoading()
    })
  }
}
</script>
<style lang='stylus' scoped>
.singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>