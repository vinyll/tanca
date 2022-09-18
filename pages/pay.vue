<template>
    <div>
      <section id="euros">
        &nbsp;
        <h2>Montant dépensé</h2>
        <van-field class="euros" v-model="eurosString" readonly clickable @touchstart.stop="showPad = true" />
      </section>

      <section id="amount" v-if="euros">
        <h3>{{amount}} points 🏅</h3>
      </section>

      <section id="recipient" v-if="amount">
        <h3>Carte bénéficiaire</h3>
        <van-field v-model="recipient" placeholder="A1B2" pattern="[a-zA-Z0-9]{4}" maxlength="4" minlength="4" />
      </section>

      <section id="submit" v-if="amount && recipientIsValid">
        <van-button round type="primary" @click="submit">
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
        euros: ref(''),
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
      submit() {
        const toast = Toast({
          message: 'Envoyé !',
          icon: 'success',
          onClose: () => {
            this.euros = ''
            this.showPad = true
            this.recipient = ''
          },
        })
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
    padding: 1.44rem;
  }
  #euros {
    background-color: rgb(10, 110, 110);
    color: white;
  }
  #euros .van-cell {
    background-color: transparent;
    color: inherit;
  }
  .euros,
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
