<template lang="pug">
  #app
    .grid
      .layout(v-for="components in layout")
        component(v-for="component in components",
        v-bind="component.props",
        :key="component.id",
        v-if="component.rule")
</template>

<script>
import Sortable from 'sortablejs';
import notepad from './components/notepad';
import test from './components/test';
import todo from './components/todo';

export default {
  name: 'app',
  components: {
    notepad,
    todo,
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
  },
  computed: {
    layout(){
      return [
        [
          {
            rule: true,
            id: 1,
            props: {
              is: "test"
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
            }
          }
        ],
        [
          {
            rule: true,
            id: 4,
            props: {
              is: "todo"
            }
          }
        ]
      ]
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
