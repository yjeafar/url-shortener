<template>
  <div class="url-shortner">
    <h1>{{ url }}</h1>
    <p>
     This page allows for you to input a url and it will automatically be shortened.
    </p>
    <div>
        <input v-model="inputUrl" placeholder="URL you'd like to shorten here">
        <p>Input URL is: {{ inputUrl }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UrlShortener',
  props: {
    url: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 40px 0 0;
}

</style>
