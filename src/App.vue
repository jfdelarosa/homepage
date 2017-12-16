<template lang="pug">
  #app
    .grid
      .layout(v-for="components in layout")
        component(v-for="component in components",
          v-bind:is="component.name",
          :key="component.id") {{component.id}}
</template>

<script>
import Sortable from 'sortablejs';
import card from './components/card';

var layout = [
  [
    {
      "name": "card",
      "id": 1
    }
  ],
  [
    {
      "name": "card",
      "id": 2
    }
  ],
  [
    {
      "name": "card",
      "id": 3
    },
    {
      "name": "card",
      "id": 4
    }
  ]
];

export default {
  name: 'app',
  components: {
    card
  },
  mounted(){
    for(var i = 0; i <= 2; i++){
      Sortable.create(document.getElementsByClassName('layout')[i], {
        group: "ui",
        animation: 150
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
    background: #eee;
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
</style>
