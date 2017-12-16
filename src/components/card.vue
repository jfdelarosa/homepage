<template lang="pug">
  .card
    .card__header Titulo {{order}}
    .card__body
      slot
</template>

<script>
export default {
  name: 'card',
  props: ['order', 'width', 'height'],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .card{
    margin-bottom: 1rem;
    &__header{
      background: #eee;
      border: 1px solid black;
      border-bottom: none;
      padding: 0.5rem;
    }
    &__body{
      background: white;
      border: 1px solid black;
      padding: 0.5rem;
    }
  }
</style>
