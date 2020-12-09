<template>
  <div>
    <div class="home">
        This is the home page. Welcome to my projects.
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  props: {
    titleHeader: String,
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home { /* Bootswatch for themes */
  color: dodgerblue;
}

div {
  margin: 40px 0 0;
}
</style>
