<template>
  <div id="app">
    <header>
      <h1>My Music</h1>
    </header>
    <main>
      <section class="player">
        <h2 class="song-title">{{ current.title }}</h2>
        <div class="controls">
          <button class="prev" v-on:click="previousSong">Prev</button>
          <button class="play" v-if="!isPlaying" @click="play">Play</button>
          <button class="pause" v-else v-on:click="pause">Pause</button>
          <button class="next" v-on:click="nextSong">Next</button>
        </div>
      </section>
      <section class="playlist">
        <h3>The Playlist</h3>
        <button
          v-for="song in songs"
          :key="song.src"
          v-on:click="play(song)"
          :class="song.src == current.src ? 'song playing' : 'song'"
        >
          {{ song.title }}
        </button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      current: {},
      isPlaying: false,
      index: 1,
      songs: [
        {
          title: "Diet Mountain Dew",
          artist: "Lana Del Rey",
          src: require("./assets/diet-mountain-dew.mp3"),
        },
        {
          title: "Titanium",
          artist: "David Guetta",
          src: require("./assets/titanium.mp3"),
        },
        {
          title: "Four Seasons",
          artist: "Vivaldi",
          src: require("./assets/four-season.mp3"),
        },
      ],
      player: new Audio(),
    };
  },

  methods: {
    play(song) {
      if (typeof song.src !== "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    nextSong() {
      this.index = this.index + 1;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    previousSong() {
      this.index = this.index - 1;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },

  created() {
    this.current = this.songs[0];
    this.player.src = this.current.src;
    // this.player.play();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #212121;
  color: #fff;
}
main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
}
.song-title {
  color: #53565a;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}
.controls {
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
.play,
.pause {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0px 15px;
  border-radius: 8px;
  color: #fff;
  background-color: #cc2e5d;
}
.next,
.prev {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 6px;
  color: #fff;
  background-color: #ff5858;
}
.playlist {
  padding: 0px 40px;
}
.playlist h3 {
  color: #212121;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
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
  color: #ff5858;
}
.playlist .song.playing {
  color: #fff;
  background-image: linear-gradient(to right, #cc2e5d, #ff5858);
}
</style>
