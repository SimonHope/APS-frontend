<template>
  <div id="NavbarOfficer">
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
// import AuthService from "@/services/AuthService.js";
export default {
  name: "NavbarOfficer",
  data: () => ({
    drawer: null,
    slideexit: false,
    lastlogin: "12 October 2021",
    menu: [
      {
        menu: "1",
        text: "Dashboard",
        route: "/OfficerDashboard",
        icon: "home",
      },
      {
        menu: "2",
        text: "จัดการคำร้อง",
        route: "/OfficerPetitionManagement",
        icon: "file-document",
      },
      {
        menu: "3",
        text: "ติดตามสถานะคำร้อง/ปัญหา",
        route: "/OfficerTracking",
        icon: "bullseye-arrow",
      },
      {
        menu: "4",
        text: "ข้อมูลผู้ใช้งาน",
        route: "/OfficerTracking",
        icon: "bullseye-arrow",
      },
    ],
    menuseting: [
      { menu: "1", text: "เกี่ยวกับ", route: "/aboutme" },
      { menu: "2", text: "ตั้งค่า", route: "/seting" },
    ],
  }),
  // async created() {
  //   if (!this.$store.getters.isLoggedIn) {
  //     this.$router.push("/login");
  //   }
  //   this.username = this.$store.getters.getUser.username;
  //   this.secretMessage = await AuthService.getSecretContent();
  // },
  // methods: {
  //   logout() {
  //     localStorage.clear();
  //     this.$store.dispatch("logout");
  //     this.$router.push("/login");
  //   },
  // },
};
</script>

<style scope></style>
