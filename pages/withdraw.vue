<template>
  <div>
    <van-form @submit="confirm">
      <van-cell-group>
        <van-field
          v-model="number"
          type="number"
          name="number"
          label="N° de carte"
          placeholder="ex : 385830"
          :rules="[{ required: true, message: 'Veuillez renseigner la carte du client' }]"
        />
        <van-field
          v-model="value"
          type="number"
          name="value"
          label="Montant"
          placeholder="en euros"
          :rules="[{ required: true, message: 'Veuillez renseigner le montant' }]"
        />
      </van-cell-group>

      <div style="margin: 16px;">
        <van-button :disabled="!amount" round block type="primary" native-type="submit">
          <span v-if="amount">Tamponner {{ amount }} points</span>
          <span v-else="amount">Tamponner…</span>
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
  definePageMeta({ title: 'Tamponner une carte' })
</script>

<script>
  import { Toast } from 'vant'

  export default {
    data() {
      return {
        number: null,
        value: null,
      }
    },

    methods: {
      confirm() {
        Toast.success(`${this.amount} points tamponnés`)
        this.reset()
      },

      reset() {
        this.value = null
        this.number = null
      }
    },

    computed: {
      amount() {
        return Math.round(this.value)
      }
    }
  }
</script>

<style>
  :host {
    --van-toast-text-min-width: 50%;
  }
</style>
