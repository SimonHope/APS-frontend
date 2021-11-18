<template>
  <v-app align="center" class="backgroundlogin">
    <v-main id="center">
       
      <v-card elevation="24" class="blocklogin" width="1500px" height="700px">
        <v-row>
          <v-col>
            <v-card color="#f57c00" class="pic-magin">
              <v-img height="300px" width="500px" src="../assets/RKR.png"></v-img>
              <div class="text-login">Academic Petition Service </div>
              
            </v-card>
            
          </v-col>
          <v-col>
            <!-- //ส่วนการกรอก การเข้าใช้งานระบบ -->
          <v-form v-model="valid" class="login-margin" >
            <v-container>
              <!-- ช่อง username -->
              <h1>เข้าสู่ระบบ</h1>
              <br />
              <v-row>
                <v-col align="center">
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

              <!-- ช่อง username -->

              <!-- ช่อง password -->
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="lastname"
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

              <v-btn color="primary" dark> เข้าสู่ระบบ </v-btn>
              <br />
              <h3>หรือ</h3>
              <v-btn color="error" dark> ลืมรหัสผ่าน </v-btn>
            </v-container>
          </v-form>
          <!-- //ส่วนการกรอก การเข้าใช้งานระบบ -->


          </v-col>
        </v-row>
      </v-card>

      
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
};
</script>

<style scoped>
.backgroundlogin {
  background: linear-gradient(#ff993371, #f57b007e);
}
.blocklogin {
  margin: 170px 0px 0px 0px;
}
.login-margin{
  margin: 100px 0px 0px 0px;
}
.pic-magin{
margin: 150px 0px 0px 40px;
}
.text-login{
  font-size: 30px;
  color: aliceblue;
  margin: 0px 0px 0px 0px;
}
</style>