<template>
  <van-form @submit="submit">
    <van-cell-group inset>
      <van-field
        v-model="email"
        type="email"
        name="email"
        label="Email"
        placeholder="moi@mail.com"
        :rules="[{ required: true, message: 'Ce champs est requis' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="Password"
        label="Mot de passe"
        :rules="[{ required: true, message: 'Votre mot de passe est requis' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        Submit
      </van-button>
    </div>
  </van-form>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'LoginPage',
    setup() {
      return {
        email: ref(''),
        password: ref(''),
      }
    },

    async mounted() {
      const client = this.$pocketbase
      const records = await client.records.getFullList('transactions', 200 /* batch size */, {
        sort: '-created',
      })
    },

    methods: {
      submit() {

      }
    }
  }
</script>
