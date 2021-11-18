<template>
  <v-app align="center" class="backgroundlogin">
    <v-main id="center">
      <section>
        <img src="../assets/star.png" data-speed="-1" class="layer" />
        <img src="../assets/moon.png" data-speed="8" class="layer" />
        <img src="../assets/mtb.png" data-speed="2" class="layer" />
        <h2 class="text1" id="text"></h2>
        <img src="../assets/mtf.png" data-speed="-3" class="layer" />

        <div class="header">
          <a class="logo">
            <div>
              <v-img height="128" width="128" src="../assets/logo1.png">
              </v-img>
            </div>
            APS</a
          >
          <v-spacer></v-spacer>

          <ul>
            <li><router-link to="/" class="active">หน้าหลัก</router-link></li>
          </ul>
        </div>

        <v-card elevation="24" class="framlogin" width="500px" height="400px">
          <!-- //ส่วนการกรอก การเข้าใช้งานระบบ -->
          <v-fab-transition>
            <v-form>
              <v-container>
                <!-- ช่อง username -->
                <h1>เข้าสู่ระบบ</h1>
                <br />
                <v-row>
                  <v-col align="center">
                    <v-text-field
                      v-model="username"
                      label="U-id"
                      type="username"
                      class="textfield-margin"
                    >
                      <template v-slot:prepend>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-icon v-on="on"> mdi-account </v-icon>
                          </template>
                          ใส่รหัสผ่านตามที่หน่วยงานของท่านได้เเจ้งไว้!
                        </v-tooltip>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
                <!-- ช่อง username -->

                <!-- ช่อง password -->
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                      class="textfield-margin-pass"
                    >
                      <template v-slot:prepend>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-icon v-on="on"> mdi-lock </v-icon>
                          </template>
                          ใส่รหัสผ่าน
                        </v-tooltip>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
                <!-- ช่อง password -->

                <v-btn color="primary" @click="login" dark> เข้าสู่ระบบ </v-btn>
                <br />
                <!-- <h3>หรือ</h3>
                <v-btn color="error" dark> ลืมรหัสผ่าน </v-btn> -->
              </v-container>
            </v-form>
            <!-- //ส่วนการกรอก การเข้าใช้งานระบบ -->
          </v-fab-transition>
        </v-card>
      </section>
    </v-main>
  </v-app>
</template>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        console.log(credentials);
        const response = await AuthService.login(credentials);
        this.msg = response.msg;
        const token = response.token;
        const user = response.user;
        this.$store.dispatch("login", { token, user });
        if (user.status == "student") {
          this.$router.push("/DashboardSTU");
        } else if (user.status == "officer") {
          this.$router.push("/DashboardOfficer");
        } else if (user.status == "agent") {
          this.$router.push("/DashboardHofficer");
        } else if (user.status == "admin") {
          this.$router.push("/DashboarAD");
        }
        localStorage.setItem("token", token);
        localStorage.setItem("UserData", JSON.stringify(user));
      } catch (error) {
        this.msg = error.response.data.msg;
        console.log(error.data);
      }
    },
  },
};
</script>

<style scoped>
.framlogin {
  margin: 1% 0% 0% 0%;
}
.textfield-margin {
  margin: 0% 30% 0% 30%;
}
.textfield-margin-pass {
  margin: 0% 30% 2% 30%;
}

.backgroundlogin {
  min-height: 100vh;
  background: linear-gradient(#ff8d41, #ffffff);
  overflow: hidden;
}
</style>
