<template lang="pug">
  div
    p Para poder sincronizar tus datos debes de iniciar sesión con alguna de las siguientes plataformas:
    .btn.btn--facebook(v-on:click="facebookAuth") Entrar con Facebook
</template>
<script>
import {firebase, firebaseApp} from "../firebaseApp";
var database = firebase.database();
var provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({
  'display': 'popup'
});

export default {
  name: "auth",
  methods: {
    facebookAuth(){
      firebaseApp.auth().signInWithPopup(provider).then((result) =>{
        if(result.additionalUserInfo.isNewUser){
          database.ref("users/").child(result.user.uid).set({
            provider: result.additionalUserInfo.providerId,
            name: result.user.displayName
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }
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
