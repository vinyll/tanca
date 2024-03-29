import Vue from 'vue'

Vue.prototype.$card = {}

function loadCard() {
  const cardId = localStorage.getItem('cardId')
  if (cardId) {
    return Vue.prototype.$pocketbase.records.getOne('cards', cardId)
  }
}

// Allow components to force-access the card item calling it themselves
Vue.prototype.$loadCard = loadCard

// Inject the value of the card
;(async function() {
  Vue.prototype.$card = await loadCard()
})()
