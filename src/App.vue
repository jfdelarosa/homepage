<template lang="pug">
  #app
    header
      span(v-on:click="logout") Logout
    .grid
      .layout(v-for="components in layout")
        component(v-for="component in components",
        :title="component.title",
        :key="component.id",
        v-bind:is="component.name"
        v-if="component.rule")
</template>

<script>
import {firebase, firebaseApp} from "./firebaseApp";
import Sortable from 'sortablejs';
import auth from './components/auth';
import notepad from './components/notepad';
import test from './components/test';

export default {
  name: 'app',
  components: {
    auth,
    notepad,
    test
  },
  mounted(){
    for(var i = 0; i <= 2; i++){
      Sortable.create(document.getElementsByClassName('layout')[i], {
        group: "ui",
        animation: 150,
        handle: ".handle",
        onStart(){
          for(var i = 0; i <= 2; i++){
            document.getElementsByClassName("layout")[i].classList.add("drop");
          };
        },
        onEnd(){
          for(var i = 0; i <= 2; i++){
            document.getElementsByClassName("layout")[i].classList.remove("drop");
          };
        }
      });
    }
    firebase.auth().onAuthStateChanged(this.onUserLogin);
  },
  methods: {
    onUserLogin(user) {
      if(user){
        console.log(user.uid);
        this.user = user;
        this.loggedIn = true;
      }
    },
    onUserLogout(){
      this.user = undefined;
      this.loggedIn = false;
    },
    logout(){
      firebase.auth().signOut().then(this.onUserLogout);
    }
  },
  computed: {
    layout(){
      return [
        [
          {
            name: "auth",
            id: 1,
            rule: (this.loggedIn === false)
          },
          {
            name: "test",
            title: "Test component",
            id: 2,
            rule: true
          }
        ],
        [
          {
            name: "notepad",
            id: 3,
            rule: true
          }
        ],
        [
          {
            name: "test",
            title: "Test component",
            id: 4,
            rule: true
          }
        ]
      ]
    }
  },
  data(){
    return {
      loggedIn: false,
      user: undefined
    }
	}
}
</script>

<style lang="scss">
  body{
    background: #e3eded;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    .layout{
      border: 2px dashed transparent;
      &.drop{
        border: 2px dashed rgba(0, 0, 0, 0.15);
        background: rgba(0, 0, 0, 0.05);
      }
    }
  }
</style>
