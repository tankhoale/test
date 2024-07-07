import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      employees: [],
      roles: []
    }
  },
  getters: {
    getEmployees (state) {
      return state.employees
    },
    getRoles (state) {
      return state.roles
    },
    getRoleForEmployee (state) {
      return state.roles.map(item => ({
        _id: item._id,
        name: item.name
      }))
    }
  },
  mutations: {
    setEmployees (state, payload) {
      state.employees = payload
    },
    setRoles (state, payload) {
      state.roles = payload
    }
  },
  actions: {
    async getEmployeeData (context) {
      await axios.get('https://dacntt2.onrender.com/api/employees/getAllEmployees').then((response) => {
        const responseData = response.data
        context.commit('setEmployees', responseData)
      })
    },
    async getRoleData (context) {
      await axios.get('https://dacntt2.onrender.com/api/roles/getAllRoles').then((response) => {
        const responseData = response.data
        context.commit('setRoles', responseData)
      })
    },
    async postEmployee (context, payload) {
      console.log(payload)
      await axios.post('https://dacntt2.onrender.com/api/employees/createEmployee', {
        name: payload.name,
        phoneNumber: payload.phoneNumber,
        address: payload.address,
        dateOfBirth: payload.dateOfBirth,
        roleId: payload.roleId,
        createdDate: payload.createdDate
      })
    },
    async updateEmployee (context, payload) {
      console.log(payload)
      await axios.put('https://dacntt2.onrender.com/api/employees/updateEmployee/' + payload._id, {
        name: payload.name,
        phoneNumber: payload.phoneNumber,
        address: payload.address,
        dateOfBirth: payload.dateOfBirth,
        roleId: payload.roleId,
        createdDate: payload.createdDate
      })
    },
    async deteteEmployee (context, payload) {
      await axios.delete('https://dacntt2.onrender.com/api/employees/deleteEmployee/' + payload)
    }
  }
}
