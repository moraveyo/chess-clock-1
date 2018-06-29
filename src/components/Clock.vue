<template>
  <table class="table table-bordered table-dark">
    <thead>
    <tr>
      <th scope="col">{{ name }}</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{{ normilizedTime }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "Clock",
    props: {
      name: {
        type: String,
        required: true
      },
      time: {
        type: Number,
        required: true
      }
    },
    computed: {
      normilizedTime() {
        return convertTime(this.time);
      }
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

<style scoped>

</style>