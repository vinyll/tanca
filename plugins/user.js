import Vue from 'vue'

const userId = localStorage.getItem('userId')
Vue.prototype.$user = {}

if(userId) {
  ;(async function() {
    const client = Vue.prototype.$pocketbase
    const user = await client.records.getOne('cards', userId)
    Vue.prototype.$user = user
  })()
}