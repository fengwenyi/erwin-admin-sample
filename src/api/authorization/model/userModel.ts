import { PageParams, PageTemplate } from '../../model/baseModel';

export interface UserVo {
  id: string;
  username: string;
  nickname: string;
  email: string;
  phone: string;
  role: number;
  createTime: string;
  remark: string;
  status: boolean;
}

/**
 * @description: 用户分页查询参数
 */
export interface UserGetPageParams extends PageParams {
  username: string;
  nickname: string;
}

export type UserGetPageModel = PageTemplate<UserVo>;

export interface UserDto {
  username: string;
  password: string;
  nickname: string;
  email: string;
  phone: string;
  roleIds: string[];
}

export interface UserUpdateDto {
  nickname: string;
  email: string;
  phone: string;
  roleIds: string[];
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}
