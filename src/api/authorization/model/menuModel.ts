import { PageDto, PageTemplate } from "@/api/model/baseModel";
import { RouteMeta } from "vue-router";

export interface MenuVo {
  id: string;
  path: string;
  name: string;
  component: string;
  redirect: string;
  sortNum: number;
  parentId: string;
  icon: string;
  title: string;
  affix: string;
  chineseName: string;
  status: boolean;
}

export interface MenuDto {
  path: string;
  name: string;
  component: string;
  redirect: string;
  sortNum: number;
  parentId: string;
  icon: string;
  title: string;
  affix: string;
  hideMenu: boolean;
  ignoreKeepAlive: boolean;
  currentActiveMenu: string;
  chineseName: string;
  status: boolean;
}

export interface MenuUpdateDto {
  path: string;
  name: string;
  component: string;
  redirect: string;
  sortNum: number;
  parentId: string;
  icon: string;
  title: string;
  affix: string;
  hideMenu: boolean;
  ignoreKeepAlive: boolean;
  currentActiveMenu: string;
  chineseName: string;
  status: boolean;
}

export interface RouteItem {
  id: string;
  path: string;
  component: any;
  meta: RouteMeta;
  name?: string;
  alias?: string | string[];
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
  chineseName: string;
  status: boolean;
}

export interface MenuGetPageDto extends PageDto {}

export type MenuGetPageModel = PageTemplate<MenuVo>;

/**
 * @description: Get menu return value
 */
export type getMenuListResultModel = RouteItem[];

export interface MenuOptionVo {
  id: string;
  chineseName: string;
}
