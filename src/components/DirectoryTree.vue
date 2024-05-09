<template>
  <div class="directory-tree">
    <div v-for="item in items" :key="item.id">
      <div v-if="item.type === 'file'">
        <File :file="item" />
      </div>
      <div v-if="item.type === 'folder'">
        <Folder :folder="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Folder from './Folder.vue';
import File from './File.vue';

export default {
  components: {
    Folder,
    File,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
  .directory-tree {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    border-radius: 20px;
    padding: 3px;
    position: relative;

    div{
      cursor: pointer;
      width: 500px;
    }
  }
</style>




