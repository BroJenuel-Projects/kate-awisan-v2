<template>
  <Header />
  <main>
    <router-view/>
  </main>
  <Footer />
</template>
<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
export default {
  components: {Header, Footer}
}
</script>
<style lang="scss">
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>