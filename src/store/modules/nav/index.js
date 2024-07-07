import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      navbar: []
      // navbar: [
      //   {
      //     id: 1,
      //     name: 'Thực đơn',
      //     url: '/',
      //     routeName: '/',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 2,
      //     name: 'Cơm',
      //     url: 'rice',
      //     routeName: 'foodByCategory',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 3,
      //     name: 'Mỳ',
      //     url: 'noodle',
      //     routeName: 'foodByCategory',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 4,
      //     name: 'Nên thử',
      //     url: 'must-try',
      //     routeName: 'foodByCategory',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 5,
      //     name: 'Đồ uống',
      //     url: 'drinks',
      //     routeName: 'foodByCategory',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 6,
      //     name: 'Topping thêm',
      //     url: 'extra-topping',
      //     routeName: 'foodByCategory',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 7,
      //     name: 'Canh và Salad',
      //     url: 'soup-and-salad',
      //     routeName: 'foodByCategory',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 8,
      //     name: 'Menu',
      //     url: '/menu-img',
      //     routeName: '/menu-img',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 9,
      //     name: 'Hóa Đơn Hằng ngày',
      //     url: '/daily-invoice',
      //     routeName: '/daily-invoice',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   }
      // ]
    }
  },
  getters: {
    getNavbar (state) {
      return state.navbar
    },
    getNavbarForFrontend: (state) => (payload) => {
      if (payload === 1) {
        return state.navbar.filter(item => item.routeName === 'foodByCategory')
      }
      return state.navbar.filter(item => item.routeName !== 'foodByCategory')
    }
  },
  mutations: {
    setNavbar (state, payload) {
      state.navbar = payload
    }
  },
  actions: {
    async getNavbarData (context) {
      await axios.get('https://dacntt2.onrender.com/api/foodMenus/getAllMenus').then((response) => {
        const responseData = response.data
        context.commit('setNavbar', responseData)
      })
    },
    async postNavbar (context, payload) {
      await axios.post('https://dacntt2.onrender.com/api/foodMenus/createMenu', {
        menuName: payload.menuName,
        url: payload.url,
        isHidden: payload.isHidden,
        createdDate: payload.createdDate,
        routeName: payload.routeName
      })
    },
    async updateNavbar (context, payload) {
      await axios.put('https://dacntt2.onrender.com/api/foodMenus/updateMenu/' + payload._id, {
        menuName: payload.menuName,
        url: payload.url,
        isHidden: payload.isHidden,
        createdDate: payload.createdDate,
        routeName: payload.routeName
      })
    },
    async deleteNavbar (context, payload) {
      await axios.delete('https://dacntt2.onrender.com/api/foodMenus/deleteMenu/' + payload)
    }
    // async getNavbarData (context) {
    //   await axios.get('http://localhost:9513/api/aitsNews').then((response) => {
    //     const responseData = response.data
    //     context.commit('setNavbar', responseData)
    //   })
    // },
    // async postNavbarData (context) {
    //   axios.post('http://localhost:9513/api/aitsNews', {
    //     title: this.title,
    //     origin: this.origin,
    //     url: this.url,
    //     dateTimeUpload: this.dateTimeUpload,
    //     views: this.views,
    //     author: this.author,
    //     note: this.note,
    //     rest: this.rest,
    //     description: this.description,
    //     img: this.img,
    //     dateUpload: this.dateUpload
    //   }).then((response) => {
    //     this.refreshedData()
    //     alert(response.data)
    //   })
    // }
  }
}
