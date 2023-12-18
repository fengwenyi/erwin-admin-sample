import { ListTemplate, PageParams, PageTemplate } from "@/api/model/baseModel";

export interface RoleVo {
    id: string;
    roleCode: string;
    roleName: string;
    status: boolean;
    sortNum: number;
}

export type RoleGetOptionListModel = ListTemplate<RoleVo>;

export interface RoleGetPageParams extends PageParams {
    roleName: string;
}

export type RoleGetPageModel = PageTemplate<RoleVo>;

export interface RoleDto {
    roleCode: string;
    roleName: string;
    status: boolean;
    sortNum: number;
}

export interface RoleUpdateDto {
    roleName: string;
    status: boolean;
    sortNum: number;
}
