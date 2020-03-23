import LoadingOptions from './loading.vue'
import { Vue } from "vue-property-decorator";
import { VueConstructor } from 'vue/types/umd';

interface ILoadingOptins {
  append?: HTMLElement,
  title?: string
}

export type LoadingOptons = ILoadingOptins

const LoadingConstruct = Vue.extend(LoadingOptions)

export default function LoadingPlugin(Vue: VueConstructor) {
  Vue.prototype.$loading = function (options: LoadingOptons = {}) {
    if (this.$loadingIns && this.$loadingIns.isShow) return
    this.$loadingIns= new LoadingConstruct()
    this.$loadingIns.show()
    const node = this.$loadingIns.$mount()
    if (options.title) {
      (this.$loadingIns as ILoadingOptins).title = options.title
    }
    if (options.append) {
      options.append.appendChild(node.$el)
    } else {
      document.body.appendChild(node.$el)
    }
  }
  Vue.prototype.$closeLoading = function () {
    if (this.$loadingIns && this.$loadingIns.isShow) {
      this.$loadingIns.close()
    }
  }
}