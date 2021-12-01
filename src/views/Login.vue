<template>
  <v-main class="bg-login">
    <Navbar />
    <v-row class="frame-login">
      <v-col align="center">
        <v-row>
          <v-col class="bg-color-logo">
            <v-img height="300px" width="500px" src="../assets/RKR.png"></v-img>
            <div class="text-login text-white">Academic Petition Service</div>
          </v-col>

          <v-col class="bg-color-logo-formslogin">
            <h1 class="margin-login">เข้าสู่ระบบ</h1>

            <!-- ช่อง Email -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
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
            <!-- ช่อง U-id -->

            <!-- ช่อง pass -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  class="textfield-margin"
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
            <!-- ช่อง pass -->
            <v-row>
              <v-col align="center">
                <v-btn color="primary" @click="login" width="300" right dark>
                  เข้าสู่ระบบ
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col align="center">
                ท่านลืมรหัสผ่านหรือเปล่า?

                <v-btn text color="error" @click="dialogforgot = !dialogforgot">
                  ลืมรหัสผ่าน
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- dialog ลืมรหัสผ่าน -->

    <v-dialog v-model="dialogforgot" persistent width="500">
      <v-card align="center">
        <br />
        <h1 class="h1-forgot">ลืมรหัสผ่าน</h1>
        <v-img width="500px" src="../assets/iforgotpass.png"></v-img>

        <v-text-field
          v-model="forgotEmail"
          label="ใส่ E-mail ที่ท่านลงทะเบียน"
          type="E-mail"
          class="email-forgot-margin"
        >
          <template v-slot:prepend>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-lock </v-icon>
              </template>
              ใส่ E-mail ที่ท่านลงทะเบียน
            </v-tooltip>
          </template>
        </v-text-field>

        <v-divider></v-divider>
        <v-btn color="green darken-1" text @click="submit">
          ตกลง
        </v-btn>
        <v-btn color="red darken-1" text @click="dialogforgot = false">
          ฉันพอเริ่มจำรหัสผ่านได้เเล้ว!
        </v-btn>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="timeout" color="#2E7D32">
      ส่งลิงค์เเก้ไขรหัสผ่านไปยังที่ E-mailที่ท่านเเจ้งมาเเล้ว ☺
    </v-snackbar>

    <!-- dialog ลืมรหัสผ่าน -->
  </v-main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AuthService from "@/services/AuthService.js";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      msg: "",
      forgotEmail: "",
      snackbar: false,
      dialogforgot: false,
      timeout: 2000,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async login() {
      try {
        const credentials = {
          email: this.email,
          password: this.password,
        };
        const response = await AuthService.login(credentials);
        this.msg = response.msg;
        const token = response.token;
        const user = response.user;
        this.$store.dispatch("login", { token, user });
        if (user.status == "user") {
          this.$router.push("/UserDashboard");
        } else if (user.status == "officer") {
          this.$router.push("/OfficerDashboard");
        } else if (user.status == "chief") {
          this.$router.push("/ChiefDashboard");
        } else if (user.status == "secretary") {
          this.$router.push("/SecretaryDashboard");
        } else if (user.status == "admin") {
          this.$router.push("/AdminDashboard");
        }
        localStorage.setItem("token", token);
        localStorage.setItem("UserData", JSON.stringify(user));
      } catch (error) {
        this.msg = error.response.data.msg;
        console.log(error.data);
      }
    },

    submit: function() {
      this.dialogforgot = false;
      this.snackbar = true;
    },
  },
};
</script>

<style scoped>
.email-forgot-margin {
  margin: 0px 10px 0px 10px;
}
.blocklogin {
  margin: 170px 0px 0px 0px;
}
.login-margin {
  margin: 100px 0px 0px 0px;
}
.pic-magin {
  margin: 100px 0px 0px 40px;
}
.text-login {
  font-size: 30px;
}
.bg-login {
  background-color: #f7c5a8;
  height: 100%;
}
.card-login {
  margin: 100px 0px 0px 0px;
}
.textfield-margin {
  margin: 0px 30px 0px 0px;
}
.margin-login {
  margin: 50px 0px 40px 0px;
}
.bg-color-logo {
  background-color: #ff8d41;
}
.bg-color-logo-formslogin {
  background-color: #ffffff;
}
.frame-login {
  margin: 50px 50px 0px 50px;
}
</style>
