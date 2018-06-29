<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md mb-3">
          <p class="display-4">{{ normilizedTimer }}</p>
          <p class="lead">ХОД {{ player }}-ГО ИГРОКА</p>
          <hr>
          <router-link tag="button" class="btn btn-primary" v-if="player === 1" to="2">ЗАВЕРШИТЬ ХОД</router-link>
          <router-link tag="button" class="btn btn-primary" v-else to="1">ЗАВЕРШИТЬ ХОД</router-link>
        </div>
        <div class="col-md-4">
          <Clock name="ПЕРВЫЙ ИГРОК" :time="player_1" />
          <Clock name="ВТОРОЙ ИГРОК" :time="player_2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Clock from './Clock'

  const max = 1000 * 60 * 2;

  export default {
    name: "Timer",
    props: {
      player: {
        type: Number,
        required: true,
        default: 1
      }
    },
    components: {
      Clock
    },
    data() {
      const currentTime = (new Date()).getTime();
      return {
        currentTime,
        timer: max,
        player_1: 0,
        player_2: 0
      }
    },
    watch: {
      player: function(val) {
        this.timer = max;
      }
    },
    computed: {
      normilizedTimer() {
        return convertTime(this.timer)
      }
    },
    mounted: function() {
      this.interval = setInterval(() => {
        const lastTime = this.currentTime;
        this.currentTime = (new Date()).getTime();

        if ( this.timer === 0 ) return false;

        const diff = this.currentTime - lastTime;
        this[ 'player_' + this.player ] += diff;
        this.timer = (this.timer - diff) > 0
                   ? this.timer - diff
                   : 0;
      }, 1);
    },
    beforeDestroy: function() {
      clearInterval(this.interval);
    }
  }

  function convertTime(unix) {
    const t = new Date(unix);

    const minutes = '0' + t.getMinutes();
    const seconds = '0' + t.getSeconds()
    const milliseconds = '00' + t.getMilliseconds();

    return minutes.substr(-2) + ':' + seconds.substr(-2) + '.' + milliseconds.substr(-3);
  }
</script>