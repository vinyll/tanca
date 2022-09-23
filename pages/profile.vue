<template>
  <div>
    <primary-block title="Ma carte">
      {{$card.uid}}
      <aside slot="aside"><small>{{$card.credit}} points</small></aside>
    </primary-block>
    <van-cell-group inset>
      <van-cell v-for="item in history" :class="item.direction" v-bind:key="item.id" :title="item.label" :value="item.displayDate" />
    </van-cell-group>
    
    <van-row justify="center">
      <van-col offset="6" span="12">
        <van-button block round type="primary" @click="logout" icon="closed-eye">Quitter ma session</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      return {
        history: ref([]),
      }
    },
    
    async mounted() {
      const response = await this.$pocketbase.records.getFullList('transactions', 50, {
          sort: '-created',
          cardId: this.$card.id,
      })
      
      this.history = response.map(item => {
        item.direction = item.from == this.$card.id ? 'deposit' : 'withdraw'
        item.label = `${item.from == this.$card.id ? '-' : '+'}${item.amount} points`
        item.displayDate = (new Date(item.created)).toLocaleString()
        return item
      })
    },
    
    methods: {
      logout() {
        this.$card = null
        localStorage.removeItem('cardId')
        this.$router.push('login')
      },
    },
  }
</script>

<style>
  .withdraw {
    color:rgb(44, 155, 44);
  }
  .deposit {
    color:red;
  }
</style>
