<template>
  <v-app>
    <!-- ส่วนของ BAR -->
    <v-app-bar color="#F86624" fixed>
      <v-app-bar-nav-icon @click="drawer = !drawer"
        ><v-icon color="#FFFFFF">mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn fab color="#F86624" icon>
        <v-img height="100px" width="100px" src="../assets/logo.png"> </v-img>
      </v-btn>
      <v-spacer></v-spacer>

      <!-- เมนูออก -->
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#FFFFFF" dark v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="slideexit = !slideexit">
            <v-list-item-title>ออกจากระบบ</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            v-for="menuseting in menuseting"
            :key="menuseting.no"
            router
            :to="menuseting.route"
          >
            <v-list-item-title>{{ menuseting.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- เมนูออก -->
    </v-app-bar>

    <!-- ส่วนของ BAR -->

    <!-- เเถบข้างเเสดงเมนู -->

    <v-navigation-drawer v-model="drawer" app color="#F86624" width="300">
      <!-- ส่วนตัวเลือกเมนู -->
      <v-row>
        <v-col align="center">
          <v-btn fab width="200" height="200" class="profile">
            <v-img class="profile-r" width="200" height="200" src="../assets/5074620687.jpg">
            </v-img>
          </v-btn>
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
            <v-icon color="#FFFFFF"> mdi-{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-color">{{
            menu.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list-item>
      <!-- ส่วนตัวเลือกเมนู -->
    </v-navigation-drawer>
    <!-- เเถบข้างเเสดงเมนู -->
    <router-view></router-view>

    <!-- popup หน้าต่างกดออก -->
    <v-dialog v-model="slideexit" persistent width="800">
      <v-card align ="center">
        <h1>ออกจากระบบ</h1>

        <v-divider></v-divider>
        <br />
        <v-btn fab width="150" height="150" left class="text-pprofile-magin">
          <v-icon>mdi-emoticon-cry-outline</v-icon>
        </v-btn>
        <br />
        <br />
        <h2>กด "ตกลง" เพื่อนยืนยันการออกจากระบบ</h2>
        <br />

        <v-divider></v-divider>
        <v-btn
          color="green darken-1"
          @click="slideexit = false"
          to="/"
          class="btn-margin"
        >
          ตกลง
        </v-btn>

        <v-btn color="red darken-1" @click="slideexit = false"> ยกเลิก </v-btn>
      </v-card>
    </v-dialog>
    <!-- popup หน้าต่างกดออก -->
  </v-app>
</template>

<script>
export default {
  name: "NavbarStudent",
  data: () => ({
    drawer: null,
    slideexit: false,
    menu: [
      { menu: "1", text: "Dashboard", route: "/DashboardSTU", icon: "home" },
      {
        menu: "2",
        text: "คำร้อง / ยื่นคำร้อง",
        route: "/petitionSTU",
        icon: "file-document",
      },
      {
        menu: "3",
        text: "รายงานเสนอเเนะ",
        route: "/reportSTU",
        icon: "alert-octagon",
      },
      {
        menu: "4",
        text: "สถานะเอกสาร/คำร้อง",
        route: "/tarckingSTU",
        icon: "bullseye-arrow",
      },
    ],
    menuseting: [
      { menu: "1", text: "เกี่ยวกับ", route: "/about" },
      { menu: "2", text: "ตั้งค่า", route: "/seting" },
    ],
  }),
};
</script>

<style scope>
.profile {
  margin: 100px 0px 50px 0px;
}
.navback {
  z-index: -1;
}
.text-color {
  color: aliceblue;
}
.btn-margin {
  margin: 30px;
}
.profile-r{
  border-radius: 60%;
}
</style>