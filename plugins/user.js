import Vue from 'vue'

const jsonUser = localStorage.getItem('user', '{}')
const user = JSON.parse(jsonUser)
user.isAuthenticated = function() {
  return !!this.id
}

Vue.prototype.$user = user
