<template>
  <div id="NavbarUser">
    <!-- Navbar -->
    <v-app-bar color="#FFA726">
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon color="#FFFFFF">
          mdi-menu
        </v-icon>
      </v-app-bar-nav-icon>
      <v-btn icon disabled>
        <v-img height="160px" width="160px" src="../assets/logo.png"> </v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="text-white subtitle-1 mr-4">Last login: {{ lastlogin }}</div>
      <v-btn elevation="2" color="error" @click="slideexit = !slideexit">
        Logout
      </v-btn>
    </v-app-bar>
    <!-- Navbar -->

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app color="#424242" width="300">
      <!-- ส่วนตัวเลือกเมนู -->
      <v-row>
        <v-col align="center">
          <v-btn fab width="auto" height="auto" class="mt-15">
            <v-img
              class="rounded-circle"
              width="150"
              height="150"
              src="../assets/5074620687.jpg"
            >
            </v-img>
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text-white" align="center">
          ชื่อ : {{ firstname }} {{ lastname }}<br />
          สถานะ : {{ status }}
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-list-item
        v-for="menu in menu"
        :key="menu.numforms"
        router
        :to="menu.route"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#FFFFFF">mdi-{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-white">{{
            menu.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list-item>
      <!-- ส่วนตัวเลือกเมนู -->
    </v-navigation-drawer>
    <!-- Sidebar -->

    <!-- Dialog confirm -->
    <v-dialog v-model="slideexit" width="700">
      <v-card align="center" class="pa-10">
        <h1>ออกจากระบบ</h1>
        <v-divider></v-divider>
        <h3>กด "ตกลง" เพื่อยืนยันการออกจากระบบ</h3>
        <v-divider></v-divider>
        <v-btn color="green darken-1" class="text-white mr-5" @click="logout">
          ตกลง
        </v-btn>

        <v-btn
          color="red darken-1"
          class="text-white"
          @click="slideexit = false"
        >
          ยกเลิก
        </v-btn>
      </v-card>
    </v-dialog>
    <!-- Dialog confirm -->
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  name: "NavbarUser",
  data: () => ({
    drawer: null,
    slideexit: false,
    firstname: "",
    lastname: "",
    status: "",
    lastlogin: "",
    menu: [
      { menu: "1", text: "Dashboard", route: "/UserDashboard", icon: "home" },
      {
        menu: "2",
        text: "ส่งคำร้อง",
        route: "/UserPetition",
        icon: "file-document",
      },
      {
        menu: "3",
        text: "ติดตามสถานะคำร้อง/ปัญหา",
        route: "/UserTracking",
        icon: "marker-check",
      },
      {
        menu: "4",
        text: "รายงานปัญหาไม่ระบุตัวตน",
        route: "/UserReport",
        icon: "alert-octagon",
      },
      {
        menu: "5",
        text: "โปรไฟล์",
        route: "/UserProfile",
        icon: "account",
      },
    ],
  }),
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    }
    this.firstname = this.$store.getters.getUser.f_name;
    this.lastname = this.$store.getters.getUser.l_name;
    this.status = this.$store.getters.getUser.status;
    this.lastlogin = this.$store.getters.getUser.last_login;
    this.secretMessage = await AuthService.getSecretContent();
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scope></style>
