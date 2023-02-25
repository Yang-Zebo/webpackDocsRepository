export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "/imgs/logo.jpg",
    "actions": [
      {
        "text": "基础 →",
        "link": "/base/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "💡 最新最热的技术",
        "details": "使用最新 Webpack5 技术"
      },
      {
        "title": "🛠️ 最细致讲解",
        "details": "从基础配置，到高级优化，到项目配置，最后到原理分析"
      },
      {
        "title": "📦 最全面的案例",
        "details": "不同角度实现loader、plugin"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "contributors": [
      {
        "name": "yang-zebo",
        "email": "1282258957@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
