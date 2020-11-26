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
        <ul class="list-group" v-for="url in shortenedUrls">
          <div class="container">
              <li class="list-group-item">
                <div class="row">
                  <div class="col">
                    <span class="longUrl"> Old Url: <a v-bind:href="url.originalUrl"> {{ url.originalUrl }} </a> </span>
                  </div>
                  <div class="col">
                    <span class="shortUrl"> New Url: <a v-bind:href="url.shortUrl"> {{ url.shortUrl }} </a>
                    <button type="button" on id="copyButton" class="btn btn-secondary" v-on:click="putShortenedUrl(inputUrl)">Copy</button>
                    </span>
                  </div>
                </div>
              </li>
          </div>
        </ul>
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
        urlService.postShortenUrl(longUrl).then((response) => {
          // Checks if url code is in the current array, if it's not then push object
          if (!this.compareValues(response.data.urlCode) || this.shortenedUrls.length < 1) {
            this.shortenedUrls.push(response.data);
          }
        });
      } else {
        this.urlIsValid = false;
      }
    },
    compareValues(urlCode) {
      for (let i = 0; i < this.shortenedUrls.length; i += 1) {
        const urlObject = { ...this.shortenedUrls[i] }; // Assigns copy of proxy object and does check
        if (urlObject.urlCode === urlCode) {
          return true;
        }
      }
      return false;
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

.longUrl {
  min-width: 150px;
  max-width: 425px;
  overflow: hidden;
  text-overflow: ellipsis;
  float: left;
  white-space: nowrap;
  padding-top: 1%;
}

.shortUrl {
  float:right;
  min-width: 150px;
  white-space: nowrap;
}

.container {
  width: 60%;
  margin-left:auto;
  margin-right:auto;
}

.row {
  margin-top: 0%;
  padding-top: 0%;
}

.col {
  margin-bottom: 0%;
  margin-top: 0%;
}

.list-group-item {
  margin-bottom: 3%;
  border-radius: 20px;
}

#nav a {
    font-weight: bold;
    color: #3385ff;
}

#copyButton {
  margin-left: 2%;
  background-color: #303030;
  color: #3385ff;
}

#copyButton:active {
  background-color: orange;
  box-shadow: 0 5px gray;
  transform: translateY(2px);
}

</style>
