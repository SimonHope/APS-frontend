<template>
  <v-app-bar app color="orange">
    <!-- <v-navigation-drawer v-model="sidebar" class="hidden-sm-and-up" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->

    <v-navigation-drawer v-model="sidebar" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar-nav-icon
      class="hidden-sm-and-up"
      @click.stop="sidebar = !sidebar"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">
        {{ appTitle }}
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn plain v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appTitle: "Academic Petition Service",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/", icon: "mdi-home" },
        { title: "Sign Up", path: "/signup", icon: "mdi-account-plus" },
        { title: "Log In", path: "/login", icon: "mdi-login" },
      ],
    };
  },
};
</script>

<style></style>
