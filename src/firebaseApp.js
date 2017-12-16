import Vue from "vue";
import fire from "firebase";
import VueFire from "vuefire";

Vue.use(VueFire);

export const firebase = fire;
export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBRUMBqvqwLNpjNVXFbKCkjZeNquIj5JnU ",
  authDomain: "custom-homepage.firebaseapp.com",
  databaseURL: "https://custom-homepage.firebaseio.com"
});