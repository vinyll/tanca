import PocketBase from 'pocketbase'
import Vue from 'vue'


Vue.prototype.$pocketbase = new PocketBase('https://admin.tanca.collectivite.org')
