<template>
  <div class="wrapper login">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Mật khẩu...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <md-field slot="inputs">
                <p class="login__remember-me">Nhớ tài khoản này</p>
                <md-checkbox class="login__remember-me-checkbox" v-model="rememberMe"></md-checkbox>
              </md-field>
              <md-button
                slot="footer"
                class="md-simple md-success md-lg"
                @click="onClickLogin"
              >Đăng nhập</md-button>
              <router-link to="/register" slot="footer">
                <md-button class="md-simple md-success md-lg">Đăng ký</md-button>
              </router-link>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    LoginCard
  },

  bodyClass: "login-page",

  data: () => ({
    email: null,
    password: null,
    rememberMe: false
  }),

  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },

  computed: {
    ...mapState(["isLogined"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    ...mapActions(["onLogin"]),

    onClickLogin() {
      const { email, password, rememberMe } = this;
      this.onLogin({
        user: {
          email,
          password
        },
        rememberMe
      });
    }
  },
  watch: {
    isLogined(val) {
      if (!val) {
        return
      }

      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss">
.login {
  .md-checkbox {
    margin: 0 0 0 1rem;
  }
}
</style>
