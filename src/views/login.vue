<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center text-center mt-15">
        <h1>Sign In</h1>
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
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit">Sign In</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
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
