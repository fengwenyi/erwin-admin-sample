/**
The routing of this file will not show the layout.
It is an independent new page.
the contents of the file still need to log in to access
 */
import type { AppRouteModule } from '/@/router/types';

// test
// http:ip:port/main-out
export const mainOutRoutes: AppRouteModule[] = [
  {
    path: '/main-out',
    name: 'MainOut',
    component: () => import('/@/views/demo/main-out/index.vue'),
    meta: {
      title: 'MainOut',
      ignoreAuth: true,
    },
  },
  {
    path: '/publicize/member/index',
    name: 'PublicizeMemberIndex',
    component: () => import('/@/views/publicize/member/index.vue'),
    meta: {
      title: '会员系统',
      ignoreAuth: true,
    },
  }
];

export const mainOutRouteNames = mainOutRoutes.map((item) => item.name);
