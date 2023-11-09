<script>
import PageHeader from "./components/PageHeader.vue";
import PageMain from "./components/PageMain.vue";
import PageFooter from "./components/PageFooter.vue";
import { store } from './store';
import axios from 'axios';
export default {
  data() {
    return {
      store: store,
      open: false,
      selectedCard: {},
      selectedDiscountPrice: '',
      slectedCardLiked: 'No',
    }
  },
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  created(){
    axios.get('http://localhost:3000/products')
    .then(res => {
      const items = res.data;
      this.store.items = items;
    })
  },
  methods:{
    showModal(card, discountedPrice) {
      this.open = true;
      this.selectedCard = card;
      this.selectedDiscountPrice = discountedPrice;
      if(card.isInFavorites) this.slectedCardLiked = 'Yes';
      else this.slectedCardLiked = 'No';
    },
    closeModal() {
      this.open = false;
    },
    clickLike(index) {
      this.store.items[index].isInFavorites = !this.store.items[index].isInFavorites;
    }
  },
}
</script>

<template>
  <div class="page-content">
    <PageHeader />
    <div class="container">
      <div class="row justify-between cards-container">
        <div class="col-4" v-for="(card,index) in store.items">
          <PageMain :card="card" @show="showModal" @liked="clickLike(index)" />
        </div>
      </div>
    </div>
    <PageFooter />    
  </div>
  <div class="modal" v-show="open">
    <div class="content">
      <ul>
        <li>Brand: {{ selectedCard.brand }}</li>
        <li>Item: {{ selectedCard.name }}</li>
        <li>Price: {{ selectedCard.price }} &euro;</li>
        <li>Final Price: {{ selectedDiscountPrice }} &euro;</li>
        <li v-for="badge in selectedCard.badges">{{ badge.type }}: {{ badge.value }}</li>
        <li>Liked: {{ slectedCardLiked }}</li>
      </ul>
      <span @click="closeModal()"><font-awesome-icon icon="fa-regular fa-circle-xmark" /></span>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/general.scss';
.cards-container {
  padding: 55px 0;
  row-gap: 50px;
}

.modal {
  &::after{
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 40;
    background-color: rgba(0,0,0,0.5);
  }
  .content {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    max-width: 450px;
    span {
      cursor: pointer;
    }
  }
}
</style>
