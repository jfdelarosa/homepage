<template lang="pug">
  card(:title="title") Hola mundo
</template>
<script>
import card from './card';

export default {
  name: "test",
  props: ['title'],
  components: {
    card
  }
}
</script>