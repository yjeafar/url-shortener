<template>
  <div id="nav">
    <router-link class="navText" to="/">Home</router-link> |
    <router-link class="navText" to="/url-shortener">Url Shortener</router-link> |
    <router-link class="navText" to="/music-player">Music Player</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 25px;
  height: 100vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: dodgerblue
}

.navText {
  font-size: 18px;
}
</style>
