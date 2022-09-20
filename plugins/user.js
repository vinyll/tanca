import Vue from 'vue'

const jsonUser = localStorage.getItem('user') || '{}'
const user = JSON.parse(jsonUser)

Vue.prototype.$user = user
