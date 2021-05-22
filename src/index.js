import LoadSelect from "./components/LoadSelect.vue";
import loadMore from './directive/loadmore.js';

const install = function (Vue) {
  if (install.installed) return;
  if (!Vue.prototype.$ELEMENT) {
    throw new Error("请先安装element-ui");
  }
  Vue.component(LoadSelect.name, LoadSelect);
  Vue.directive('loadmore', loadMore)
  install.installed = true
};

if (window && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  LoadSelect,
  loadMore
}
