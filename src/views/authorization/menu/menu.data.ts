import { BasicColumn, FormSchema } from '/@/components/Table';
import { menuGetParentOptionListApi } from "@/api/authorization/menu";

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 180,
  },
  {
    title: '菜单名称',
    dataIndex: 'chineseName',
    width: 120,
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '菜单路径',
    dataIndex: 'path',
    width: 120,
  },
  {
    title: '组件',
    dataIndex: 'component',
    width: 120,
  },
  {
    title: '跳转地址',
    dataIndex: 'redirect',
    width: 120,
  },
  {
    title: '排序',
    dataIndex: 'sortNum',
    width: 120,
  },
  {
    title: '父ID',
    dataIndex: 'parentId',
    width: 120,
  },
  {
    title: '图标',
    dataIndex: 'icon',
    width: 120,
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: 120,
  },
  {
    title: '是否固定',
    dataIndex: 'affix',
    width: 120,
  },
  {
    title: '隐藏菜单',
    dataIndex: 'hideMenu',
    width: 120,
  },
  {
    title: '忽略保持激活',
    dataIndex: 'ignoreKeepAlive',
    width: 120,
  },
  {
    title: '当前激活菜单',
    dataIndex: 'currentActiveMenu',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 200,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'chineseName',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formAddSchema: FormSchema[] = [
  {
    field: 'chineseName',
    label: '中文名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'path',
    label: '路径',
    component: 'Input',
    required: true,
  },
  {
    field: 'component',
    label: '组件',
    component: 'Input',
    required: true,
  },
  {
    field: 'redirect',
    label: '跳转地址',
    component: 'Input',
  },
  {
    label: '父菜单',
    field: 'parentId',
    component: 'ApiSelect',
    componentProps: {
      api: menuGetParentOptionListApi,
      resultField: 'content',
      labelField: 'chineseName',
      valueField: 'id',
    },
  },
  {
    field: 'icon',
    label: '图标',
    component: 'Input',
  },
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    required: true,
  },
  {
    field: 'affix',
    label: '是否固定',
    component: 'Input',
  },
  {
    field: 'hideMenu',
    label: '隐藏菜单',
    component: 'Input',
  },
  {
    field: 'ignoreKeepAlive',
    label: '忽略保持激活',
    component: 'Input',
  },
  {
    field: 'currentActiveMenu',
    label: '当前激活菜单',
    component: 'Input',
  },
  {
    field: 'sortNum',
    label: '角色排序',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'status',
    label: '状态',
    component: 'Switch',
    required: true,
  },
];

export const formUpdateSchema: FormSchema[] = [
  {
    field: 'chineseName',
    label: '中文名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'path',
    label: '路径',
    component: 'Input',
    required: true,
  },
  {
    field: 'component',
    label: '组件',
    component: 'Input',
    required: true,
  },
  {
    field: 'redirect',
    label: '跳转地址',
    component: 'Input',
  },
  {
    label: '父菜单',
    field: 'parentId',
    component: 'ApiSelect',
    componentProps: {
      api: menuGetParentOptionListApi,
      resultField: 'content',
      labelField: 'chineseName',
      valueField: 'id',
    },
  },
  {
    field: 'icon',
    label: '图标',
    component: 'Input',
  },
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    required: true,
  },
  {
    field: 'affix',
    label: '是否固定',
    component: 'Input',
  },
  {
    field: 'hideMenu',
    label: '隐藏菜单',
    component: 'Input',
  },
  {
    field: 'ignoreKeepAlive',
    label: '忽略保持激活',
    component: 'Input',
  },
  {
    field: 'currentActiveMenu',
    label: '当前激活菜单',
    component: 'Input',
  },
  {
    field: 'sortNum',
    label: '角色排序',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'status',
    label: '状态',
    component: 'Switch',
    required: true,
  },
];
