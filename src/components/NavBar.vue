<template>
  <div class="page">
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-logo-container">
          <div class="logo-container">
            <img class="logo-sidebar" src="../assets/LogoSenzaSfondo.png" />
          </div>
          <div class="brand-name-container">
            <p class="brand-name">Translator</p>
          </div>
        </div>
      </div>
      <div class="sidebar-body">
        <ul class="navigation-list">
          <li class="navigation-list-item">
            <router-link class="navigation-link" to="/">
              <div class="row">
                <div class="col-2">
                  <i class="fas fa-home"></i>
                </div>
                <div class="col-10">Home</div>
              </div>
            </router-link>
          </li>
          <li class="navigation-list-item">
            <router-link class="navigation-link" to="/team">
              <div class="row">
                <div class="col-2">
                  <i class="fas fa-users"></i>
                </div>
                <div class="col-10">Team</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="content">
      <div class="navigationBar">
        <button
          id="sidebarToggle"
          class="btn sidebarToggle"
          @click="ShowSideBar()"
        >
          <i class="fas fa-bars"></i>
        </button>
        <h1 style="margin-left: 30px">My Translator using Deepl.com</h1>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import "../assets/CSS/MyCSS.css";
export default {
  name: "NavBar",
  methods: {
    ShowSideBar() {
      let sidebarToggle = document.querySelector(".sidebarToggle");
      sidebarToggle.addEventListener("click", function () {
        document.querySelector("body").classList.toggle("active");
        document.getElementById("sidebarToggle").classList.toggle("active");
      });
    },
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

.sidebarToggle:hover {
  color: white;
}

.sidebarToggle.active {
  margin-left: 10px;
}
</style>
