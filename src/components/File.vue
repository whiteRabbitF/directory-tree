<template>
  <div class="file">
    <img src="../assets/file.svg">
    <span>{{ file.name }}</span>
    <button class="delete" @click="deleteFile">
      <img src="../assets/bag.svg">
    </button>
    <button class="edit" @click="editFile">
      <img src="../assets/brush.svg">
    </button>
  </div>
</template>

<script>
import { useStore } from '../store/index.js';

export default {
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteFile() {
      const store = useStore();
      store.deleteFile(this.file);
    },
    editFile() {
      const newName = prompt('Введите название файла:', this.file.name);
      if (newName !== null) {
        const store = useStore();
        store.editFileName(this.file, newName);
      }
    },
  },
};
</script>

<style scoped>
.file {
  margin-top: 25px;
  padding-bottom: 10px;
  box-shadow: 0 3px 2px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
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
