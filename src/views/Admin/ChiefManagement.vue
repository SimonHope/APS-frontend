<template>
  <div id="AdminChiefManagement">
    <NavbarAdmin />
    <v-card class="cardmargin">
      <h1 class="text-center p-4">
        จัดการ Chief
        <v-divider></v-divider>
      </h1>
      <v-row>
        <v-col align="center" v-if="members.length">
          <v-btn width="150" height="50">
            <v-icon>mdi-account</v-icon>
            <div class="title">{{ members.length }}</div>
          </v-btn>
        </v-col>
      </v-row>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        >
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="members" :search="search">
        <template v-slot:item="members">
          <tr>
            <td>{{ members.item.name }}</td>
            <td>{{ members.item.calories }}</td>
            <td>{{ members.item.fat }}</td>
            <td>
              <v-btn
                fab
                plain
                small
                color="yellow darken-3"
                @click="onButtonClick(row.item)"
              >
                <v-icon>mdi-account-edit</v-icon>
              </v-btn>
              <v-btn
                fab
                plain
                small
                color="red"
                @click="onButtonClick(row.item)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import NavbarAdmin from "../../components/NavbarAdmin.vue";
export default {
  name: "AdminChiefManagement",
  components: {
    NavbarAdmin,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "ลำดับ",
          align: "start",
          value: "count",
          width: 100,
        },
        { text: "ชื่อ-นามสกุล", width: 350, value: "calories" },
        { text: "หน่วยงาน", width: 350, value: "calories" },
        { text: "Action", align: "center", width: 100, value: "iron" },
      ],
      members: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: `f`,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
  computed: {},

  methods: {},
};
</script>

<style scoped>
.cardmargin {
  margin: 2%;
}
</style>
