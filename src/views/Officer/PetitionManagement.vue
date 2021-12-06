<template>
  <!-- ส่วนจัดเเสดง -->
  <div id="Formmanagement">
    <NavbarOF />
    <v-card class="cardshow">
      <h1>
        จัดการคำร้อง/ยื่นเรื่อง
        <v-divider></v-divider>
      </h1>

      <v-container fluid>
        <v-row>
          <v-col> </v-col>
          <v-col align="right">
            <v-btn class="btn-margin" color="success" to="/Createtitle"> + สร้างคำร้อง </v-btn>
          </v-col>
        </v-row>

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
            <v-toolbar dark color="blue darken-3" class="mb-1">
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
              ></v-text-field>
              <template v-if="$vuetify.breakpoint.mdAndUp"> </template>
            </v-toolbar>
          </template>

          <template v-slot:default="props">
            <v-row>
              <v-col> ลำดับ </v-col>
              <v-col> รายการ </v-col>
              <v-col> สถานะ </v-col>
              <v-col> วันที่สร้าง </v-col>
              <v-col> Action </v-col>
            </v-row>

            <v-row
              v-for="item in props.items"
              :key="item.text"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-col>
                <v-card>
                  <v-card-title class="subheading font-weight-bold">
                    <v-row>
                      <v-col> {{ item.no }} </v-col>
                      <v-col> {{ item.text }} </v-col>
                      <v-col>
                        <v-switch
                          inset
                          v-model="item.switch"
                          :label="`Switch 1: ${item.switch.toString()}`"
                        ></v-switch>
                      </v-col>
                      <v-col> {{ item.datecreation }} </v-col>
                      <v-col>
                        <v-btn icon><v-icon color="yellow">mdi-pencil</v-icon></v-btn>
                        <v-btn icon><v-icon color="red">mdi-delete</v-icon></v-btn>
                      </v-col>
                    </v-row>
                  </v-card-title>

                  <v-divider></v-divider>
                </v-card>
              </v-col>
            </v-row>
          </template>

          <template v-slot:footer>
            <v-row class="mt-2" align="center" justify="center">
              <v-menu offset-y> </v-menu>

              <v-spacer></v-spacer>
              <v-row>
                <v-col align="center">
                  <span class="mr-4 grey--text">
                    Page {{ page }} of {{ numberOfPages }}
                  </span>
                </v-col>
              </v-row>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="mr-1"
                  @click="formerPage"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="ml-1"
                  @click="nextPage"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-container>
    </v-card>
  </div>
  <!-- ส่วนจัดเเสดง -->
</template>

<script>
import NavbarOF from "../../components/NavbarOfficer.vue";
export default {
  name: "Formmanagementofficer",
  components: {
    NavbarOF,
  },
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",

      items: [
        {
          no: "1",
          text: "ฟรอมที่ 1",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: false,
          datecreation: "6/12/2564",
        },
        {
          no: "2",
          text: "ฟรอมที่ 2",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "3",
          text: "ฟรอมที่ 3",
          agency: "ศึกษาทั่วไป",
          satatus: false,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 36",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
        {
          no: "4",
          text: "ฟรอมที่ 4",
          agency: "ศึกษาทั่วไป",
          satatus: true,
          switch: true,
          datecreation: "6/12/2564",
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 10px;
}
.cardshow {
  margin: 2%;
}
.btn-margin {
  margin: 3%;
}
</style>
