<template>
  <div>
    <v-footer dark padless>
      <v-card flat tile class="text-center" width="100%">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Academic Petition Service Prototype
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <strong
            >Copyright © Academic Petition Service
            {{ new Date().getFullYear() }} All Right Reserved</strong
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
.text-center {
  text-align: center;
  height: 100%;
}
</style>
