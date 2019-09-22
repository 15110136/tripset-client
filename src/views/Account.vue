<template>
  <div class="account">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="main main-raised">
        <div class="section">
          <div class="container">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <tabs
                  :tab-name="tabNames"
                  plain
                  flex-column
                  color-button="success"
                >
                  <template slot="tab-pane-1">
                    <p>edit porfile</p>
                  </template>
                  <template slot="tab-pane-2">
                    <change-password />
                  </template>
                  <template slot="tab-pane-3">
                    <p>prinvacy and sercurity</p>
                  </template>
                </tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import ChangePassword from "./components/account/ChangePassword";

export default {
  name: "Account",

  components: {
    Tabs,
    ChangePassword
  },

  data: () => ({
    tabNames: ["Chỉnh sửa profile", "Đổi mật khẩu", "Quyền riêng tư và bảo mật"]
  }),

  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },

  computed: {
    headerStyle() {
      return { backgroundImage: `url(${this.header})` };
    }
  }
};
</script>

<style lang="scss">
.account {
  .main {
    width: 80%;
    max-height: 70%;
    height: 70%;
  }
  .section {
    padding: 2rem 0;
  }

  .tab-content {
    width: 70%;
  }
}
</style>
