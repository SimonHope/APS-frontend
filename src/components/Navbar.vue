<template>
<v-app>
  <v-app-bar app color="orange" dark  fixed >
    <v-navigation-drawer
      v-model="sidebar"
      class="hidden-sm-and-up"
      absolute
      temporary
      app
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar-nav-icon
      class="hidden-sm-and-up"
      @click.stop="sidebar = !sidebar"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <div class="d-flex align-center">
        
        <v-btn  text  width="100"
          height="60" >
          <router-link to="/" tag="span">
            <v-img
          alt="Vuetify Logo"
          class="shrink"
          contain
          src="../assets/loginnavbar.png"
          transition="scale-transition"
          width="100"
          height="100%"
        />
          </router-link>
        </v-btn>
      </div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn plain v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>


  <router-view></router-view>

  </v-app>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/", icon: "mdi-home" },
        { title: "About", path: "/About", icon: "mdi-information-outline" },
        { title: "Sign Up", path: "/Signup", icon: "mdi-account-plus" },
        { title: "Log In", path: "/Login", icon: "mdi-login" },
      ],
    };
  },
};
</script>

<style>
</style>
