const path = require('path');

export default {
  hd: true,
  exportStatic: {
    htmlSuffix: true,
  },
  plugins: [
    ['umi-plugin-datahub', {      // 数据支持的插件
      proxy: {
        '^/restapi': {   // 正则匹配
          hub: 'eleme-demo',
        },
      },
      store: path.join(__dirname, 'data'),
    }],
  ],
  disableServiceWorker: true,
  disableDynamicImport: !!process.env.COVERAGE,
};
