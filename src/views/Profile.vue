<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img :src="avatar" alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                </div>
                <div class="name">
                  <h3 class="title md-layout-item">{{ username }}</h3>
                  <ul class="infos">
                    <div class="md-layout md-gutter md-alignment-center">
                      <li class="md-layout-item md-medium-size-33 md-xsmall-size-100">
                        {{ trips }}
                        <strong>trips</strong>
                      </li>
                      <li class="md-layout-item md-medium-size-33 md-xsmall-size-100">
                        {{ followers }}
                        <strong>người theo dõi</strong>
                      </li>
                      <li class="md-layout-item md-medium-size-33 md-xsmall-size-100">
                        {{ trips }}
                        <strong>theo dõi</strong>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div class="md-layout edit_profile">
                <md-button class="md-simple md-success md-layout-item">Chỉnh sửa trang cá nhân</md-button>
                <div class="md-layout-item">
                  <md-button
                    class="md-simple md-success md-just-icon md-round"
                    @click="openSetting = true"
                  >
                    <md-icon>settings_applications</md-icon>
                  </md-button>
                  <modal v-if="openSetting" @close="openSettingModal">
                    <template slot="header">
                      <md-button
                        class="md-simple md-just-icon md-round modal-default-button"
                        @click="openSettingModal"
                      >
                        <md-icon>clear</md-icon>
                      </md-button>
                    </template>

                    <template slot="body">
                      <md-list>
                        <md-list-item>
                          <md-button class="modal-btn md-success md-simple md-round">Đổi mật khẩu</md-button>
                        </md-list-item>
                        <md-list-item>
                          <md-button class="modal-btn md-warning md-simple md-round">Khoá tài khoản</md-button>
                        </md-list-item>
                        <md-list-item>
                          <md-button
                            class="modal-btn md-danger md-simple md-round"
                            @click="onClickLogout"
                          >Đăng xuất</md-button>
                        </md-list-item>
                      </md-list>
                    </template>
                  </modal>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>{{ description }}</p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Strips', 'Saved', 'Favorite']"
              :tab-icon="['camera', 'palette', 'favorite']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane1[0].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane2[0].image" class="rounded" />
                    <img :src="tabPane2[1].image" class="rounded" />
                    <img :src="tabPane2[2].image" class="rounded" />
                    <img :src="tabPane2[2].image" class="rounded" />
                    <img :src="tabPane2[2].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane2[3].image" class="rounded" />
                    <img :src="tabPane2[4].image" class="rounded" />
                    <img :src="tabPane2[4].image" class="rounded" />
                    <img :src="tabPane2[4].image" class="rounded" />
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded" />
                    <img :src="tabPane3[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded" />
                    <img :src="tabPane3[3].image" class="rounded" />
                    <img :src="tabPane3[4].image" class="rounded" />
                    <img :src="tabPane3[4].image" class="rounded" />
                    <img :src="tabPane3[4].image" class="rounded" />
                    <img :src="tabPane3[4].image" class="rounded" />
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, Modal } from "@/components";
import { mapState } from "vuex";
export default {
  components: {
    Tabs,
    Modal
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ],
      img: require("@/assets/img/faces/christian.jpg"),
      openSetting: false
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    }
  },
  computed: {
    ...mapState({
      avatar: state => state.user && state.user.avatar,
      username: state => state.user && state.user.username,
      trips: state => state.user.trips && state.user.trips.length,
      followers: state => state.user.followers && state.user.followers.length,
      follows: state => state.user.follows && state.user.follows.length,
      description: state => state.user && state.user.description
    }),

    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    openSettingModal () {
      this.openSetting = false
    },
    onClickLogout () {
      console.log(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.infos {
  list-style-type: none;
}

.modal-body {
  .md-button {
    width: 100%;
  }
  .modal-btn {
    font-weight: bold;
  }
}

.profile-tabs /deep/ {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
