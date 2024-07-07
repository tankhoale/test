import axios from 'axios'

export default {
  // Category
  async getCategoriesData (context) {
    await axios.get('https://dacntt2.onrender.com/api/foodCategories/getAllCategories').then((response) => {
      const responseData = response.data
      context.commit('setCategories', responseData)
    })
  },
  async postCategory (context, payload) {
    await axios.post('https://dacntt2.onrender.com/api/foodCategories/createCategory', {
      categoryName: payload.categoryName,
      url: payload.url,
      isHidden: payload.isHidden,
      createdDate: payload.createdDate
    })
    // console.log(payload)
  },
  async updateCategory (context, payload) {
    console.log(payload)
    await axios.put('https://dacntt2.onrender.com/api/foodCategories/updateCategory/' + payload._id, {
      categoryName: payload.categoryName,
      url: payload.url,
      isHidden: payload.isHidden,
      createdDate: payload.createdDate
    })
  },
  async deteteCategory (context, payload) {
    await axios.delete('https://dacntt2.onrender.com/api/foodCategories/deleteCategory/' + payload)
  },
  // food
  async getFoodData (context) {
    await axios.get('https://dacntt2.onrender.com/api/foods/getAllFoods').then((response) => {
      const responseData = response.data
      context.commit('setFood', responseData)
    })
  },
  async postFood (context, payload) {
    await axios.post('https://dacntt2.onrender.com/api/foods/createFood', {
      name: payload.name,
      img: payload.img,
      price: payload.price,
      category: payload.category,
      isHidden: payload.isHidden,
      createdDate: payload.createdDate
    })
  },
  async updateFood (context, payload) {
    console.log(payload)
    await axios.put('https://dacntt2.onrender.com/api/foods/updateFood/' + payload._id, {
      name: payload.name,
      img: payload.img,
      price: payload.price,
      category: payload.category,
      isHidden: payload.isHidden,
      createdDate: payload.createdDate
    })
  },
  async deteteFood (context, payload) {
    await axios.delete('https://dacntt2.onrender.com/api/foods//deleteFood/' + payload)
  }
}
