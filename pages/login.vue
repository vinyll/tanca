<template>
  <van-form @submit="submit">
    <van-cell-group inset>
      <h3>Informations de carte</h3>
      <van-field
        v-model="uid"
        type="text"
        name="uid"
        label="Numéro"
        placeholder="A2D4"
        minlength="4"
        maxlength="4"
        :rules="[{ required: true, message: 'Votre numéro de carte est requis' }]"
      />
      <van-field
        v-model="key"
        type="text"
        name="key"
        label="Clé"
        placeholder="a1a2a3a4a8"
        minlength="10"
        maxlength="10"
        :rules="[{ required: true, message: 'Votre code clé est requis' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        Valider
      </van-button>
    </div>
  </van-form>
</template>

<script>
  import { ref } from 'vue'
  import { Toast } from 'vant'

  export default {
    layout: 'blank',
    setup() {
      return {
        uid: ref(''),
        key: ref(''),
      }
    },

    methods: {
      async submit() {
        const client = this.$pocketbase
        const response = await client.records.getList('cards', 1, 1, {
          filter: `uid="${this.uid}" && key="${this.key}"`
        })
        const card = response.items[0]
        if(card) {
          localStorage.setItem('cardId', card.id)
          this.$router.push('profile')
        } else {
          const toast = Toast({
            message: 'Invalide',
            icon: 'cross',
          })
        }
      }
    }
  }
</script>
