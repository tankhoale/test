<template>
  <div v-if="isLoading">
    <loading-spinner></loading-spinner>
  </div>
  <div v-else class="table">
    <div class="table-header">
      <p>Menus</p>
      <div>
        <input v-model="filterTerm" placeholder="Name(Title) or Url" />
        <button @click="addClick" class="add-new">+ Add New</button>
      </div>
    </div>

    <div class="table-section">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Url</th>
            <th>route Name</th>
            <th>isHidden</th>
            <!-- <th>Language</th> -->
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ctt, i) in paginatedData" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ ctt.menuName }}</td>
            <td>{{ ctt.url }}</td>
            <td>{{ ctt.routeName }}</td>
            <td>{{ ctt.isHidden }}</td>
            <!-- <td>{{ ctt.lang }}</td> -->
            <td>
              <button @click="editClick(ctt)"><i class="fa-solid fa-pen-to-square"></i></button>
              <button @click="toggleAlert(ctt._id)"><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination">
      <div @click="changePage(currentPage - 1)" :disabled="currentPage === 1"><i class="fa-solid fa-angle-left"></i>
      </div>
      <div @click="changePage(1)" v-if="currentPage !== 1">1</div>
      <div v-if="currentPage - 2 >= 1" style="cursor: auto;"><i class="fa-solid fa-ellipsis"></i></div>
      <div style="color: #0298cf; background: rgba(171, 171, 171, 0.2);">{{ currentPage }}</div>
      <div v-if="currentPage + 2 <= totalPages" style="cursor: auto;"><i class="fa-solid fa-ellipsis"></i></div>
      <div @click="changePage(totalPages)" v-if="currentPage !== totalPages">{{ totalPages }}</div>
      <div @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"><i
          class="fa-solid fa-angle-right"></i></div>
    </div>
  </div>

  <!-- Modal" -->
  <base-modal :modalActive="modalActive" :modalTitle="modalTitle" @close="toggleModal">
    <div class="data-display">
      <div class="box">
        <p>Name</p>
      </div>
      <input type="text" v-model="menuName" />
    </div>

    <div class="data-display">
      <div class="box">
        <p>Url</p>
      </div>
      <input type="text" v-model="url" />
    </div>

    <div class="data-display">
      <div class="box">
        <p>Route Name</p>
      </div>
      <input type="text" v-model="routeName" />
    </div>

    <div class="data-display">
      <div class="box">
        <p>Hidden</p>
      </div>
      <select v-model="isHidden">
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
    </div>

    <div class="data-display">
      <div class="box">
        <p>Date Created</p>
      </div>
      <input type="text" v-model="createdDate" />
    </div>

    <div class="btn-container">
      <button type="button" v-if="id === 0" @click="createClick()">Create</button>
      <button type="button" v-if="id !== 0" @click="updateClick()">Update</button>
    </div>
  </base-modal>

  <alert-modal :modalActive="modalAlert" @close="toggleAlert(selectedId)" @delete="deleteClick(selectedId)"></alert-modal>
