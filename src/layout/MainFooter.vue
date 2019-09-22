<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#/">
              About Us
            </a>
          </li>
          <li>
            <a href="https:///presentation.creative-tim.com">
              Đối tác
            </a>
          </li>
          <li>
            <a href="https:///blog.creative-tim.com">
              Chính sách
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, sản phẩm tốt nghiệp <md-icon>favorite</md-icon> by K15
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
