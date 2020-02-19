export default [
  {
    path: "/contributors",
    component: () => import(/* webpackChunkName: "page--src--pages--contributors-vue" */ "/projects/js/goodwork-landing-page/src/pages/Contributors.vue")
  },
  {
    path: "/faq",
    component: () => import(/* webpackChunkName: "page--src--pages--faq-vue" */ "/projects/js/goodwork-landing-page/src/pages/FAQ.vue")
  },
  {
    path: "/demo",
    component: () => import(/* webpackChunkName: "page--src--pages--demo-vue" */ "/projects/js/goodwork-landing-page/src/pages/Demo.vue")
  },
  {
    path: "/features",
    component: () => import(/* webpackChunkName: "page--src--pages--features-vue" */ "/projects/js/goodwork-landing-page/src/pages/Features.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/projects/js/goodwork-landing-page/src/pages/Index.vue"),
    meta: {
      data: [1,"39bbeb72"]
    }
  },
  {
    path: "/how-it-works",
    component: () => import(/* webpackChunkName: "page--src--pages--how-it-works-vue" */ "/projects/js/goodwork-landing-page/src/pages/HowItWorks.vue")
  },
  {
    path: "/manifesto",
    component: () => import(/* webpackChunkName: "page--src--pages--manifesto-vue" */ "/projects/js/goodwork-landing-page/src/pages/Manifesto.vue")
  },
  {
    path: "/sponsors",
    component: () => import(/* webpackChunkName: "page--src--pages--sponsors-vue" */ "/projects/js/goodwork-landing-page/src/pages/Sponsors.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/projects/js/goodwork-landing-page/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/docs/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--docs-vue" */ "/projects/js/goodwork-landing-page/src/templates/Docs.vue"),
    meta: {
      data: () => import(/* webpackChunkName: "page--src--templates--docs-vue" */ "/projects/js/goodwork-landing-page/.cache/data/route-meta/0.json")
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/projects/js/goodwork-landing-page/node_modules/gridsome/app/pages/404.vue")
  }
]

