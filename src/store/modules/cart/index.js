
export default {
  namespaced: true,
  state () {
    return {
      items: [],
      total: 0,
      quantity: 0
    }
  },
  mutations: {
    addProductToCart (state, payload) {
      const productData = payload
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      )

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].quantity++
        state.items[productInCartIndex].sum += productData.price
      } else {
        const newItem = {
          productId: productData.id,
          name: productData.name,
          image: productData.image,
          price: productData.price,
          sum: productData.price,
          quantity: 1
        }
        state.items.push(newItem)
      }
      state.quantity++
      state.total += productData.price
    },

    removeProductFromCart (state, payload) {
      const prodId = payload.productId
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      )
      const prodData = state.items[productInCartIndex]
      state.items.splice(productInCartIndex, 1)
      state.quantity -= prodData.quantity
      state.total -= prodData.price * prodData.quantity
    }
  },
  actions: {
    addToCart (context, payload) {
      context.commit('addProductToCart', payload)
    },
    removeFromCart (context, payload) {
      context.commit('removeProductFromCart', payload)
    }
  },
  getters: {
    products (state) {
      return state.items
    },
    totalSum (state) {
      return state.total
    },
    quantity (state) {
      return state.quantity
    }
  }
}
