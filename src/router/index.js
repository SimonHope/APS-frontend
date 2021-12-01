// Global
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
// Global

//User
import UserDashboard from '../views/User/Dashboard.vue'
import UserPetition from '../views/User/Petition.vue'
import UserProfile from '../views/User/Profile.vue'
import UserReport from '../views/User/Report.vue'
import UserTracking from '../views/User/Tracking.vue'
//User

//Officer
import OfficerDashboard from '../views/Officer/Dashboard.vue'
import OfficerPetitionManagement from '../views/Officer/PetitionManagement.vue'
import OfficerProfile from '../views/Officer/Profile.vue'
import OfficerTracking from '../views/Officer/Tracking.vue'
//Officer

//Chief
import ChiefApproval from '../views/Chief/Approval.vue'
import ChiefDashboard from '../views/Chief/Dashboard.vue'
import ChiefOfficerManagement from '../views/Chief/OfficerManagement.vue'
import ChiefPetitionManagement from '../views/Chief/PetitionManagement.vue'
import ChiefProfile from '../views/Chief/Profile.vue'
import ChiefReport from '../views/Chief/Report.vue'
import ChiefSecretaryManagement from '../views/Chief/SecretaryManagement.vue'
import ChiefTracking from '../views/Chief/Tracking.vue'
//Chief

//Secretary
import SecretaryDashboard from '../views/Secretary/Dashboard.vue'
import SecretaryProfile from '../views/Secretary/Profile.vue'
import SecretaryTracking from '../views/Secretary/Tracking.vue'
import SecretaryViewApproval from '../views/Secretary/ViewApproval.vue'
import SecretaryViewReport from '../views/Secretary/ViewReport.vue'
//Secretary

//Admin
import AdminChiefManagement from '../views/Admin/ChiefManagement.vue'
import AdminDashboard from '../views/Admin/Dashboard.vue'
import AdminOfficerManagement from '../views/Admin/OfficerManagement.vue'
import AdminProfile from '../views/Admin/Profile.vue'
import AdminSecretaryManagement from '../views/Admin/SecretaryManagement.vue'
import AdminTracking from '../views/Admin/Tracking.vue'
import AdminUserManagement from '../views/Admin/UserManagement.vue'
import AdminViewApproval from '../views/Admin/ViewApproval.vue'
import AdminViewReport from '../views/Admin/ViewReport.vue'

//Admin

//Formbuilder
import Builder from '../views/formbuilder/builderform.vue'
import Sentpentition from '../views/Other/Sentpentition.vue'

//Formbuilder


Vue.use(VueRouter)

const routes = [
  // Global
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },

  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  // Global

  //User
  {
    path: '/UserDashboard',
    name: 'UserDashboard',
    component: UserDashboard
  },
  {
    path: '/UserPetition',
    name: 'UserPetition',
    component: UserPetition
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/UserReport',
    name: 'UserReport',
    component: UserReport
  },
  {
    path: '/UserTracking',
    name: 'UserTracking',
    component: UserTracking
  },
  //User

  //Officer
  
  {
    path: '/OfficerDashboard',
    name: 'OfficerDashboard',
    component: OfficerDashboard
  },
  {
    path: '/OfficerPetitionManagement',
    name: 'OfficerPetitionManagement',
    component: OfficerPetitionManagement
  },
  {
    path: '/OfficerProfile',
    name: 'OfficerProfile',
    component: OfficerProfile 
  },
  {
    path: '/OfficerTracking',
    name: 'OfficerTracking',
    component: OfficerTracking 
  },
  //Officer

  //Chief
  {
    path: '/ChiefApproval',
    name: 'ChiefApproval',
    component: ChiefApproval 
  },
  {
    path: '/ChiefDashboard',
    name: 'ChiefDashboard',
    component: ChiefDashboard 
  },
  {
    path: '/ChiefOfficerManagement',
    name: 'ChiefOfficerManagement',
    component: ChiefOfficerManagement 
  },
  {
    path: '/ChiefPetitionManagement',
    name: 'ChiefPetitionManagement',
    component: ChiefPetitionManagement 
  },
  {
    path: '/ChiefProfile',
    name: 'ChiefProfile',
    component: ChiefProfile 
  },
  {
    path: '/ChiefReport',
    name: 'ChiefReport',
    component: ChiefReport 
  },
  {
    path: '/ChiefSecretaryManagement',
    name: 'ChiefSecretaryManagement',
    component: ChiefSecretaryManagement 
  },
  {
    path: '/ChiefTracking',
    name: 'ChiefTracking',
    component: ChiefTracking 
  },
  //Chief

  //Secretary
  {
    path: '/SecretaryDashboard',
    name: 'SecretaryDashboard',
    component: SecretaryDashboard
  },
  {
    path: '/SecretaryProfile',
    name: 'SecretaryProfile',
    component: SecretaryProfile
  },
  {
    path: '/SecretaryTracking',
    name: 'SecretaryTracking',
    component: SecretaryTracking
  },
  {
    path: '/SecretaryViewApproval',
    name: 'SecretaryViewApproval',
    component: SecretaryViewApproval
  },
  {
    path: '/SecretaryViewReport',
    name: 'SecretaryViewReport',
    component: SecretaryViewReport
  },
  //Secretary

  //Admin
  {
    path: '/AdminChiefManagement',
    name: 'AdminChiefManagement',
    component: AdminChiefManagement 
  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard 
  },
  {
    path: '/AdminOfficerManagement',
    name: 'AdminOfficerManagement',
    component: AdminOfficerManagement 
  },
  {
    path: '/AdminProfile',
    name: 'AdminProfile',
    component: AdminProfile 
  },
  {
    path: '/AdminSecretaryManagement',
    name: 'AdminSecretaryManagement',
    component: AdminSecretaryManagement 
  },
  {
    path: '/AdminTracking',
    name: 'AdminTracking',
    component: AdminTracking 
  },
  {
    path: '/AdminUserManagement',
    name: 'AdminUserManagement',
    component: AdminUserManagement 
  },
  {
    path: '/AdminViewApproval',
    name: 'AdminViewApproval',
    component: AdminViewApproval 
  },
  {
    path: '/AdminViewReport',
    name: 'AdminViewReport',
    component: AdminViewReport 
  },
  //Admin

  //Other
  {
    path: '/builder',
    name: 'builder',
    component: Builder 
  },
  {
    path: '/Sentpentition',
    name: 'Sentpentition',
    component: Sentpentition 
  },
  //Other

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
