<template>
  <div class="urlShortener">
    <title> Url Shortener </title>
    <h1>{{ url }}</h1>
    Url: {{ shortenedUrl }}
    <p>
     This page allows for you to input a url and it will automatically be shortened.
    </p>
    <div>
      <input id="urlText" v-model="inputUrl" placeholder="URL to Shorten">
     <button type="button" on id="submitButton" class="btn btn-primary" v-on:click="putShortenedUrl(inputUrl)">Submit</button>
      <p style="padding-top: 25px">Input URL is: {{ inputUrl }}</p>
    </div>
    {{ allUrls[0] }}
  </div>
</template>

<script>
import UrlService from '../services/controller';

const urlService = new UrlService();

export default {
  name: 'Home',
  props: {
    url: String,
  },
  data() {
    return {
      inputUrl: '',
      allUrls: [],
      shortenedUrl: '',
    };
  },
  mounted() {
    urlService.getAllUrl().then((response) => {
      console.log(response);
      this.allUrls.push(response.data);
      console.log(this.allUrls);
    });
  },
  methods: {
    putShortenedUrl(longUrl) {
      urlService.postShortenUrl(longUrl).then((response) => { // Async method so added then
        this.shortenedUrl = response.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 40px 0 0;
}

.urlShortener {
  color: dodgerblue;
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

#submitButton {
  margin-left: 15px;
  margin-bottom: 4px;
}
</style>
