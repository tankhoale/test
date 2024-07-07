import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'
import LoginPage from '../views/backend/LoginPage.vue'
import UserCartView from '../views/frontend/UserCartView.vue'
import FoodByCategoryView from '../views/frontend/FoodByCategoryView.vue'
import BackendView from '../views/backend/BackendView.vue'
import NavbarView from '../views/backend/NavbarView.vue'
import MenuImgView from '../views/frontend/MenuImgView.vue'
import DailyInvoiceVIew from '../views/frontend/DailyInvoiceView.vue'
import FoodView from '../views/backend/FoodView.vue'
import CategoriesView from '@/views/backend/CategoriesView.vue'
import InvoiceView from '@/views/backend/InvoiceView.vue'
import EmployeeView from '@/views/backend/EmployeeView.vue'
// import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'menu',
    component: MenuView,
    children: [
      {
        path: '/menu/:url',
        name: 'foodByCategory',
        component: FoodByCategoryView,
        props: true
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: UserCartView
  },
  {
    path: '/menu-img',
    name: 'menuImg',
    component: MenuImgView
  },
  {
    path: '/daily-invoice',
    name: 'dailyInvoice',
    component: DailyInvoiceVIew
  },
  {
    path: '/management-details',
    name: 'backend',
    component: BackendView,
    children: [
      {
        path: 'navbar',
        name: 'navbarView',
        component: NavbarView
      },
      {
        path: 'food',
        name: 'foodView',
        component: FoodView
      },
      {
        path: 'categories',
        name: 'categoriesView',
        component: CategoriesView
      },
      {
        path: 'invoice',
        name: 'invoiceView',
        component: InvoiceView
      },
      {
        path: 'employees',
        name: 'employeesView',
        component: EmployeeView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeResolve(async (to, from, next) => {
//   store.dispatch('setLoading', true)

//   try {
//     await store.dispatch('food/getCategoriesData')
//     await store.dispatch('food/getFoodData')
//     next()
//   } catch (error) {
//     store.dispatch('setError', error.message || 'Something went wrong!')
//     next(error) // Optional: Redirect to an error page or show error message
//   } finally {
//     store.dispatch('setLoading', false)
//   }
// })

export default router
