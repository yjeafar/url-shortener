<template>
  <div class="home">
    <HelloWorld url="www.google.com"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/urls.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
