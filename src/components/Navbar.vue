<template>
<div>
  <!-- bar -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-light backgroundcolor">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><v-img height="70px" width="200px" src="../assets/logo1.png"></v-img>
        </a>
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <v-fab-transition>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="text-magin">
                <v-tab icon  router-link to="/" > หน้าหลัก</v-tab>
              </li>
            </ul>
          </div>
        </v-fab-transition>
      </div>
    </nav>
    <!-- bar -->
  <router-view></router-view>
</div>
</template>
<script>
export default {
  name: "Navbar",
  data: () => ({
  }),
};
</script>
<style>
.mybody {
  background: linear-gradient(#ff993371, #f57b007e);
}
.backgroundcolor {
  background-color: #f57c00;
}
.text-magin {
  margin: 20px;
  color: #ffffff;
}
</style>

