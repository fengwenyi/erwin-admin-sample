import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '角色名称',
    dataIndex: 'roleName',
  },
  {
    title: '角色标识',
    dataIndex: 'roleCode',
  },
  {
    title: '角色排序',
    dataIndex: 'sortNum',
    width: 200,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 200,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'roleName',
    label: '角色名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formAddSchema: FormSchema[] = [
  {
    field: 'roleName',
    label: '角色名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'roleCode',
    label: '角色标识',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
  },
  {
    field: 'status',
    label: '状态',
    component: 'Switch',
    required: true,
  },
  {
    field: 'sortNum',
    label: '角色排序',
    component: 'InputNumber',
    required: false,
  },
  {
    label: ' ',
    field: 'menuIds',
    slot: 'menu',
    component: 'Input',
  },
];

export const formUpdateSchema: FormSchema[] = [
  {
    field: 'roleName',
    label: '角色名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: '状态',
    component: 'Switch',
    required: true,
  },
  {
    field: 'sortNum',
    label: '角色排序',
    component: 'InputNumber',
    required: false,
  },
  {
    label: ' ',
    field: 'menuIds',
    slot: 'menu',
    component: 'Input',
  },
];
