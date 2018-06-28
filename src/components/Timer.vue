<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container text-center">
      <h1 class="display-5">ХОД {{ player }}-ГО ИГРОКА</h1>
      <p class="display-1">02:00.000</p>
      <router-link tag="button" class="btn btn-primary" v-if="player === 1" to="2">ЗАВЕРШИТЬ ХОД</router-link>
      <router-link tag="button" class="btn btn-primary" v-else to="1">ЗАВЕРШИТЬ ХОД</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Timer",
    props: {
      player: {
        type: Number,
        required: true,
        default: 1
      }
    },
    computed: {
      timer() {
        return
      }
    }
  }
</script>