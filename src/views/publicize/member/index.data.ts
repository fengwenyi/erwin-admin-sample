import { FormSchema } from '/@/components/Table';

export const formAddSchema: FormSchema[] = [
  {
    field: 'organName',
    label: '门店名称',
    component: 'Input',
    required: true,
    rules: [
      {
        required: true,
        message: '请输入门店名称',
      },
    ],
  },
  {
    field: 'adminPhone',
    label: '管理员手机号',
    component: 'Input',
    required: true,
    rules: [
      {
        required: true,
        message: '请输入管理员手机号',
      },
    ],
  },
  {
    field: 'adminName',
    label: '管理员姓名',
    component: 'Input',
    required: true,
    rules: [
      {
        required: true,
        message: '请输入管理员姓名',
      },
    ],
  },
  {
    field: 'cashierPhone',
    label: '收银员手机号',
    component: 'Input',
  },
  {
    field: 'cashierName',
    label: '收银员姓名',
    component: 'Input',
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'Input',
    required: true,
    rules: [
      {
        required: true,
        message: '请输入邮箱',
      },
    ],
  },
];

