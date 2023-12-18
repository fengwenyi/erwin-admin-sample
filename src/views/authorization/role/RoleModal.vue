<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm">
      <template #menu="{ model, field }">
        <BasicTree
            v-model:value="model[field]"
            :treeData="treeData"
            :fieldNames="{ title: 'chineseName', key: 'id' }"
            checkable
            toolbar
            title="菜单分配"
        />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formAddSchema, formUpdateSchema } from './role.data';
  import { roleAddApi, roleUpdateApi } from "/@/api/authorization/role";
  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { menuGetAllTreeApi } from '@/api/authorization/menu';

  export default defineComponent({
    name: 'RoleModal',
    components: {BasicTree, BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {

      const isUpdate = ref(true);
      const rowId = ref('');
      const treeData = ref<TreeItem[]>([]);

      const formSchema = computed(() => (!unref(isUpdate) ? formAddSchema : formUpdateSchema));

      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: formSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(treeData).length === 0) {
          treeData.value = (await menuGetAllTreeApi()) as any as TreeItem[];
        }

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }

      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增角色' : '编辑角色'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          if (unref(isUpdate)) {
            roleUpdateApi(rowId.value, values).then(() => {
              closeModal();
              emit('success');
            });
          } else {
            roleAddApi(values).then(() => {
              closeModal();
              emit('success');
            });
          }
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit, treeData };
    },
  });
</script>
