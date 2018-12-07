<template>
  <footer class="footerq">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <p>{{ (new Date()).getFullYear() }} Reguity Group AB (publ)</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ReguityFooter',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .footerq {
    color: #ccc;
    position: relative;
    z-index: 10;
    background-color: #34495e;
  }
</style>
