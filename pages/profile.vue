<template>
  <div>
    <primary-block title="Ma carte">
      {{$user.credit}} <small>points</small>
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
import primaryBlock from '~/components/primary-block.vue'

  export default {
  components: { primaryBlock },
    setup() {
      return {
        history: ref([]),
      }
    },

    async mounted() {
      const response = await this.$pocketbase.records.getFullList('transactions', 50, {
          sort: '-created',
      })
      this.history = response.map(item => {
        item.direction = item.from == this.$user.id ? 'deposit' : 'withdraw'
        item.label = `${item.from == this.$user.id ? '-' : '+'}${item.amount} points`
        item.displayDate = (new Date(item.created)).toLocaleString()
        return item
      })
    },
    
    methods: {
      logout() {
        this.$user = null
        localStorage.removeItem('user')
        this.$router.push('login')
      },

    },
      displayHistoryTitle(item) {
        return `${item.from == $user.id ? '-' : '+'}${item.amount}`
      }
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
