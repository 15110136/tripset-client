<template>
  <div class="register">
    <div class="wrapper">
      <parallax class="section page-header header-filter" :style="headerStyle">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-30 md-small-size-70 md-xsmall-size-100">
              <h1 class="title">Cùng gia đình gắn kết bên nhau</h1>
              <h4>Tripset là miễn phí, là vui nhộn</h4>
            </div>

            <div class="md-layout-item md-size-70 md-small-size-70 md-xsmall-size-100">
              <register-card header-color="primary">
                <h4 slot="title" class="card-title">Thông tin tài khoản</h4>
                <p slot="description" class="description">Tripset</p>
                <md-field class="md-form-group" slot="inputImage">
                  <div class="md-layout-item md-size-100 md-xsmall-size-100 ml-auto">
                    <div
                      ref="avatar"
                      class="register__img"
                      @click="onClickUploadImage"
                    >
                    </div>
                    <input
                      ref="inputAvatar"
                      class="register__avatar"
                      id="avatar"
                      name="avatar"
                      type="file"
                      accept="image/jpeg, image/png, image/gif"
                      @change="onImageInpuChange"
                    />

                    <label for="itemPicInput" class="imgText frm">
                      Chọn hình đại diện
                      <br />
                      <span>Đảm bảo là kích thước hình ảnh bé hơn 500kb</span>
                    </label>
                    <p class="imgLoadErrors" />
                  </div>
                </md-field>
                <div class="md-layout" slot="inputs">
                  <div class="md-layout-item md-size-50">
                    <md-field class="md-form-group">
                      <md-icon>assignment_ind</md-icon>
                      <label>Username</label>
                      <md-input v-model="username" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field class="md-form-group">
                      <md-icon>email</md-icon>
                      <label>Email...</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout" slot="inputs">
                  <div class="md-layout-item md-size-50">
                    <md-field class="md-form-group">
                      <md-icon>lock</md-icon>
                      <label>Password</label>
                      <md-input v-model="password" type="password"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field class="md-form-group">
                      <md-icon>phone</md-icon>
                      <label>Số điện thoại...</label>
                      <md-input v-model="phone" type="text" maxlength="10"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field class="md-form-group" slot="inputs">
                  <span>Giới tính</span>
                  <div class="flex-column">
                    <md-radio v-model="gender" :value="true">Nam</md-radio>
                    <md-radio v-model="gender" :value="false" class="md-primary">Nữ</md-radio>
                  </div>
                </md-field>
                <md-button
                  slot="footer"
                  class="md-simple md-success md-lg"
                  @click="onRegister"
                >Đăng ký</md-button>
              </register-card>
            </div>
          </div>
        </div>
      </parallax>
      <div class="main main-raised">
        <div class="section">
          <div class="container">
            <div class="md-layout">
              <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
                <h2 class="title text-center">Vì sao bạn nên gia nhập IT FINDER</h2>
              </div>
            </div>
            <div class="features text-center">
              <div class="md-layout">
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-info">
                      <md-icon>chat</md-icon>
                    </div>
                    <h4 class="info-title">Liên lạc nhanh chóng với ITER</h4>
                    <p>
                      Cung cấp cổng giao tiếp giữa ITER và khách hàng một cách
                      nhanh nhất
                    </p>
                  </div>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-success">
                      <md-icon>verified_user</md-icon>
                    </div>
                    <h4 class="info-title">Đảm bảo an toàn</h4>
                    <p>Mọi ITER đều được công ty kiểm tra và theo dõi chặt chẽ</p>
                  </div>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-danger">
                      <md-icon>explore</md-icon>
                    </div>
                    <h4 class="info-title">An toàn, tiện lợi, chất lượng</h4>
                    <p>
                      Các ITER đều được kiểm duyệt trước khi được cấp tài khoản
                      hoạt động
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import RegisterCard from "../components/cards/RegisterCard";
export default {
  components: {
    RegisterCard
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  data: () => ({
    username: '',
    email: '',
    password: '',
    phone: '',
    avatar: '',
    gender: true
  }),

  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },

  methods: {
    ...mapActions('user', [
      'registerUser'
    ]),

    onClickUploadImage () {
      this.$refs.inputAvatar.click();
    },

    onImageInpuChange (evt) {
      const file = evt.currentTarget.files[0];
      const fr = new FileReader();
      const $avatar = this.$refs.avatar

      fr.onload = () => {
        this.setAvatarUrl(file)
        $avatar.style.backgroundImage = `url( ${fr.result} )`;
      };

      if (file) {
        fr.readAsDataURL(file)
      }
    },

    setAvatarUrl (file) {
      this.avatar = file
    },

    onRegister() {
      const { email, username, password, gender, phone, avatar } = this
      this.registerUser({
        email: email,
        username: username,
        password: password,
        phone: phone,
        gender: gender,
        avatar: avatar
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
.flex-column {
  margin-left: 2rem;

  .md-checkbox {
    &-label {
      top: 0;
    }
  }
}
</style>