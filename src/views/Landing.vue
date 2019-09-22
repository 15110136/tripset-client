<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Tripset giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn</h1>
            <h4>
              Tripset là nơi chia sẻ những khoảnh khắc đáng nhớ của mỗi người, là nơi tìm kiếm địa điểm một cách nhanh chóng và chính xác
            </h4>
            <br>
            <md-button href="/register" class="md-success md-lg">
              <i class="fas fa-play"></i> Đăng ký ngay
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Những tính năng nổi bật của Tripset</h2>
              <h5 class="description">Cẩm nang du lịch trong tầm tay</h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">Kết nối mọi người với nhau</h4>
                  <p>Cung cấp nơi giao lưu trò chuyện cho mọi người</p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">Đảm bảo an toàn</h4>
                  <p>Mọi thông tin, dữ liệu của người dùng đều là bào mật</p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>explore</md-icon>
                  </div>
                  <h4 class="info-title">Tiện lợi, chất lượng</h4>
                  <p>Công cụ tìm kiếm dễ dàng, chính xác</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Founder Team</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      >
                    </div>
                    <h4 class="card-title">
                      Đàm Nhất Thống
                      <br>
                      <small class="card-description text-muted">Developer</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">Luôn tự tin và lạc quan</p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      >
                    </div>
                    <h4 class="card-title">
                      Phạm Thành Phương
                      <br>
                      <small class="card-description text-muted">Developer</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some
                        <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Góp ý, trở thành đối tác</h2>
              <h4 class="text-center description">
                Để lại tên và số điện thoại chung tôi luôn chào đón bạn.
               Cùng nhau thành công
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Họ và Tên</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Địa chỉ email</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-30">
                    <md-field>
                      <label>Số điện thoại</label>
                      <md-input v-model="phone" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Ghi chú</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-success">Gửi</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg-landing.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/thong.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/phuong.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      phone: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
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
</style>
