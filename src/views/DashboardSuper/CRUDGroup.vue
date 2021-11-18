<template>
  <!-- ส่วนจัดเเสดง -->
  <v-app >
    <v-main >
      <v-card class="cardshow">
        <h1>
          จัดการ Group
          <v-divider></v-divider>
        </h1>
        <v-row>
          <v-col align="center" v-if="Group.length">
            <v-btn class="btn-magin" width="150" height="50">
              <v-icon>mdi-account</v-icon>
              <h1>{{ Group.length }}</h1>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row>
          <v-col v-for="Group in Group" :key="Group.no" align ="center">
            <v-card width="250" height="350" class="card-magin" color="#BDBDBD">
              <v-row>
                <v-col>
                  <v-btn fab width="90" height="90" class="Gprofile-margin"
                    ><v-icon> mdi-{{ Group.icon }}</v-icon>
                  </v-btn>
                  <h2>{{ Group.name }}</h2>
                  <v-btn color="#FFD740" @click="dialog = !dialog"
                    >จัดการกลุ่ม</v-btn
                  >
                 
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-dialog v-model="dialog" persistent width="800" >
          
          <v-card  align ="center">
            <h1>จัดการกลุ่ม</h1>
            
            <v-divider></v-divider>
            <v-btn fab width="250" height="250" left class="text-pprofile-magin">fuck</v-btn>

            <v-text-field
            label="ชื่อกลุ่ม"
            outlined
            readonly
            class="text-pprofile-magin"
          ></v-text-field>
          
          <v-text-field
            label="หน่วยงาน"
            outlined
            readonly
            class="text-pprofile-magin"
          ></v-text-field>
          <v-text-field
            label="หน่วยงาน"
            outlined
            readonly
            class="text-pprofile-magin"
          ></v-text-field>

          <v-textarea
          label="คำอธิบาย"
          auto-grow
          outlined
          rows="1"
          row-height="15"
          class="text-pprofile-magin"
        ></v-textarea>
          
          


            <v-divider></v-divider>
            <v-btn color="green darken-1" text @click="dialog = false">
              ตกลง
            </v-btn>
            <v-btn color="red darken-1" text @click="dialog = false">
              ยกเลิก
            </v-btn>
          </v-card>
        </v-dialog>
      </v-card>
    </v-main>
  </v-app>
  <!-- ส่วนจัดเเสดง -->
</template>

<script>
export default {
  name: "CRUDGROUPADMIN",
  data() {
    return {
      Group: [
        { no: 1, name: "สำนักศึกษาทั่วไป", icon: "account", color: "#4CAF50" },
        {
          no: 2,
          name: "สำนักงานคอมพิวเตอร์ สจล.",
          icon: "emoticon-poop",
          color: "",
        },
        { no: 3, name: "สำนักถังเช่า", icon: "cross-bolnisi", color: "" },
        {
          no: 4,
          name: "ชนเผ่าวูกาลูลู",
          icon: "arrow-projectile-multiple",
          color: "",
        },
        { no: 5, name: "ชมรมคนเหงา 2021", icon: "car-child-seat", color: "" },
      ],
      dialog: false,
      desserts: [],
      editedIndex: -1,
      editedItem: {
        no: 0,
        name: "",
        icon: "",
      },
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Edit Item" : "Edit Item";
    },
  },

  methods: {
    initialize() {
      this.desserts = [
        { no: 1, name: "สำนักศึกษาทั่วไป", icon: "account", color: "#4CAF50" },
        {
          no: 2,
          name: "สำนักงานคอมพิวเตอร์ สจล.",
          icon: "emoticon-poop",
          color: "",
        },
        { no: 3, name: "สำนักถังเช่า", icon: "cross-bolnisi", color: "" },
        {
          no: 4,
          name: "ชนเผ่าวูกาลูลู",
          icon: "arrow-projectile-multiple",
          color: "",
        },
        { no: 5, name: "ชมรมคนเหงา 2021", icon: "car-child-seat", color: "" },
      ];
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 10px;
}
h2 {
  text-align: center;
  padding: 10px;
}
.cardshow {
  margin: 8%;
}
.card-magin {
  margin: 10%;
}
.Gprofile-margin {
  margin: 10%;
}
.btn-magin {
  margin: 3%;
}
.btn-groupmargin {
  margin: 3%;
}
.box-margin {
  margin: 10px 0px 10px 0px;
}
.Gprofile-margin1 {
  margin: 50%;
}
.Gprofile-marginin {
  margin: 30%;
}
.text-pprofile-magin{
  margin: 5%;
}

</style>