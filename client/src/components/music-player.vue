<template>
  <div class="musicPlayer">
    <header>
      <h2>
        Music Player
       </h2>
    </header>
    <main>
      <section>
        <h3> {{ currentSong.title }} - <span> {{ currentSong.artist }} </span> </h3>
        <div>
          <button class="prev" @click="playPrev()">Previous</button>
          <button class="play" v-if="!isPlaying" @click="play">Play</button>
          <button class="play" v-if="isPlaying" @click="pause">Pause</button>
          <button class="next" @click="playNext()">Next</button>
        </div>
      </section>
      <section>
        Playlist
      </section>
      <button v-for="song in songs" :key="song.src" @click="play(song)"
              :class="(song.src === currentSong.src) ? 'song playing' : 'song'">
              {{ song.title }} - {{ song.artist }}
      </button>
    </main>
  </div>
</template>
<script>
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

export default {
  name: 'MusicPlayer',
  props: {
    titleHeader: String,
  },
  data() {
    return {
      currentSong: {},
      index: 0,
      isPlaying: false,
      player: new Audio(), // HTML5 audio element
      songs: [
        {
          title: 'Holder',
          artist: 'Artist',
          src: require('../assets/Good_Feeling–Roa.mp3'),
          id: 0,
        },
        {
          title: 'Holder 2',
          artist: 'Artist 2',
          src: require('../assets/Grow-KV.mp3'),
          id: 1,
        },
        {
          title: 'Holder 3',
          artist: 'Artist 3',
          src: require('../assets/Wanderlust-extenz.mp3'),
          id: 2,
        },
      ],
    };
  },
  created() { // On creation
    this.currentSong = this.songs[this.index];
    this.player.src = this.currentSong.src;
    // this.player.play(); // Plays song
  },

  methods: {
    play(song) {
      if (typeof song.src !== 'undefined') {
        this.currentSong = song;

        this.player.src = song.src;
      }

      this.player.play();
      this.player.volume = 0.2;
      this.isPlaying = true;
    },

    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    playPrev() {
      const currentPosition = this.songs.findIndex((c) => c.src === this.currentSong.src);

      if (this.songs[currentPosition - 1]) {
        this.play(this.songs[currentPosition - 1]);
      } else {
        this.play(this.songs[this.songs.length - 1]);
      }
    },
    playNext() {
      const currentPosition = this.songs.findIndex((c) => c.src === this.currentSong.src);

      if (this.songs[currentPosition + 1]) {
        this.play(this.songs[currentPosition + 1]);
      } else {
        this.play(this.songs[0]);
      }
    },
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
