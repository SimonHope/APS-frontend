<template>
  <div class="login">
    <!-- <v-container fluid>
      <v-layout row wrap class="my-15">
        <v-flex xs12 class="text-xs-center text-center">
          <h1>Log In</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form>
            <v-layout column>
              <v-flex>
                <v-text-field
                  name="email"
                  label="Email"
                  id="email"
                  type="email"
                  required
                >
                  <template v-slot:prepend>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on"> mdi-account </v-icon>
                      </template>
                      Email
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  required
                >
                  <template v-slot:prepend>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on"> mdi-key </v-icon>
                      </template>
                      Password
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-flex>
              <v-flex class="mx-auto" mt-5>
                <v-btn color="primary" type="submit">Log In</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container> -->

    <v-content class="mb-16">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
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
    </v-content>
  </div>
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
