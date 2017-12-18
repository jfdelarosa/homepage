<template lang="pug">
  div
    .notepad
      .notepad__header.handle
        .notepad__border Bloc de notas
      textarea.notepad__content(v-on:keyup="onKeyup" v-model="texto") {{val}}
  
</template>
<script>
import {firebase, firebaseApp} from "../firebaseApp";
var database = firebase.database();
export default {
  name: "notepad",
  props: ['uid', 'val'],
  methods: {
    onKeyup(){
      if(this.uid){
        database.ref("users/" + this.uid + "/notepad").update({
          text: this.texto,
          edited: Date.now()
        });
      }
    }
  },
  data(){
    return {
      texto: this.val
    }
  }
}
</script>
<style lang="scss" scoped>
.notepad {
  margin-bottom: 1rem;
  &__border{
    border: 1px dashed rgba(255, 255, 255, 0.4);
    border-radius: 4px 4px 0 0;
    padding: 0.3rem 0.8rem;
  }
  &__header{
    background: #baae6b;
    color: white;
    padding: 0.2rem;
    font-weight: 500;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
  }
  &__content{
    outline: none;
    display: block;
    box-sizing: border-box;
    line-height: 1.5rem;
    padding: 1rem 1rem;
    position: relative;
    border: 1px solid #B5B5B5;
    border-top: none;
    background: #fdff9b;
    color: rgba(0, 0, 0, 0.8);
    min-width: 100%;
    resize:vertical;
    &::before{
      content:"";
      z-index: -1;
      width: calc(100% - 6px);
      height: 10px;
      position: absolute;
      bottom: -3px;
      left: 2px;
      background: #fdff9b;
      border: 1px solid #B5B5B5;
    }
  }
}
</style>
