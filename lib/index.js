(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LoadSelect = factory());
}(this, (function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    name: "LoadSelect",
    props: {
      value: {
        default: "",
      },
      // 列表数据
      data: {
        type: Array,
        default: () => [],
      },
      dictLabel: {
        type: String,
        default: "label",
      },
      dictValue: {
        type: String,
        default: "value",
      },
      // 调用页数的接口
      request: {
        type: Function,
        default: () => {},
      },
      // 传入的页码
      page: {
        type: [Number, String],
        default: 1,
      },
      // 是否还有更多数据
      hasMore: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        keyword: "", // 存储关键字用
        loading: false,
      };
    },
    methods: {
      // 请求下一页的数据
      loadMore() {
        // 如果没有更多数据，则不请求
        if (!this.hasMore) {
          return;
        }
        // 如果intercept属性为true则不请求数据，
        if (this.loadMore.intercept) {
          return;
        }
        this.loadMore.intercept = true;
        this.request({
          page: this.page + 1,
          more: true,
          keyword: this.keyword,
        }).then(() => {
          this.loadMore.intercept = false;
        });
      },
      // 选中下拉框没有数据时，自动请求第一页的数据
      focus() {
        if (!this.data.length) {
          this.request({ page: 1 });
        }
      },
      handleSearch(keyword) {
        this.keyword = keyword;
        this.loading = true;
        console.log(keyword);
        this.request({ page: 1, keyword: keyword }).then(() => {
          this.loading = false;
        });
      },
      // 删除选中时，如果请求了关键字，则清除关键字再请求第一页的数据
      clear() {
        if (this.keyword) {
          this.keyword = "";
          this.request({ page: 1 });
        }
      },
    },
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "el-select",
      _vm._g(
        _vm._b(
          {
            directives: [
              {
                name: "loadmore",
                rawName: "v-loadmore",
                value: _vm.loadMore,
                expression: "loadMore"
              }
            ],
            attrs: {
              value: _vm.value,
              filterable: "",
              remote: "",
              "filter-method": _vm.handleSearch,
              loading: _vm.loading,
              clearable: ""
            },
            on: { focus: _vm.focus, clear: _vm.clear }
          },
          "el-select",
          _vm.$attrs,
          false
        ),
        _vm.$listeners
      ),
      [
        _vm._l(_vm.data, function(option) {
          return _c("el-option", {
            key: option.value,
            attrs: { label: option[_vm.dictLabel], value: option[_vm.dictValue] }
          })
        }),
        _vm._v(" "),
        _vm.hasMore
          ? _c("el-option", {
              attrs: { disabled: "", label: "加载中...", value: "-1" }
            })
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

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

  const install = function (Vue) {
    if (install.installed) return;
    if (!Vue.prototype.$ELEMENT) {
      throw new Error("请先安装element-ui");
    }
    Vue.component(__vue_component__.name, __vue_component__);
    Vue.directive('loadmore', loadmore);
  };

  if (window && window.Vue) {
    install(window.Vue);
  }

  var index = {
    install,
    LoadSelect: __vue_component__,
    loadMore: loadmore
  };

  return index;

})));
