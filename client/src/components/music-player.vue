<template>
  <div class="musicPlayer">
    <div>
       This is the Music Player
    </div>
  </div>
</template>
<script>
export default {
  name: 'MusicPlayer',
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
.musicPlayer { /* Bootswatch for themes */
  color: dodgerblue;
  width: 100%;
}

div {
  margin: 40px 0 0;
}
</style>
