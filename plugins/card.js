import Vue from 'vue'

const cardId = localStorage.getItem('cardId')
Vue.prototype.$card = {}

if(cardId) {
  ;(async function() {
    const client = Vue.prototype.$pocketbase
    const card = await client.records.getOne('cards', cardId)
    Vue.prototype.$card = card
  })()
}

// (@request.data.uid = uid && @request.data.key = key) || @request.data.id = id