<template>
  <NavBar />
</template>

<script>
import "./assets/CSS/MyCSS.css";
import NavBar from "./components/NavBar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
.sidebarToggle {
  font-size: 16px;
  background-color: #c5c6c7;
  color: rgb(0, 0, 0, 0.8);
  margin-left: -19px;
  z-index: 999;
  border-radius: 50px;
  outline: none !important;
  box-shadow: none !important;
  transition: all 0.8s ease;
}
</style>