<template>
  <div class="team">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-3 m-4">
        <Card nomeCompleto="Mirko Cimarelli" link="https://github.com/Cima9" />
      </div>
      <div class="col-3 m-4">
        <Card nomeCompleto="Yuri Cimmino" link="https://github.com/Jurij002" />
      </div>
      <div class="col-3 m-4">
        <Card
          nomeCompleto="Karan Kumar"
          link="https://github.com/karanBkumar "
        />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";

export default {
  name: "Team",
  components: {
    Card,
  },
};
</script>
