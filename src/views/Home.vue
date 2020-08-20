<template>
  <div class="home">
    <div class="wrapper">
      <div class="header">
        {{header}}
        <div class="cardList">
          <Card 
            v-for="good in goods" 
            :key="goods.indexOf(good)" 
            :good="good" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '../components/Card.vue'
import goods from '../data/dummydata'

export default {
  data: () => ({
    header: 'Ты сегодня покормил кота?',
  }),
  components:{
    Card
  },
  computed:{
    ...mapGetters({
      goods: 'getGoods',
    })
  }
}
</script>

<style scoped>
.home{
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 1230px) {
  .home{
    height: 97vh;
  }
}
.header{
  margin-top: 45px;
  font-size: 36px;
  font-family: "exo2";
  color: rgb(255, 255, 255);
  line-height: 1.2;
  text-align: center;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.004);
}

.cardList{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>