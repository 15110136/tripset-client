<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      isLogined: state => state.isLogined
    })
  },

  methods: {
    ...mapActions(["checkRememberUser"])
  },

  watch: {
    $route() {
      if (!this.isLogined) {
        this.$router.push("/login");
      }
    }
  },

  async mounted() {
    await this.checkRememberUser()

    if (!this.isLogined) {
      this.$router.push("/login");
    }
  }
};
</script>
