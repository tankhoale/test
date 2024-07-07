import actions from './actions.js'

export default {
  namespaced: true,
  state () {
    return {
      categories: [],
      // categories: [
      //   {
      //     id: 1,
      //     name: 'Cơm',
      //     url: 'rice',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 2,
      //     name: 'Mỳ',
      //     url: 'noodle',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 3,
      //     name: 'Nên thử',
      //     url: 'must-try',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 4,
      //     name: 'Đồ uống',
      //     url: 'drinks',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 5,
      //     name: 'Topping thêm',
      //     url: 'extra-topping',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   },
      //   {
      //     id: 6,
      //     name: 'Canh và Salad',
      //     url: 'soup-and-salad',
      //     isHidden: false,
      //     dateCreated: '10/06/2024'
      //   }
      // ],
      // food: [
      //   {
      //     foodId: 1,
      //     categoryId: 1,
      //     name: 'Cơm bò',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 2,
      //     categoryId: 1,
      //     name: 'Cơm gà',
      //     price: 30000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 3,
      //     categoryId: 1,
      //     name: 'Cơm heo',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 4,
      //     categoryId: 2,
      //     name: 'Mỳ bò',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 5,
      //     categoryId: 2,
      //     name: 'Mỳ gà',
      //     price: 30000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 6,
      //     categoryId: 2,
      //     name: 'Mỳ heo',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 7,
      //     categoryId: 3,
      //     name: 'Gà chiên',
      //     price: 45000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 8,
      //     categoryId: 3,
      //     name: 'Hải sản chiên',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 9,
      //     categoryId: 3,
      //     name: 'Mực',
      //     price: 25000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 10,
      //     categoryId: 4,
      //     name: 'Uống 1',
      //     price: 15000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 11,
      //     categoryId: 4,
      //     name: 'Uống 2',
      //     price: 30000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 12,
      //     categoryId: 4,
      //     name: 'Uống 3',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 13,
      //     categoryId: 5,
      //     name: 'Thêm 1',
      //     price: 15000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 14,
      //     categoryId: 5,
      //     name: 'Thêm 2',
      //     price: 30000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 15,
      //     categoryId: 5,
      //     name: 'Thêm 3',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 16,
      //     categoryId: 6,
      //     name: 'Canh ',
      //     price: 15000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 17,
      //     categoryId: 6,
      //     name: 'Canh 1',
      //     price: 30000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 18,
      //     categoryId: 6,
      //     name: 'Canh 2',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 19,
      //     categoryId: 1,
      //     name: 'Cơm heos',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 20,
      //     categoryId: 1,
      //     name: 'Cơm heoss',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 21,
      //     categoryId: 1,
      //     name: 'Cơm heosss',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   },
      //   {
      //     foodId: 22,
      //     categoryId: 1,
      //     name: 'Cơm heoz',
      //     price: 35000,
      //     img: 'hinh1.png',
      //     isHidden: false
      //   }
      // ]
      food: []
    }
  },
  getters: {
    getFood (state) {
      return state.food
    },
    getCategoryId: (state) => (url) => {
      console.log(state.categories)
      console.log(url)
      const data = state.categories.find(item => item.url === url)
      console.log('hi')
      console.log(data)
      return data._id
    },
    getFoodByCategory: (state, getters) => (url) => {
      const categoryId = getters.getCategoryId(url)
      return state.food.filter(item => item.category === categoryId)
    },
    // backend
    showCategory: (state) => (id) => {
      return state.categories.find(item => item._id === id).categoryName
    },
    getCategories (state) {
      return state.categories
    },
    selectCategory (state) {
      return state.categories.map(item => ({
        _id: item._id,
        categoryName: item.categoryName
      }))
    }
  },
  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    },
    setFood (state, payload) {
      state.food = payload
    }
  },
  actions
}
