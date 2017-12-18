<template lang="pug">
div
  input.new(v-model="it" v-on:keyup.enter="newItem" placeholder="Crear nueva tarea")
  ul.todo
    li.item(v-for="(item, index) in items")
      label.checkbox(v-bind:class="{done: item.checked}")
        input.checkbox(type="checkbox" v-model="item.checked")
        i.far(v-bind:class="[item.checked ? 'fa-check-square' : 'fa-square']")
      span(v-bind:class="{done: item.checked}") {{item.value}}
      i.fas.fa-times(v-on:click="deleteItem(index)")
</template>
<script>
export default {
  name: "todo",
  mounted(){
    if(localStorage.todoItems){
      this.items = JSON.parse(localStorage.todoItems);
    }
  },
  methods: {
    newItem(){
      this.items.push({
        value: this.it,
        checked: false
      });
      this.it = "";
      localStorage.todoItems = JSON.stringify(this.items);
    },
    deleteItem(index){
      this.items.splice(index, 1);
      localStorage.todoItems = JSON.stringify(this.items);
    }
  },
  watch: {
    items: {
      handler(val){
        localStorage.todoItems = JSON.stringify(this.items);
      },
      deep: true
    }
  },
  data(){
    return {
      it: "",
      items: [
        {
          value: "hola mundo :)",
          checked: true
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.new{
  width: 100%;
  border: 1px solid #dedede;
  padding: 0.5rem;
  box-sizing: border-box;
}
.todo{
  color: #555;
  border: 1px solid #dedede;
  border-top: none;
  border-bottom: none;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    list-style: none;
    border-bottom: 1px dotted #ccc;
    height: auto;
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    background: #FBFBFB;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    &:last-child{
      border-bottom: 1px solid #dedede;
    }
    &:hover{
      .fa-times{
        opacity: 1;
      }
    }
    span{
      cursor: text;
      &.done{
        text-decoration: line-through;
        color: #888;
      }
    }
    .fa-times{
      margin-left: auto;
      opacity: 0;
      color: #f45b69;
      transition: 0.2s all ease-in-out;
    }
  }
  .checkbox{
    margin: 0 1rem 0 0;
    color: #788186;
    &.done{
      color: #98a2a7;
    }
    input{
      display: none;
    }
  }
}

</style>