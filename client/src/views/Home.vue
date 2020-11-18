<template>
  <div class="home">
    <Home titleHeader="URL Shortener"/>
  </div>
</template>

<script>
// @ is an alias for /src
import Home from '../components/urls.vue';

export default {
  name: 'HomeTemplate',
  components: {
    Home,
  },
};
</script>
