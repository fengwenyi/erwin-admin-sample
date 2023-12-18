import { defHttp } from '/@/utils/http/axios';
import {
  MenuGetPageDto,
  MenuGetPageModel,
  MenuDto,
  MenuUpdateDto,
  getMenuListResultModel,
  MenuOptionVo
} from './model/menuModel';

enum Api {
  GetPage = '/admin/sys/menu/page',
  Add = '/admin/sys/menu',
  GetTree = '/sign-in-user/menu-tree',
  GetAllTree = '/admin/sys/menu/all-tree',
  GetParentOptionList = '/admin/sys/menu/parent-option-list',
}

export const menuGetPageApi = (params: MenuGetPageDto) =>
  defHttp.get<MenuGetPageModel>({ url: Api.GetPage, params });

export const menuDeleteApi = (id: string) =>
  defHttp.delete({ url: `/admin/sys/menu/${id}` });

export const menuAddApi = (dto: MenuDto) =>
  defHttp.post({ url: Api.Add, params: dto });

export const menuUpdateApi = (id: string, dto: MenuUpdateDto) =>
  defHttp.put({ url: `/admin/sys/menu/${id}`, params: dto });

export const menuGetTreeApi = () => {
  return defHttp.get<getMenuListResultModel>({ url: Api.GetTree });
};

export const menuGetAllTreeApi = () => {
  return defHttp.get<getMenuListResultModel>({ url: Api.GetAllTree });
};

export const menuGetParentOptionListApi = () => {
  return defHttp.get<MenuOptionVo[]>({ url: Api.GetParentOptionList });
};
