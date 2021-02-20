<template>
  <div class="musicPlayer">
    <header>
      <h1>
        Music Player
       </h1>
    </header>
    <main>
      <section>
        <h3 class="song-title"> {{ currentSong.title }} - <span> {{ currentSong.artist }} </span> </h3>
        <div class= "buttons">
          <button class="prev" @click="playPrev()">Previous</button>
          <button class="play" v-if="!isPlaying" @click="play">Play</button>
          <button class="pause" v-if="isPlaying" @click="pause">Pause</button>
          <button class="next" @click="playNext()">Next</button>
        </div>
      </section>
      <section  class="playlist">
        <h3>
        Playlist
        </h3>
        <button v-for="song in songs" :key="song.src" @click="play(song)"
                :class="(song.src === currentSong.src) ? 'song playing' : 'song'">
                {{ song.title }} - {{ song.artist }}
        </button>
      </section>
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
      isPlaying: false,
      player: new Audio(), // HTML5 audio element
      index: 0,
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
      this.player.volume = 0.3;
      this.isPlaying = true;
    },

    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    playPrev() {
      this.index -= 1;
      if (this.songs[this.index]) {
        this.play(this.songs[this.index]);
      } else {
        this.play(this.songs[this.songs.length - 1]);
        this.index = this.songs.length - 1;
      }
    },
    playNext() {
      this.index += 1;
      if (this.songs[this.index]) {
        this.play(this.songs[this.index]);
      } else {
        this.index = 0;
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

main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
}
.song-title {
  color: #535961;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}
.song-title span {
  font-weight: 400;
  font-style: italic;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
}
button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
.play, .pause {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0px 15px;
  width: 150px;
  border-radius: 8px;
  color: #FFF;
  background-color: #CC2E5D;
}
.next, .prev {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 6px;
  width: 150px;
  color: #FFF;
  background-color: #FF5858;
}
.playlist {
  padding: 0px 30px;
}
.playlist h3 {
  color: dodgerblue;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
  padding-top: 5%;
}
.playlist .song {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}
.playlist .song:hover {
  color: #FF5858;
}
.playlist .song.playing {
  color: #FFF;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
}

div {
  margin: 40px 0 0;
}
</style>
