<template>
  <!-- ส่วนจัดเเสดง -->
  <div id="Formmanagement">
    <NavbarOF />
    <v-card class="cardshow">
      <h1>
        จัดการคำร้อง/ยื่นเรื่อง
        <v-divider></v-divider>
      </h1>
      <!-- ส่วนเเสดงการสร้างฟอร์ม -->
      <v-form class="cardshow">
        <v-text-field
          placeholder="หัวเรื่อง....."
          outlined
          v-model="forms.title"
        ></v-text-field>
        <!-- <v-divider></v-divider> -->
        <h3>ชื่อข้อมูลเฉพาะ</h3>
        <v-row v-for="(form, index) in forms" :key="index">
            
          <v-col>
            <div v-html="renderForm(form.name,)"></div>
          </v-col>
        </v-row>

        <div v-for="(form, index) in forms" :key="index"></div>
        {{ forms.title }}
        
        <v-row>
          <v-col align="center">
            <v-btn icon outlined @click="addForm()"
              ><v-icon>mdi-plus</v-icon></v-btn
            >
            <h3>กดเครื่องหมายเพื่อเพิ่มข้อมูลเฉพาะ</h3>
          </v-col>
        </v-row>
      </v-form>
        {{forms}}
      <!-- ส่วนเเสดงการสร้างฟอร์ม -->
    </v-card>
  </div>
  <!-- ส่วนจัดเเสดง -->
</template>

<script>
import NavbarOF from "../../components/NavbarOfficer.vue";
export default {
  name: "Createtitle",
  components: {
    NavbarOF,
  },
  data() {
    return {
      forms: [
        {
          title: "",
        },
      ],
    };
  },
  methods: {
    addForm: function () {
      let form = {
        name: this.name,
      };
      this.forms.push(form);
    },
    renderForm: function (name) {
      return `
      <input type="text"id="${name}"  class="form-control" ></input> 
      `;
    },
    submit: function () {},
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
h3 {
  margin: 2%;
}
</style>
