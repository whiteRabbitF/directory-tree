<template>
  <div class="app">
    <DirectoryTree :items="directories" />
  </div>
</template>

<script>
import DirectoryTree from './components/DirectoryTree.vue';
import { useStore } from './store';

export default {
  components: {
    DirectoryTree,
  },
  computed: {
    directories() {
      const store = useStore();
      return store.directories;
    },
  },
};
</script>

<style>
  body {
    background: rgb(203,10,58);
    background: radial-gradient(circle, rgba(203,10,58,0.7399334733893557) 27%, rgba(63,94,251,1) 98%);
    font-family: "Roboto", sans-serif;
    color: white;
    font-size: 20pt;
    font-weight: 300;
  }
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    background-color: rgba(0, 0, 0, 0.1);
    max-width: 550px;
    border-radius: 20px;
    padding: 50px;
  }
</style>







