<template lang="pug">
  div
    p Para poder sincronizar tus datos debes de iniciar sesión con alguna de las siguientes plataformas:
    .btn.btn--facebook Entrar con Facebook
</template>
<script>
export default {
  name: "auth"
}
</script>
<style lang="scss" scoped>
  .btn{
    border: 1px solid #ddd;
    background: #EEE;
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
    &--facebook{
      background: #3b5998;
      color: white;
      border: 1px solid #3b5998;
    }
  }
</style>
