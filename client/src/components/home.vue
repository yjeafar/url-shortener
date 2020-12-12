<template>
  <div class="home">
    <div>
      <h1> WELCOME </h1>
      <br/>
      <h3> to my projects website! </h3>
    </div>
    <div id="homeTextbox">
      Welcome to my website! This is where I host my projects that I've done with VueJs.
      The reason for this is that I created a small application and thought it'd be fun
      to build on it and add many different tools that can be used. If you're interested,
      feel free to check out my <a href="https://www.yasserjeafar.com">Online Resume. </a>
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
  width: 100%;
}

#homeTextbox {
  border: 1px white solid;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  padding: 1%;
}

div {
  margin: 40px 0 0;
}
</style>
