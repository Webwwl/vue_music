import Vue from 'vue'
import { LoadingOptons } from './loading'

declare module "vue/types/vue" {
  interface Vue {
    $loading(options?: LoadingOptons): Vue;
    $closeLoading(): void
    $loadingIns: any
  }
}