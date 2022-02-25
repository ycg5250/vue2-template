<template>
  <div class="home">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
export default {
  name: 'Home',
  components: { Header, Main, Footer },
}
</script>
