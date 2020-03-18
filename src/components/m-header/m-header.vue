<template>
  <div class='m-header'>
    <div class="icon"></div>
    <div class="text">Chicken Music</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Class extends Vue {}
</script>
<style lang='scss' scoped>
@import '@/common/styles/mixin.scss';
@import '@/common/styles/variable.scss';
.m-header {
  text-align: center;
  line-height: 44px;
  color: $color-theme;
  .icon {
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 32px;
    margin-right: 10px;
    background-size: 100% 100%;
    @include bg-image('logo');
  }
  .text {
    font-size: 18px;
    display: inline-block;
    vertical-align: middle;
    font-weight: 700;
  }
}
</style>