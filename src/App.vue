<template lang="pug">
  #app
    .grid
      .layout(v-for="components in layout")
        card(v-for="component in components",
        :title="component.title",
        :key="component.id")
          component(v-bind:is="component.name")
</template>

<script>
import Sortable from 'sortablejs';
import card from './components/card';
import auth from './components/auth';
import test from './components/test';

var layout = [
  [
    {
      "name": "auth",
      "title": "Autenticación",
      "id": 1
    }
  ],
  [
    {
      "name": "test",
      "title": "Test component",
      "id": 2
    }
  ],
  [
    {
      "name": "test",
      "title": "Test component",
      "id": 3
    },
    {
      "name": "test",
      "title": "Test component",
      "id": 4
    }
  ]
];

export default {
  name: 'app',
  components: {
    card,
    auth,
    test
  },
  mounted(){
    for(var i = 0; i <= 2; i++){
      Sortable.create(document.getElementsByClassName('layout')[i], {
        group: "ui",
        animation: 150,
        handle: ".fa-bars",
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
  },
  data(){
    return {
      layout: layout
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
