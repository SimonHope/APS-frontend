<template>
  <div class="backgroundlogin">
    <!-- <v-content class="mb-16">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Sign Up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="email"
                    label="Email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="comfirmpassword"
                    prepend-icon="mdi-lock"
                    name="Comfirm Password"
                    label="Comfirm Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" to="/">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> -->

    <v-main>
      <v-row>
        <v-col align="center">
          <v-card width="1200" height="600" class="card-login">
            <v-row>
              <v-col class="color">
                <v-card color="#f57c00" class="pic-magin">
                  <v-img
                    height="300px"
                    width="500px"
                    src="../assets/RKR.png"
                  ></v-img>
                  <div class="text-login">Academic Petition Service</div>
                </v-card>
              </v-col>

              <v-col>
                <h1 class="margin-login">ลงทะเบียน</h1>

                <!-- ช่อง U-id -->
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="firstname"
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

                <!-- ช่อง pass -->
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="lastname"
                      label="Re - Password"
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
                <!-- ช่อง pass -->
                <v-row>
                  <v-col align="center">
                    <v-btn color="primary" width="300" right dark>
                      ลงทะเบียน
                    </v-btn>
                  </v-col>
                </v-row>

                
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.backgroundlogin {
  background: linear-gradient(#ff993371, #f57b007e);
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
  color: rgb(0, 0, 0);
  margin: 0px 0px 0px 0px;
}

.backgroundlogin {
  min-height: 100vh;
  background: linear-gradient(#ff8d41, #ffffff);
  overflow: hidden;
}
.card-login {
  margin: 100px 0px 0px 0px;
}
.textfield-margin {
  margin: 0px 30px 0px 0px;
}
.margin-login {
  margin: 100px 0px 40px 0px;
}
.color{}

</style>
