function loadMoreFn(el, binding) {
  // this.scrollTop  这里可能因为浏览器缩放存在小数点的情况，导致了滚动到底部时
  // scrollHeight 减去滚动到底部时的scrollTop ，依然大于clientHeight 导致无法请求更多数据
  // 这里将scrollTop向上取整 保证滚到底部时，触发调用
  const CONDITION =
    this.scrollHeight - Math.ceil(this.scrollTop) <= this.clientHeight;
  // this.scrollTop !== 0 当输入时，如果搜索结果很少，以至于没看到滚动条，那么此时的CONDITION计算结果是true，会执行bind.value()，此时不应该执行，否则搜索结果不匹配
  if (CONDITION && this.scrollTop !== 0) {
    binding.value();
  }
}

const loadmore = {
  bind(el, binding) {
    const SELECTWRAP = el.querySelector(
      ".el-select-dropdown .el-select-dropdown__wrap"
    );
    SELECTWRAP.addEventListener("scroll", function() {
      loadMoreFn.call(this, el, binding);
    });
  },
  unbind(el, binding) {
    const SELECTWRAP = el.querySelector(
      ".el-select-dropdown .el-select-dropdown__wrap"
    );
    SELECTWRAP.removeEventListener("scroll", function() {
      loadMoreFn.call(this, el, binding);
    });
  }
};

export default loadmore;