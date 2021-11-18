import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'

//นักเรัยน
import DashboardSTU from '../views/DashboardSTUDENT/Dashboard.vue'
import petitionSTU from '../views/DashboardSTUDENT/From.vue'
import reportSTU from '../views/DashboardSTUDENT/Report.vue'
import tarckingSTU from '../views/DashboardSTUDENT/Traking.vue'
//นักเรัยน

//พนักงาน
import petitionOfficer from '../views/DashboardOffice/CRUDForms.vue'
import DashboardOfficer from '../views/DashboardOffice/Dashboard.vue'
import tarckingOfficer from '../views/DashboardOffice/Traking.vue'
//พนักงาน

//หัวหน้า
import DashboardHofficer from '../views/DashboardHOffice/Dashboard.vue'
import petitionHofficer from '../views/DashboardHOffice/CRUDForms.vue'
import CRUDOFFICEHofficer from '../views/DashboardHOffice/CRUDOffice.vue'
import tarckingHofficer from '../views/DashboardHOffice/Traking.vue'

//หัวหน้า

//คนดูเเลระบบ
import DashboarAD from '../views/DashboardSuper/Dashboard.vue'
import Group from '../views/DashboardSuper/CRUDGroup.vue'
import FormsAD from '../views/DashboardSuper/AllSUBmissions.vue'
import OfficerAD from '../views/DashboardSuper/CRUDOffice.vue'
import HofficerAD from '../views/DashboardSuper/CRUDHOffice.vue'
import tarckingAD from '../views/DashboardSuper/Traking.vue'
import Blog from '../views/DashboardSuper/BLOG.vue'
//คนดูเเลระบบ

//sหน้าสรเางฟรอม
import Builder from '../views/formbuilder/builderform.vue'

//sหน้าสรเางฟรอม


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/aboutme',
    name: 'Aboutme',
    component:aboutme
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  //นักเรียน
  {
    path: '/DashboardSTU',
    name: 'DashboardSTU',
    component: DashboardSTU
  },
  {
    path: '/petitionSTU',
    name: 'petitionSTU',
    component: petitionSTU
  },
  {
    path: '/reportSTU',
    name: 'reportSTU',
    component: reportSTU
  },
  {
    path: '/tarckingSTU',
    name: 'tarckingSTU',
    component: tarckingSTU
  }
  //นักเรียน

  //พนังงาน
  ,
  {
    path: '/DashboardOfficer',
    name: 'DashboardOfficer',
    component: DashboardOfficer
  },
  {
    path: '/petitionOfficer',
    name: 'petitionOfficer',
    component: petitionOfficer
  },
  {
    path: '/tarckingOfficer',
    name: 'tarckingOfficer',
    component: tarckingOfficer 
  }

  //พนังงาน

  //หัวหน้า
  ,
  {
    path: '/DashboardHofficer',
    name: 'DashboardHofficer',
    component: DashboardHofficer 
  },
  {
    path: '/petitionHofficer',
    name: 'petitionHofficer',
    component: petitionHofficer 
  },
  {
    path: '/CRUDOFFICEHofficer',
    name: 'CRUDOFFICEHofficer',
    component: CRUDOFFICEHofficer 
  },
  {
    path: '/tarckingHofficer',
    name: 'tarckingHofficer',
    component: tarckingHofficer 
  }
  //หัวหน้า

  //คนดูเเลระบบ
  ,
  {
    path: '/DashboarAD',
    name: 'DashboarAD',
    component: DashboarAD 
  },
  {
    path: '/Group',
    name: 'Group',
    component: Group 
  },
  {
    path: '/FormsAD',
    name: 'FormsAD',
    component: FormsAD 
  },
  {
    path: '/OfficerAD',
    name: 'OfficerAD',
    component: OfficerAD 
  },
  {
    path: '/HofficerAD',
    name: 'HofficerAD',
    component: HofficerAD 
  },
  {
    path: '/tarckingAD',
    name: 'tarckingAD',
    component: tarckingAD 
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog 
  }
  
  //คนดูเเลระบบ

  //หน้าสร้างฟอร์ม
  ,
  {
    path: '/builder',
    name: 'builder',
    component: Builder 
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
