<template lang="pug">
  #app
    header
      span(v-on:click="logout") Logout
    .grid
      .layout(v-for="components in layout")
        component(v-for="component in components",
        v-bind="component.props",
        :key="component.id",
        v-if="component.rule")
</template>

<script>
import {firebase, firebaseApp} from "./firebaseApp";
import Sortable from 'sortablejs';
import auth from './components/auth';
import notepad from './components/notepad';
import test from './components/test';

var database = firebase.database();

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
        this.user = user;
        this.loggedIn = true;
        database.ref("users/" + this.user.uid + "/notepad").on('value', this.readNotepad);
      }
    },
    readNotepad(res){
      this.notepadText = res.val().text;
    },
    logout(){
      firebase.auth().signOut().then(this.onUserLogout);
    },
    onUserLogout(){
      this.user = {};
      this.loggedIn = false;
    }
  },
  computed: {
    layout(){
      return [
        [
          {
            rule: (this.loggedIn === false),
            id: 1,
            props: {
              is: "auth"
            }
          },
          {
            rule: true,
            id: 2,
            props: {
              is: "test"
            }
          }
        ],
        [
          {
            rule: true,
            id: 3,
            props: {
              is: "notepad",
              val: this.notepadText,
              uid: this.user.uid
            }
          }
        ],
        [
          {
            rule: true,
            id: 4,
            props: {
              is: "test"
            }
          }
        ]
      ]
    }
  },
  data(){
    return {
      loggedIn: false,
      notepadText: "",
      user: {
        uid: null
      }
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
    padding: 1rem;
    .layout{
      border: 2px dashed transparent;
      &.drop{
        border: 2px dashed rgba(0, 0, 0, 0.15);
        background: rgba(0, 0, 0, 0.05);
      }
    }
  }
</style>
