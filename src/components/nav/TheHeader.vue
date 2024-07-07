<template>
  <header>
    <img class="logo" src="../../assets/qtt1.png" alt="logo">
    <nav>
      <ul class="nav-links">
        <li v-for="(nav,i) in navbar" :key="i">
          <router-link :to="nav.url">{{ nav.menuName }}</router-link>
        </li>
      </ul>
    </nav>
    <router-link to="/cart"><i class="fas fa-solid fa-basket-shopping"></i></router-link>
  </header>
  <div class="block"></div>
</template>
<script>

export default {
  data () {
    return {

    }
  },
  computed: {
    navbar () {
      console.log(this.$store.getters['nav/getNavbarForFrontend'](2))
      return this.$store.getters['nav/getNavbarForFrontend'](2)
    }
  }
}
</script>
<style scoped>
li,
a,
button {
  font-size: 20px;
  text-decoration: none;
  color: black;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  height: 80px;
}

.logo {
  cursor: pointer;
  height: 80px;
  width: 100px;
}

.nav-links {
  list-style: none;
}

.nav-links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav-links li a {
  transition: all 0.3s ease 0s;
}

.nav-links li a:hover {
  color: #0088a9;
}

.fas {
  font-size: 20px;
}

button:hover {
  background-color: rgba(0, 136 169, 0.8);
}

  a.router-link-active {
  color: #42b983;
}

.block {
  width: 100%;
  height: 50px;
  background: #000000;
}
</style>
