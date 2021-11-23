<template>
  <v-main class="bg-login">
    <Navbar />
    <v-row class="frame-login">
      <v-col align="center">
        <v-row>
          <v-col class="bg-color-logo">
            <v-img height="300px" width="500px" src="../assets/RKR.png"></v-img>
            <div class="text-login">Academic Petition Service</div>
          </v-col>

          <v-col class="bg-color-logo-formslogin">
            <h1 class="margin-login">ลงทะเบียน</h1>

            <!-- ช่อง U-id -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="firstname"
                  label="E-mail"
                  type="username"
                  class="textfield-margin"
                >
                  <template v-slot:prepend>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on"> mdi-account </v-icon>
                      </template>
                      E-mail ของท่าน
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
                  v-model="lastname"
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

            <!-- ช่อง confirm password -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="lastname"
                  label="confirm password"
                  type="password"
                  class="textfield-margin"
                >
                  <template v-slot:prepend>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on"> mdi-lock </v-icon>
                      </template>
                      ยืนยันรหัสผ่าน
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <!-- ช่อง confirm password -->
            <v-row>
              <v-col align="center">
                <v-btn color="primary" width="300" right dark>
                  ลงทะเบียน
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col align="center">
                ท่านได้ลงทะเบียนอยู่เเล้ว?

                <v-btn text color="error" router-link to="/login">
                  เข้าสู่ระบบ
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "signup",
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
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
  color: rgb(0, 0, 0);
  margin: 0px 0px 0px 0px;
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
