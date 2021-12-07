import LoadSelect from './components/LoadSelect.vue';
import LoadMoreDirective from './directive/loadmore.js';

const Plugin = {
  install(Vue) {
    if (Plugin.installed) return;
    // 检测是否安装了element-ui
    if (!Vue.prototype.$ELEMENT) {
      throw new Error("请先安装element-ui");
    }
    Vue.component(LoadSelect.name, LoadSelect);
    Vue.directive('loadmore', LoadMoreDirective)
    Plugin.installed = true
  }
}

export default Plugin