export default [
  {
    path: "/contributors",
    component: () => import(/* webpackChunkName: "page--src--pages--contributors-vue" */ "/src/js/goodwork-landing-page/src/pages/Contributors.vue")
  },
  {
    path: "/faq",
    component: () => import(/* webpackChunkName: "page--src--pages--faq-vue" */ "/src/js/goodwork-landing-page/src/pages/FAQ.vue")
  },
  {
    path: "/demo",
    component: () => import(/* webpackChunkName: "page--src--pages--demo-vue" */ "/src/js/goodwork-landing-page/src/pages/Demo.vue")
  },
  {
    path: "/features",
    component: () => import(/* webpackChunkName: "page--src--pages--features-vue" */ "/src/js/goodwork-landing-page/src/pages/Features.vue")
  },
  {
    path: "/how-it-works",
    component: () => import(/* webpackChunkName: "page--src--pages--how-it-works-vue" */ "/src/js/goodwork-landing-page/src/pages/HowItWorks.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/src/js/goodwork-landing-page/src/pages/Index.vue"),
    meta: {
      data: [1,"41c7eaf2"]
    }
  },
  {
    path: "/sponsors",
    component: () => import(/* webpackChunkName: "page--src--pages--sponsors-vue" */ "/src/js/goodwork-landing-page/src/pages/Sponsors.vue")
  },
  {
    path: "/manifesto",
    component: () => import(/* webpackChunkName: "page--src--pages--manifesto-vue" */ "/src/js/goodwork-landing-page/src/pages/Manifesto.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/src/js/goodwork-landing-page/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/docs/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--docs-vue" */ "/src/js/goodwork-landing-page/src/templates/Docs.vue"),
    meta: {
      data: [1,"7c5b5373"]
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/src/js/goodwork-landing-page/node_modules/gridsome/app/pages/404.vue")
  }
]

