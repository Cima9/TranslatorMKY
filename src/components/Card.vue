<template>
  <div class="card" style="width: 300px">
    <img
      class="card-img-top"
      src="../assets/LogoCards.jpg"
      alt="Card image"
      style="width: 100%"
    />
    <div class="card-body bg-primary text-light" style="border-radius: 5px">
      <h4 class="card-title">{{ nomeCompleto }}</h4>
      <p class="card-text">{{ nomeCompleto }} chiede di essere assunto :D</p>
      <a :href="link" class="btn btn-dark" target="_blank">See Git Profile</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    nomeCompleto: String,
    link: String,
  },
};
</script>
