import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    children: [
      {
        path: '',
        component: () => import('src/pages/Index.vue'),
      },
      {
        path: 'single',
        name: 'SinglePlay',
        component: () => import('src/pages/SinglePlay.vue')
      },
      {
        path: 'multi',
        children: [
          {
            path: '',
            name: 'MultiLobby',
            component: () => import('src/pages/MultiPlayLobby.vue')
          },
          {
            path: ':room',
            name: 'MultiPlay',
            component: () => import('src/pages/MultiPlay.vue')
          }
        ]
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
]

export { routes }
