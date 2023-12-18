import { userCheckUsernameExistApi } from '/@/api/authorization/user';
import { roleGetOptionListApi } from '/@/api/authorization/role';
import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: '角色',
    dataIndex: 'roleNames',
  },
  {
    title: '注册时间',
    dataIndex: 'registerTime',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formAddSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            userCheckUsernameExistApi(value)
                .then(() => resolve())
                .catch((err) => {
                  reject(err.message || '验证失败');
                });
          });
        },
      },
    ],
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    required: true,
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },
  {
    label: '手机号码',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
  },
  {
    field: 'status',
    label: '状态',
    component: 'Switch',
    required: true,
  },
  {
    label: '角色',
    field: 'roleIds',
    component: 'ApiSelect',
    componentProps: {
      api: roleGetOptionListApi,
      resultField: 'content',
      labelField: 'roleName',
      valueField: 'id',
      mode: 'multiple',
    },
    required: true,
  },
];

export const formUpdateSchema: FormSchema[] = [
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },
  {
    label: '手机号码',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
  },
  {
    field: 'status',
    label: '状态',
    component: 'Switch',
    required: true,
  },
  {
    label: '角色',
    field: 'roleIds',
    component: 'ApiSelect',
    componentProps: {
      api: roleGetOptionListApi,
      resultField: 'content',
      labelField: 'roleName',
      valueField: 'id',
      mode: 'multiple',
    },
    required: true,
  },
];
