import { boot } from 'quasar/wrappers';
import { start, registerMicroApps, initGlobalState } from 'qiankun';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  console.log('[qiankun]: 123');

  // 重写函数
  // const _wr: any = function (type: string): any {
  //   const orig = (window as any).history[type];
  //   return function () {
  //     const rv: any = orig.apply(this, arguments);
  //     const e: any = new Event(type);
  //     e.arguments = arguments;
  //     window.dispatchEvent(e);
  //     return rv;
  //   };
  // };

  // window.history.pushState = _wr('pushState');

  // 1. 要加载的子应用列表
  const apps = [
    {
      name: 'sub-react', // 子应用的名称
      entry: '//localhost:9001', // 默认会加载这个路径下的html，解析里面的js
      activeRule: '/sub-react', // 匹配的路由
      container: '#sub-app', // 加载的容器
    },
    {
      name: 'sub-vue', // 子应用的名称
      entry: '//localhost:9002', // 默认会加载这个路径下的html，解析里面的js
      activeRule: '/sub-vue', // 匹配的路由
      container: '#sub-app', // 加载的容器
    },
  ];

  // 2. 注册子应用
  registerMicroApps(apps, {
    beforeLoad: [async (app) => console.log('before load', app.name)],
    beforeMount: [async (app) => console.log('before mount', app.name)],
    afterMount: [async (app) => console.log('after mount', app.name)],
  });

  const state = { count: 1 };

  const actions = initGlobalState(state);
  // 主项目项目监听和修改
  actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });
  actions.setGlobalState(state);

  start(); // 3. 启动微服务
});
