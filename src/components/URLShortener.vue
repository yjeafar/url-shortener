<template>
  <div class="url-shortner">
    <h1>{{ url }}</h1>
    <p>
     This page allows for you to input a url and it will automatically be shortened.
    </p>
    <div>
      <input id="urlText" v-model="inputUrl" placeholder="URL to Shorten">
      <p>Input URL is: {{ inputUrl }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UrlShortener',
  props: {
    url: String
  },
  data() {
    return {
      inputUrl: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 40px 0 0;
}
#urlText {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border-color: silver;
  outline: none;
  border-style: solid;
  padding: 3px;
}
</style>

