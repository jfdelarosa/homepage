<template lang="pug">
  card(title="Test component") Hola mundo
</template>
<script>
import card from './card';

export default {
  name: "test",
  components: {
    card
  }
}
</script>