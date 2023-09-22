import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import RegistrationHomeView from '../views/RegistrationFolder/RegistrationHomeView.vue'
import CompanyView from '../views/RegistrationFolder/CompanyView.vue'
import HeadhuntView from '../views/RegistrationFolder/HeadhuntView.vue'
import LoginView from '../views/LoginFolder/LoginView.vue'
import LoginHomeView from '../views/LoginFolder/LoginHomeView.vue'
import ResetPassword from '../views/ResetPassword.vue'
import BlogView from '../views/BlogView.vue'
import HomePageView from '../views/HomePageView.vue'
import BlogNewView from '../views/BlogNewView.vue'
import BlogHomeView from '../views/BlogHomeView.vue'
import BlogRecruitmentView from '../views/BlogRecruitmentView.vue'
import BlogSearchHandbook from '../views/BlogSearchHandbook.vue'
import EmployeeView from '../views/Employee/EmployeeView.vue'
import EmployeeRecruting from '../views/Employee/EmployeeRecruting.vue'
import AboutUsView from '../views/AboutUsView.vue'
import RecruiterView from '../views/RecruiterView.vue'
import AgencyView from '../views/AgencyView.vue'
import User1 from '../views/User1View.vue'
import RecruiterHomeView from '../views/RecruiterHomeView.vue'
import CompanyHomeView from '../views/CompanyHomeView.vue'
import PayrollView  from '../views/PayrollView.vue'
import AdminView from '../views/AdminFolder/AdminView.vue'
import AdminHomeView from '../views/AdminFolder/AdminHomeView.vue'
import TalentPoolView from '../views/AdminFolder/TalentPool/TalentPoolView.vue'
import TalentPoolHome from '../views/AdminFolder/TalentPool/TalentPoolHome.vue'
import JobView from '../views/JobView.vue'
import HireView from '../views/HireView.vue'


const routes = [
  {
    path: '',
    name: 'home',
    meta: {
      layout: 'default'
    },
    component: HomePageView,
    children: [
      {
        path: '',
        name: 'home-view',
        component: HomeView
      },
      {
        path: 'about-us',
        name: 'about-us',
        component: AboutUsView
      },
      {
        path: 'company',
        name: 'company',
        component: CompanyHomeView
      },
      {
        path: 'hire',
        name: 'hire',
        component: HireView
      },
      {
        path: 'payroll',
        name: 'payroll',
        component: PayrollView
      },
      {
        path: 'job-home',
        name: 'job-home',
        component: JobView
      },
      {
        path: 'recruiter',
        name: 'recruiter',
        component: RecruiterView,
        children: [
          {
            path: '',
            name: 'recruiter-home',
            component: RecruiterHomeView
          },
          {
            path: 'user1',
            name: 'user1',
            component: User1
          }
        ]
      },
      {
        path: 'agency',
        name: 'agency',
        component: AgencyView
      },
      {
        path: 'employee',
        name: 'employee-view',
        component: EmployeeView,
        children: [
          {
            path: '',
            name: 'employee-recruting',
            component: EmployeeRecruting

          }
        ]
      },
      {
        path: 'blog',
        name: 'blog',
        component: BlogView,
        children: [
          {
            path: '',
            name: 'blog-view',
            component: BlogHomeView
          },
          {
            path: 'category',
            name: 'blog-new',
            component: BlogNewView
          },
          {
            path: 'recruitment',
            name: 'blog-recruitment',
            component: BlogRecruitmentView
          },
          {
            path: 'search-handbook',
            name: 'blog-search-handbook',
            component: BlogSearchHandbook
          }
        ]
      }
    ]
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    meta: {
      layout: 'resetPassword'
    },
    component: ResetPassword
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {
      layout: 'registration'
    },
    component: RegistrationView,
    children: [
      {
        path: '',
        name: 'registration_view',
        component: RegistrationHomeView
      },
      {
        path: 'headhunt',
        name: 'headhunt',
        component: HeadhuntView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'login'
    },
    component: LoginView,
    children: [
      {
        path: '',
        name: 'login_view',
        component: LoginHomeView
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      layout: 'admin'
    },
    component: AdminView,
    children: [
      {
        path: '',
        name: 'admin-home',
        component: AdminHomeView,
      },
      {
        path: '',
        name: 'marketplace',
        component: TalentPoolView,
        children: [
          {
            path: 'marketplace',
            name: 'marketplace-home',
            component: TalentPoolHome
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
