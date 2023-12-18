import { defHttp } from '/@/utils/http/axios';
import { RoleDto, RoleGetOptionListModel, RoleGetPageModel, RoleGetPageParams, RoleUpdateDto } from "./model/roleModel";

enum Api {
    OptionList = '/admin/sys/role/optionList',
    GetPage = '/admin/sys/role/page',
    Add = '/admin/sys/role',
}

export const roleGetOptionListApi = () =>
    defHttp.get<RoleGetOptionListModel>({ url: Api.OptionList });

export const roleGetPageApi = (params: RoleGetPageParams) =>
  defHttp.get<RoleGetPageModel>({ url: Api.GetPage, params });

export const roleDeleteApi = (id: string) =>
  defHttp.delete({ url: `/admin/sys/role/${id}` });

export const roleAddApi = (dto: RoleDto) =>
  defHttp.post({ url: Api.Add, params: dto });

export const roleUpdateApi = (id: string, dto: RoleUpdateDto) =>
  defHttp.put({ url: `/admin/sys/role/${id}`, params: dto });
