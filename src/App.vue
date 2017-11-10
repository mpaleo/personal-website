<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
html {
  background-color: #242424;
}

*, input {
  font-family: 'Roboto Mono', monospace;
}

*:focus {
  outline: none;
}
</style>
