<template>
  <div class="folder">
    <div class="folder-header" @click="toggleFolder">
      <img src="../assets/folder-2.svg">
      <span>{{ folder.name }}</span>
        <button class="delete"
            @click.stop="deleteFolder">
            <img src="../assets/bag.svg">
        </button>
        <button class="edit"
            @click.stop="editFolder">
            <img src="../assets/brush.svg">
        </button>
    </div>
    <div v-if="isOpen" class="folder-content">
      <component :is="directoryTreeComponent" :items="folder.children" />
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue';
import { useStore } from '../store/index.js';
import DirectoryTree from './DirectoryTree.vue';

export default {
  props: {
    folder: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      directoryTreeComponent: markRaw(DirectoryTree),
    };
  },
  methods: {
    toggleFolder() {
      this.isOpen = !this.isOpen;
    },
    deleteFolder() {
      const store = useStore();
      store.deleteFolder(this.folder);
    },
    editFolder() {
      const newName = prompt('Введите название папки:', this.folder.name);
      if (newName !== null) {
        const store = useStore();
        store.editFolderName(this.folder, newName);
      }
    },
  },
};
</script>

<style scoped>
.folder {
  padding: 20px;
}

.folder-header {
  display: flex;
  align-items: center;
  box-shadow: 0 4px 2px -3px rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
  cursor: pointer;
}

img {
  margin-right: 10px;
}

span {
  flex-grow: 1;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
}

button img {
  width: 20px;
}
</style>
