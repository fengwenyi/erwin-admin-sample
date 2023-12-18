<template>

  <div>
    <div class="my-container my-top">
      <div class="center">
        <div class="title">会员管理系统</div>
      </div>
    </div>

    <div class="my-container">
      <div class="center">
        <div class="module">
          <div class="module-name">新增与编辑</div>
          <div class="module-content piece-two">
            <div class="box-img">
              <img src="https://images.fengwenyi.com/windrunner/publicize/member/member-add.png" alt=""/>
            </div>
            <div class="box-img mobile-box-top">
              <img src="https://images.fengwenyi.com/windrunner/publicize/member/member-update.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-container">
      <div class="center">
        <div class="module">
          <div class="module-name">会员列表</div>
          <div class="module-content piece-one">
            <img src="https://images.fengwenyi.com/windrunner/publicize/member/member-list.png" alt=""/>
          </div>
        </div>
      </div>
    </div>

    <div class="my-container">
      <div class="center">
        <div class="module">
          <div class="module-name">会员搜索</div>
          <div class="module-content piece-one">
            <img src="https://images.fengwenyi.com/windrunner/publicize/member/member-search.png" alt=""/>
          </div>
          <div class="module-content piece-one">
            <img src="https://images.fengwenyi.com/windrunner/publicize/member/member-search-result.png" alt=""/>
          </div>
        </div>
      </div>
    </div>

    <div class="my-container">
      <div class="center">
        <div class="module">
          <div class="module-name">会员充值与消费</div>
          <div class="module-content piece-two">
            <div class="box-img">
              <img src="https://images.fengwenyi.com/windrunner/publicize/member/member-recharge.png" alt=""/>
            </div>
            <div class="box-img mobile-box-top">
              <img src="https://images.fengwenyi.com/windrunner/publicize/member/member-consumption.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-container">
      <div class="center">
        <div class="module">
          <div class="module-name">权限分隔</div>
          <div class="module-content piece-one">
            <img class="img-member-role" src="https://images.fengwenyi.com/windrunner/publicize/member/member-role.png" alt=""/>
          </div>
        </div>
      </div>
    </div>

    <div class="my-container">
      <div class="center">
        <div class="module">
          <div class="module-name">申请加入</div>
          <div class="module-content piece-one">
            <div class="form-container">
              <BasicForm
                  @register="registerForm"
                  @submit="handleSubmit"
              ></BasicForm>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-container">
      <div class="center">
        <div class="module footer">
          &copy; 2023 Erwin Feng
        </div>
      </div>
    </div>
  </div>

</template>
<script lang="ts">
import { BasicForm, useForm } from "@/components/Form";
import { defineComponent } from "vue";
import { BasicModal } from "@/components/Modal";
import { BasicTree} from "@/components/Tree";
import { formAddSchema } from './index.data';
import { memberOrganApplyJoinApi } from "@/api/member/member";
import {useMessage} from "@/hooks/web/useMessage";

export default defineComponent({
  name: 'OrganApplyJoinMemberIndex',
  components: { BasicTree, BasicModal, BasicForm },
  setup() {

    const { createMessage } = useMessage();

    const [registerForm, { resetFields, validate}] = useForm({
      labelWidth: 100,
      baseColProps: {span: 24},
      schemas: formAddSchema,
      actionColOptions: {
        span: 23,
      },
      submitButtonOptions: {
        text: '提交'
      },
    });

    async function handleSubmit() {
      const values = await validate();
      memberOrganApplyJoinApi(values).then(() => {

        createMessage.success('您的申请已提交成功，审核通过，会以邮件的方式通知您，请注意查收！');

        resetFields();
      });
    }

    return { registerForm, handleSubmit };
  }
})
</script>

<style scoped lang="less">
  .my-container {
    width: 100%;
    min-height: 100px;
    background-color: #eee;
  }
  .center {
    width: 80%;
    margin: 0 auto;
  }

  .module {

    padding-bottom: 100px;

    .module-name {
      font-size: 36px;
      font-weight: 500;
      margin-left: 50px;
      color: #0056d2;
    }
    .module-content {
      margin-top: 30px;
    }
  }

  .my-top {

    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;


    .title {
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      word-spacing: 4px;
      letter-spacing: 4px;
    }
  }

  .piece-two {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .box-img {
      border-radius: 50px;
      background-color: #fff;
      width: calc(50% - 20px);
      display: flex;
      justify-content: center;
      padding: 50px 20px;

      img {
        max-width: 100%;
        max-height: 350px;
        box-shadow: 0 0 10px #999;
      }

    }

  }

  .piece-one {
    border-radius: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    padding: 50px;

    img {
      box-shadow: 0 0 10px #999;
      max-width: 100%;
    }
  }

  .piece-column {
    flex-direction: column;
  }

  .img-member-role {
    max-height: 500px;
  }

  .form-container {
    width: 500px;
    min-height: 472px;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 12px;
    color: #999;
  }

  @media screen and (max-width:1024px) {

    .center {
      width: 92%;
    }

    .module {
      .module-name {
        margin-left: 0;
        display: flex;
        justify-content: center;
      }
    }

    .piece-two {
      flex-direction: column;
      justify-content: center;
      .box-img {
        width: 100%;
        border-radius: 10px;
      }
      .mobile-box-top {
        margin-top: 20px;
      }
    }

    .piece-one {
      padding: 20px;
      border-radius: 10px;
    }
  }
</style>
