<template>
  <div>
    <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true" customEventName="customstatechangedeventname" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @statechanged="playerStateChanged($event)" @ready="playerReadied">
    </video-player>
  </div>
</template>

<script>
  // require styles
  import 'video.js/dist/video-js.css'
  import {
    videoPlayer
  } from 'vue-video-player'

  export default {
    components: {
      videoPlayer
    },
    props: {},
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.5, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "/video/1.mp4"
          }],
          width: document.documentElement.clientWidth,
          poster: "/video/1.jpg",

        }
      };
    },
    watch: {},
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        console.log('player play!', player)
      },
      onPlayerPause(player) {
        console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
      onPlayerEnded(playerEnd) {
        console.log('the player is ended', playerEnd)
      }
    },
    created() {},
    mounted() {
      console.log('this is current player instance object', this.player)
    }
  };
</script>
<style lang="less">
  .video-js .vjs-big-play-button {
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    border: none;
    background: rgba(216, 216, 216, 0.6);
    opacity: 0.8;
    transform: translate(-50%, -50%);
  }
</style>