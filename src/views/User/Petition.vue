<template>
  <!-- ส่วนจัดเเสดง -->
  <v-app>
    <NavbarStu />
    <v-card class="cardshow">
      <h1>
        เลือกแบบคำร้อง / ยื่นเรื่อง
        <v-divider></v-divider>
      </h1>

      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <template v-slot:header>
          <v-text-field
            v-model="search"
            dense
            filled
            rounded
            label="ค้นหาเอกสาร"
            class="cardshow"
          ></v-text-field>
        </template>

        <template v-slot:default="name">
          <v-row
            v-for="item in name.items"
            :key="item.name"
            router
            :to="item.route"
            class="cardshow"
          >
            <v-col>
              <v-btn block height="200" router :to="item.route">
                <v-row>
                  <v-col align="center">
                    <v-btn color="secondary" width="100" height="100">
                      <v-icon>mdi-{{ item.icon }}</v-icon>
                    </v-btn>
                    
                  </v-col>
                  <v-col>
                    <h2>{{ item.name }}</h2>
                    <h2>{{ item.detail }}</h2>
                  </v-col>
                </v-row>
              </v-btn>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-card>
    <!-- ส่วนจัดเเสดง -->
  </v-app>
</template>

<script>
import NavbarStu from "../../components/NavbarUser.vue";
export default {
  name: "FormsSTU",
  components: {
    NavbarStu,
  },
  data() {
    return {
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",
      keys: ["Name"],
      items: [
        {
          name: "เอกสารความกก้าวหน้า",
          route: "/Sentpentition",
          icon: "file-document-outline",
          detail:"ส่งความก้าวหน้าการทำโครงการ",
        },
        {
          name: "Ice cream sandwich",
          route: "/Sentpentition",
          icon: "file-document-outline",
          detail:"ส่งความก้าวหน้าการทำโครงการ",
        },
        {
          name: "Eclair",
          route: "/Sentpentition",
          icon: "file-document-outline",
          detail:"ส่งความก้าวหน้าการทำโครงการ",
        },
        {
          name: "Cupcake",
          route: "/Sentpentition",
          icon: "file-document-outline",
          detail:"ส่งความก้าวหน้าการทำโครงการ",
        },
        {
          name: "Gingerbread",
          route: "/Sentpentition",
          icon: "file-document-outline",
          detail:"ส่งความก้าวหน้าการทำโครงการ",
        },
        {
          name: "Jelly bean",
          route: "/Sentpentition",
          icon: "file-document-outline",
          detail:"ส่งความก้าวหน้าการทำโครงการ",
        },
        {
          name: "Lollipop",
          route: "/Sentpentition",
          icon: "file-document-outline",
          detail:"ส่งความก้าวหน้าการทำโครงการ",
        },
        {
          name: "Honeycomb",
          route: "/Sentpentition",
          icon: "file-document-outline",
          detail:"ส่งความก้าวหน้าการทำโครงการ",
        },
        {
          name: "Donut",
          route: "/Sentpentition",
          icon: "file-document-outline",
          detail:"ส่งความก้าวหน้าการทำโครงการ",
        },
        {
          name: "KitKat",
          route: "/Sentpentition",
          icon: "file-document-outline",
          detail:"ส่งความก้าวหน้าการทำโครงการ",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  padding: 10px;
}
.cardshow {
  margin: 2%;
}
</style>
