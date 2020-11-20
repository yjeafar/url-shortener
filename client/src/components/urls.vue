<template>
  <div>
    <div class="urlShortener">
      <title> Url Shortener </title>
      <h1>{{ titleHeader }}</h1>
      <p>
      This page allows for you to input a url and it will automatically be shortened.
      </p>
      <div id="errorMessage" v-if="!urlIsValid"> Url is incorrect. Remember to include the protocol and subdomain </div>
      <div>
        <input id="urlText" v-model="inputUrl" placeholder="URL to Shorten">
      <button type="button" on id="submitButton" class="btn btn-primary" v-on:click="putShortenedUrl(inputUrl)">Submit</button>
      <h2 id="shortenedUrlsHeader">
        Shortened Urls
      </h2>
       <!-- eslint-disable-next-line vue/require-v-for-key -->
      <div v-for="url in shortenedUrls">
         Long Url: {{ url.originalUrl }} - Short Url: {{ url.shortUrl }}
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import UrlService from '../services/UrlController';

const validUrl = require('valid-url');

const urlService = new UrlService();

export default {
  name: 'Home',
  props: {
    titleHeader: String,
  },
  data() {
    return {
      inputUrl: '',
      shortenedUrls: [],
      urlIsValid: Boolean, // Boolean value so when component mounts the error message isn't shown right away
      submitButtonClicked: false,
    };
  },
  mounted() {
    urlService.getAllUrl().then((response) => {
      console.log(response);
    });
  },
  methods: {
    putShortenedUrl(longUrl) {
      this.submitButtonClicked = true;
      if (validUrl.isUri(longUrl)) {
        this.urlIsValid = true;
        urlService.postShortenUrl(longUrl).then((response) => { // Async method in service class so added 'then'
          this.shortenedUrls.push(response.data);
        });
      } else {
        this.urlIsValid = false;
      }
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
  padding: 6px;
  width: 40%;
}

#submitButton {
  margin-left: 1%;
  margin-bottom: 5px;
  width: 10%;
  min-width: 70px;
  height: 40px;
}

#errorMessage {
  color: rgb(212, 29, 29);
  border: 1px solid black;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  padding: 1%;
}

#shortenedUrlsHeader {
  padding-top: 2%;
}
</style>
