/* eslint-disable */
import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      invoices: []
    }
  },
  getters: {
    getInvoice (state) {
      return state.invoices
    },
    getInvoicesToday (state) {
      const today = new Date().toISOString().split('T')[0] // Lấy ngày hôm nay dưới dạng YYYY-MM-DD

      // Hàm chuyển đổi định dạng ngày từ DD/MM/YYYY sang YYYY-MM-DD
      function convertDateFormat (date) {
        const [day, month, year] = date.split('/')
        return `${year}-${month}-${day}`
      }

      return state.invoices.filter(invoice => {
        const invoiceDate = convertDateFormat(invoice.date)
        return invoiceDate === today
      })
    }
  },
  mutations: {
    setInvoices (state, payload) {
      state.invoices = payload
    }
  },
  actions: {
    async getInvoiceData (context) {
      await axios.get('https://dacntt2.onrender.com/api/invoice/getAllInvoices').then((response) => {
        const responseData = response.data
        context.commit('setInvoices', responseData)
      })
    },
    async postInvoice (context, payload) {
      console.log(payload)
      await axios.post('https://dacntt2.onrender.com/api/invoice/createInvoice', {
        items: payload.items,
        date: payload.date,
        time: payload.time,
        subtotal: payload.subtotal,
        discount: payload.discount,
        total: payload.total
      })
    },
    async updateInvoice (context, payload) {
      console.log(payload)
      await axios.put('https://dacntt2.onrender.com/api/invoice/updateInvoiceDateTime/' + payload._id, {
        date: payload.date,
        time: payload.time
      })
    },
    async deteteInvoice (context, payload) {
      await axios.delete('https://dacntt2.onrender.com/api/invoice/deleteInvoiceById/' + payload)
    }
  }
}
