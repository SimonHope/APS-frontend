<template>
  <div>
    <v-app-bar flat color="#4CAF50" fixed
      ><v-btn color="#607D8B" @click="drawer = !drawer"
        ><v-icon color="#FFFFFF">mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-icon>mdi-folder-text </v-icon> <v-icon>APS builder</v-icon>
      <v-spacer></v-spacer>
    
      </v-app-bar>
    <v-app class="backgroude">
      <!-- ส่วนจัดเเสดง -->
      <v-main>
        <v-card class="cardshow">
          <h1>สร้างแบบเอกสาร</h1>
          <v-form class="padingforms">
            <v-text-field label="หัวเรื่อง"></v-text-field>
            <!-- <v-divider></v-divider> -->

            <v-card v-for="(form, index) in forms" :key="index">
              <div v-html="renderForm(form.name, form.type)"></div>
            </v-card>

            <div v-for="(form, index) in forms" :key="index"></div>

            
            <v-row>
              <v-col align="center">
                <v-btn fab width="150" height="150" color="#4CAF50">
                  <v-icon>mdi-check-bold</v-icon>
                </v-btn>

                <v-divider></v-divider>

                <v-btn fab width="100" height="100" color="#DD2C00">
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>

              </v-col>
            </v-row>
          
          </v-form>
          
          <!-- <v-btn fab fixed right color="#607D8B" height="80" width="80"
          ><h2>1</h2></v-btn> -->

          <v-navigation-drawer v-model="drawer" app color="#FFFFFF" width="300">
            <!-- ส่วนตัวเลือกเมนู -->
            <h1>เครื่องมือ</h1>

            <v-divider class="btnz-index"></v-divider>

            <v-row>
              <v-btn icon color="pink" block @click="addForm()">
                <v-icon>mdi-text-recognition</v-icon> ช่องกรอกข้อความ
              </v-btn>
              <v-btn icon color="pink" block>
                <v-icon>mdi-folder-text</v-icon> ตัวอัพโหลดไฟล์
              </v-btn>
              <v-btn icon color="pink" block>
                <v-icon>mdi-panorama</v-icon> ตัวเเสดงรูปภาพ
              </v-btn>
              <v-btn icon color="pink" block>
                <v-icon>mdi-brightness-1</v-icon> ตัวเเสดงตัวเลือก
              </v-btn>
              <v-btn icon color="pink" block>
                <v-icon>mdi-check-all</v-icon> ตัวเลือกหลายรายการ
              </v-btn>
              <v-btn icon color="pink" block>
                <v-icon>mdi-calendar</v-icon> ปฏิทิน 
              </v-btn>
            </v-row>

            <!-- ส่วนตัวเลือกเมนู -->
          </v-navigation-drawer>
        </v-card>
        
      </v-main>
      <!-- ส่วนจัดเเสดง -->
    </v-app>
  </div>
</template>

<script>
export default {
  name: "TrackingADMIN",
  data() {
    return {
      btnshow: false,
      drawer: null,
      forms: [],
    };
  },
  methods: {
    addForm: function () {
      let form = {
        name: this.formName,
        type: this.formType,
      };
      this.forms.push(form);
      this.formName = "";
      this.formType = "";
    },
    renderForm: function (name, type) {
      return `
      <div class="mb-3">
      <input type="${type}"id="${name}"class="form-control" ></input>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      `;
    },
    submit: function () {},
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 20px 0px 0px 0px;
}
h2 {
  text-align: center;
  padding: 10px;
}
.cardshow {
  margin: 8%;
}
.trackcrad {
  text-align: center;
}
.text-right {
  text-align: left;
}
.tarkingbtn {
  margin: 10px;
}
.checkingbtn {
  margin: 10px;
}
.padingforms {
  padding: 2% 10% 2% 10%;
}
.btnz-index {
  margin: 5% 8% 8% 8%;
}
.backgroude {
  background: #cfcfcf;
}
</style>