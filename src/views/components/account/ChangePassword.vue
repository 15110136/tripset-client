<template>
  <div class="change-password">
    <div class="change-password__header">
      <div class="change-password__avatar-wrapper">
        <img :src="avatar" name="avatar" />
      </div>
      <h3 class="name-profile">{{ name }}</h3>
    </div>
    <div class="change-password__body">
      <div class="md-layout">
        <div class="change-password__body-left md-layout-item md-size-30">
          <p>Password cũ</p>
          <p>Password mới</p>
          <p>Xác nhận password mới</p>
        </div>
        <div class="change-password__body-right md-layout-item md-size-70">
          <md-field>
            <md-input
              v-model="oldPassword"
              type="password"
              placeholder="Mật khẩu cũ"
            ></md-input>
          </md-field>
          <md-field>
            <md-input
              v-model="newPassword"
              type="password"
              placeholder="Mật khẩu mới"
            ></md-input>
          </md-field>
          <md-field>
            <md-input
              v-model="confirmPassword"
              type="password"
              placeholder="Xác nhận lại mật khẩu"
            ></md-input>
          </md-field>
          <md-button class="md-success">Đổi mật khẩu</md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ChangePassword",

  data: () => ({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }),

  computed: {
    ...mapState({
      avatar: state => (state.user && state.user.avatar) || "",
      name: state => (state.user && state.user.username) || ""
    })
  }
};
</script>

<style lang="scss">
.change-password {
  padding: 2rem;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    .name-profile {
      color: #3c4858;
    }
  }

  &__avatar-wrapper {
    width: 38px;
    height: 38px;
  }

  &__body-left {
    p {
      margin-top: 2rem;
    }
  }
}
</style>