</template>
<script>
export default {
  data () {
    return {
      pageSize: 10,
      currentPage: 1,
      modalActive: false,
      modalAlert: false,
      modalTitle: '',
      filterTerm: '',
      isLoading: false,
      selectedId: 0,
      // data
      id: 0,
      menuName: '',
      url: '',
      routeName: '',
      isHidden: false,
      createdDate: ''
    }
  },
  computed: {
    getNavbar () {
      return this.$store.getters['nav/getNavbar']
    },
    filterItems () {
      if (!this.filterTerm) {
        return this.getNavbar
      }
      const searchTerm = this.filterTerm.toLowerCase()
      return this.getNavbar.filter(menu =>
        menu.menuName.toLowerCase().includes(searchTerm) ||
        menu.url.toLowerCase().includes(searchTerm)
      )
    },
    paginatedData () {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.filterItems.slice(start, end)
    },
    totalPages () {
      return Math.ceil(this.filterItems.length / this.pageSize)
    }
  },
  methods: {
    async getNavbarData () {
      this.isLoading = true
      try {
        await this.$store.dispatch('nav/getNavbarData')
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
      }
      this.isLoading = false
    },
    changePage (page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    },
    toggleModal () {
      this.modalActive = !this.modalActive
    },
    toggleAlert (id) {
      this.selectedId = id
      this.modalAlert = !this.modalAlert
    },
    getCurrentDate () {
      const date = new Date()
      const year = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice(-2) // Thêm số 0 phía trước nếu tháng < 10
      const day = ('0' + date.getDate()).slice(-2) // Thêm số 0 phía trước nếu ngày < 10
      return `${day}/${month}/${year}`
    },
    addClick () {
      this.toggleModal()
      this.modalTitle = 'Add Menu'
      this.id = 0
      this.menuName = ''
      this.url = ''
      this.routeName = ''
      this.isHidden = false
      this.createdDate = this.getCurrentDate()
    },
    async createClick () {
      const newNavbar = {
        menuName: this.menuName,
        url: this.url,
        isHidden: this.isHidden,
        routeName: this.routeName,
        createdDate: this.createdDate
      }
      try {
        await this.$store.dispatch('nav/postNavbar', newNavbar)
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
      }
      this.getNavbarData()
    },
    editClick (data) {
      this.toggleModal()
      this.modalTitle = 'Edit Menu'
      this.id = data._id
      this.menuName = data.menuName
      this.url = data.url
      this.isHidden = data.isHidden
      this.routeName = data.routeName
      this.createdDate = data.createdDate
    },
    async updateClick () {
      const updateNavbar = {
        _id: this.id,
        menuName: this.menuName,
        url: this.url,
        isHidden: this.isHidden,
        routeName: this.routeName,
        createdDate: this.createdDate
      }
      try {
        await this.$store.dispatch('nav/updateNavbar', updateNavbar)
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
      }
      this.getNavbarData()
    },
    async deleteClick (id) {
      await this.$store.dispatch('nav/deleteNavbar', id)
      this.toggleAlert()
      this.getNavbarData()
    }
  },
  created () {
    this.getNavbarData()
  }
}
</script>
<style scoped>
  .table {
    width: 100%;
  }

  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: rgb(240, 240, 240);
    flex-wrap: wrap;
  }

  .table-header p {
    color: #000;
  }

  button {
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    padding: 10px;
    color: #fff;
  }

  .add-new {
    padding: 10px 20px;
    color: #fff;
    background-color: #0298cf;
  }

  .table-header input {
    padding: 10px 20px;
    margin: 0 10px;
    outline: none;
    border: 1px solid #0298cf;
    border-radius: 6px;
    color: #0298cf;
  }

  ::placeholder {
    color: #0298cf;
  }

  /* table-header end */

  /* sua */
  .table-section {
    height: 630px;
    overflow: auto;
  }

  table {
    width: 100%;
    table-layout: auto;
    min-width: 1000px;
    border-collapse: collapse;
  }

  thead th {
    position: sticky;
    top: 0;
    background-color: #0298cf;
    color: #fff;
    font-size: 15px;
    height: 50px;
  }

  th,td {
    border-bottom: 1px solid #dddddd;
    padding: 10px 20px;
    word-break: break-all;
    text-align: center;
    border-right: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
  }

  td {
    text-align: left;
  }

  tr:hover td {
    background-color: #cfe2ff;
  }

  td button:nth-child(1) {
    background-color: #0298cf;
    margin-right: 10px;
  }

  td button:nth-child(2) {
    background-color: #f80000;
  }

  ::-webkit-scrollbar{
    height: 5px;
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3)
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3)
  }

  tr:nth-child(even) {background-color: #d9d9d9 }

  th:nth-child(1), td:nth-child(1) {
    text-align: center;
    width: 70px;
  }

  th:nth-child(6), td:nth-child(6) {
    text-align: center;
    width: 120px;
  }

  th:nth-child(5), td:nth-child(5) {
    text-align: center;
    width: 120px;
  }

  th:nth-child(4), td:nth-child(4) {
    text-align: center;
  }

  /* table end */
  .pagination {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 10px 20px;
  }

  .pagination div{
    padding: 10px;
    border: 1px solid #d5d0d0;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0298cf;
    color: #fff;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
    margin: 0 5px;
    cursor: pointer;
  }

  /* modal */
  .data-display {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  .data-display .box {
    width: 120px;
  }

  .data-display input {
    height: 40px;
    width: 100%;
    border-radius: 6px;
    font-size: 17px;
    border: 1px solid #d9d9d9;
    padding: 0px 10px;
  }

  .data-display select {
    height: 40px;
    width: 100%;
    border-radius: 6px;
    font-size: 17px;
    border: 1px solid #d9d9d9;
    padding: 0px 10px;
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
  }

  .btn-container button {
    padding: 12px 30px;
    color: #fff;
    background-color: #0298cf;
  }
</style>
