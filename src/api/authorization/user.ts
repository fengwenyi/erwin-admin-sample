import { defHttp } from '/@/utils/http/axios';
import { UserGetPageParams, UserGetPageModel, UserDto, UserUpdateDto, UserVo, GetUserInfoModel } from './model/userModel';

enum Api {
  UserGetPage = '/admin/sys/user/page',
  CheckUsernameExist = '/admin/sys/user/checkUsernameExist',
  UserAdd = '/admin/sys/user',
  GetUserInfo = '/user/info',
  UserGetPermission = '/user/permission-list',
  Logout = '/user/logout',
}

export const userGetPageApi = (params: UserGetPageParams) =>
  defHttp.get<UserGetPageModel>({ url: Api.UserGetPage, params });

export const userCheckUsernameExistApi = (username: string) =>
    defHttp.post({ url: Api.CheckUsernameExist, params: { username } }, { errorMessageMode: 'none' });

export const userAddApi = (dto: UserDto) =>
    defHttp.post({ url: Api.UserAdd, params: dto });

export const userUpdateApi = (id: string, dto: UserUpdateDto) =>
    defHttp.put({ url: `/admin/sys/user/${id}`, params: dto });

export const userDeleteApi = (id: string) =>
    defHttp.delete({ url: `/admin/sys/user/${id}` });

export const userGetDetailApi = (id: string) =>
    defHttp.get<UserVo>({ url: `/admin/sys/user/${id}` });

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getUserPermission() {
  return defHttp.get<string[]>({ url: Api.UserGetPermission });
}

export function doLogout() {
  return defHttp.post({ url: Api.Logout });
}
