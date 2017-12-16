<template lang="pug">
  .card
    .card__header
      .card__header__left {{title}}
      .card__header__right
        i.fas.fa-bars
    .card__body
      slot
</template>

<script>
export default {
  name: 'card',
  props: ['title'],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  $border-color: #B3B4B9;
  $border-radius: 4px;
  .card{
    margin-bottom: 1rem;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    border-radius: $border-radius;
    &__header{
      background: #eee;
      border: 1px solid $border-color;
      border-bottom: none;
      padding: 0.5rem;
      border-radius: $border-radius $border-radius 0 0;
      display: flex;
      color: #707070;
      font-weight: 500;
      &__right{
        margin-left: auto;
        i{
          color: #A0A1A8;
        }
        .fa-bars{
          cursor: move;
        }
      }
    }
    &__body{
      background: white;
      border: 1px solid $border-color;
      padding: 0.5rem;
      border-radius: 0 0 $border-radius $border-radius;
    }
  }
</style>
