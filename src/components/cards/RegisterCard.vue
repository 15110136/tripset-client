<template>
  <md-card class="md-card-register" :class="{ 'md-card-hidden': cardHidden }">
    <md-card-header :class="getClass(headerColor)">
      <slot name="title"></slot>
      <div class="social-line">
        <slot name="buttons"></slot>
      </div>
    </md-card-header>

    <md-card-content>
      <slot name="description"></slot>
      <div class="md-layout">
        <div class="md-layout-item md-size-30 md-small-size-30 md-xsmall-size-100">
          <slot name="inputImage"></slot>
        </div>
        <div class="md-layout-item md-size-70 md-small-size-70 md-xsmall-size-100">
          <slot name="inputs"></slot>
        </div>
      </div>
    </md-card-content>

    <md-card-actions>
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "login-card",
  props: {
    headerColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cardHidden: true
    };
  },
  beforeMount() {
    setTimeout(this.showCard, 400);
  },
  methods: {
    showCard: function() {
      this.cardHidden = false;
    },
    getClass: function(headerColor) {
      return "md-card-header-" + headerColor + "";
    }
  }
};
</script>

<style lang="css"></style>
