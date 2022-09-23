<template>
    <div>
      <primary-block title="Montant dépensé">
        <van-field class="euros" v-model="eurosString" readonly clickable @touchstart.stop="showPad = true" />
      </primary-block>

      <section id="amount" v-if="euros">
        <h3>{{amount}} points 🏅</h3>
      </section>

      <section id="recipient" v-if="amount">
        <h3>Carte bénéficiaire</h3>
        <van-field v-model="recipient" placeholder="A1B2" pattern="[a-zA-Z0-9]{4}" maxlength="4" minlength="4" />
      </section>

      <section id="submit" v-if="amount && recipientIsValid">
        <van-button round type="primary" :disabled="$card.credit < amount" @click="submit">
          Envoyer {{amount}} point
        </van-button>
      </section>

      <van-number-keyboard
        v-model="euros"
        :show="showPad"
        :maxlength="3"
        @blur="showPad = false"
        close-button-text="Fermer"
      />

    </div>
</template>

<script>
  import { ref } from 'vue'
  import { Toast } from 'vant'

  export default {
    setup() {
      return {
        showPad: ref(true),
        euros: ref('22'),
        recipient: ref(''),
      }
    },

    computed: {
      eurosString() {
        return this.euros ? `${this.euros}€` : ''
      },
      amount() {
        return Math.floor(this.euros / 3)
      },
      recipientIsValid() {
        return this.recipient.trim().length === 4
      }
    },

    methods: {
      async submit() {
        const client = this.$pocketbase
        try {
          // get recipient
          const toResponse = await client.records.getList('cards', 1, 1, {
              filter: `uid = "${this.recipient.toUpperCase()}"`,
          })
          const recipient = toResponse.items[0]

          // remove credit from card
          await client.records.update('cards', recipient.id, {
            credit: recipient.credit + this.amount
          })
          
          // save transaction in history
          const record = await client.records.create('transactions', {
            from: this.$card.id,
            to: recipient.id,
            amount: this.amount,
          })
          
          // give credit to recipient
          await client.records.update('cards', this.$card.id, {
            credit: this.$card.credit - this.amount
          })

          const toast = Toast({
            message: 'Envoyé !',
            icon: 'success',
            onClose: () => {
              this.euros = ''
              this.showPad = true
              this.recipient = ''
            },
          })
        } catch(e) {
          const toast = Toast({
            message: 'Erreur…',
            icon: 'error',
          })
        }
      }
    }
  }
</script>

<style>
  :host() {
    --van-toast-background-color: rgb(91, 160, 74);
  }
  h1, h2, h3 {
    text-align: center;
    margin: 0;
  }
  section {
    padding: 1.5rem;
  }
  .van-cell {
    background-color: transparent;
    color: inherit;
  }
  #recipient input {
    font-size: 50px;
  }
  .euros input {
    text-align: center;
    color: white;
  }

  #recipient input {
    margin: auto;
    border-bottom: 1px dashed rgb(10, 110, 110);
    max-width: 120px;
    font-family: monospace;
    text-transform: uppercase;
  }

  #submit {
    text-align: center;
  }
</style>
