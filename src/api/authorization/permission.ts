import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetPermCode = '/admin/sys/permission/list',
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}
