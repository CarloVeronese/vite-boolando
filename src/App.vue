<script>
import PageHeader from "./components/PageHeader.vue";
import PageMain from "./components/PageMain.vue";
import PageFooter from "./components/PageFooter.vue";
import productsJson from "./db.json"
export default {
  data() {
    return {
      cards: productsJson.products
    }
  },
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
}
</script>

<template>
  <div class="page-content">
    <PageHeader />
    <div class="container">
      <div class="row justify-between cards-container">
        <div class="col-4" v-for="card in cards">
          <PageMain :card="card" />
        </div>
      </div>
    </div>
    <PageFooter />    
  </div>
</template>

<style lang="scss">
@use './style/general.scss';
.cards-container {
  padding: 55px 0;
  row-gap: 50px;
}
</style>
