<template>
  <div id="NavbarAdmin">
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
      <div class="text-white title mr-4">Last login:{{ lastlogin }}</div>
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
          ชื่อ : <br />
          สถานะ :
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
  name: "NavbarAdmin",
  data: () => ({
    drawer: null,
    slideexit: false,
    lastlogin: "12 October 2021",
    menu: [
      {
        menu: "1",
        text: "Dashboard",
        route: "/AdminDashboard",
        icon: "home",
      },
      {
        menu: "2",
        text: "ติดตามสถานะคำร้อง/ปัญหา",
        route: "/AdminTracking",
        icon: "account-group",
      },
      {
        menu: "3",
        text: "การอนุมัติ",
        route: "/AdminViewApproval",
        icon: "form-select",
      },
      {
        menu: "4",
        text: "การรายงานปัญหา",
        route: "/AdminViewReport",
        icon: "account-check",
      },
      {
        menu: "5",
        text: "จัดการ Chief",
        route: "/AdminChiefManagement",
        icon: "account-star",
      },
      {
        menu: "6",
        text: "จัดการ Secretary",
        route: "/AdminSecretaryManagement",
        icon: "book",
      },
      {
        menu: "7",
        text: "จัดการ Officer",
        route: "/AdminOfficerManagement",
        icon: "book",
      },
      {
        menu: "8",
        text: "จัดการ User",
        route: "/AdminUserManagement",
        icon: "book",
      },
      { menu: "9", text: "โปรไฟล์", route: "/AdminProfile", icon: "book" },
    ],
  }),
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    }
    this.username = this.$store.getters.getUser.username;
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
