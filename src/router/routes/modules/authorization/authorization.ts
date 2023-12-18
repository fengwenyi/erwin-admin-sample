import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const authorization: AppRouteModule = {
  path: '/authorization',
  name: 'Authorization',
  component: LAYOUT,
  redirect: '/authorization/user',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.authorization.moduleName'),
  },
  children: [
    {
      path: 'user',
      name: 'User',
      meta: {
        title: t('routes.authorization.userManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/authorization/user/index.vue'),
    },
    {
      path: 'user_detail/:id',
      name: 'UserDetail',
      meta: {
        hideMenu: true,
        title: t('routes.authorization.userDetail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/authorization/user',
      },
      component: () => import('/src/views/authorization/user/UserDetail.vue'),
    },
    {
      path: 'role',
      name: 'Role',
      meta: {
        title: t('routes.authorization.roleManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/authorization/role/index.vue'),
    },
    {
      path: 'menu',
      name: 'Menu',
      meta: {
        title: t('routes.authorization.menuManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/authorization/menu/index.vue'),
    },
  ],
};

export default authorization;
