<template>
  <div><Timer :player="normilizedTurn"/></div>
</template>

<script>
  import Timer from '../components/Timer'

  export default {
    name: 'Turn',
    components: {
      Timer
    },
    computed: {
      normilizedTurn() {
        const player = +this.$route.params.player;

        if( player === 1 || player === 2 )
          return player;
        else {
          this.$router.push({ name: 'turn', params: { player } });
          return 1;
        }
      }
    }
  }
</script>