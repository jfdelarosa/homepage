// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import firebase from "firebase";
import VueFire from "vuefire";

Vue.use(VueFire);
Vue.config.productionTip = false


var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBRUMBqvqwLNpjNVXFbKCkjZeNquIj5JnU ",
  authDomain: "custom-homepage.firebaseapp.com",
  databaseURL: "https://custom-homepage.firebaseio.com"
});
var db = firebaseApp.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
