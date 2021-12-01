<template>
  <div>
    <v-footer dark padless>
      <v-container fluid>
        <v-row>
          <v-col md="4">
            <h2>ติดต่อเรา</h2>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>
                  mdi-map-marker
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  >1 ซอย ฉลองกรุง 1 แขวงลาดกระบัง <br />เขตลาดกระบัง
                  กรุงเทพมหานคร 10520
                </v-list-item-title>
                <v-list-item-subtitle>Location</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>
                  mdi-phone
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>02 329 8000 </v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>
                  mdi-email
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>pr.kmitl@kmitl.ac.th</v-list-item-title>
                <v-list-item-subtitle>Email</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col md="4">
            <h2 class="h2">Academic Petition Service</h2>
            <v-divider></v-divider>
            <p>
              This project “Academic Request Service Model System” was prepared.
              To study and develop technology systems for students and related
              personnel Easier to use in everyday
            </p>
          </v-col>
          <v-col md="4">
            <h2 class="h2">แผนที่</h2>
            <v-divider></v-divider>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.244051726755!2d100.7782323!3d13.7298889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc678f180e221cd0!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LmA4LiI4LmJ4Liy4LiE4Li44LiT4LiX4Lir4Liy4Lij4Lil4Liy4LiU4LiB4Lij4Liw4Lia4Lix4LiH!5e0!3m2!1sth!2sth!4v1637232193252!5m2!1sth!2sth"
              width="100%"
              height="250"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </v-col>
        </v-row>
      </v-container>
      <v-card flat class="text-center pa-4" width="100%">
        <v-card-text class="white--text">
          <strong
            >Copyright © Academic Petition Service
            {{ new Date().getFullYear() }} All Right Reserved</strong
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style></style>
