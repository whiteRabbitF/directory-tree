import { defineStore } from 'pinia';

export const useStore = defineStore('directory', {
    state: () => ({
        directories: [
            {
                id: 1,
                name: 'Dir 1',
                type: 'folder',
                children: [
                    {
                        id: 2,
                        name: 'Dir 1-1',
                        type: 'folder',
                        children: [
                            {
                                id: 3,
                                name: 'File 1-1-1',
                                type: 'file',
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'Dir 2',
                type: 'folder',
                children: [
                    {
                        id: 5,
                        name: 'Dir 2-2',
                        type: 'folder',
                        children: [
                            {
                                id: 6,
                                name: 'File 2-2-2',
                                type: 'file',
                            },
                        ],
                    },
                ],
            },
        ], // при обновлении страницы данные не сохранятся и будут браться отсюда с такими же названиями
    }),
    actions: {
        findParent(children, id) {
            for (let i = 0; i < children.length; i++) {
                if (children[i].id === id) {
                    return { parent: children, index: i };
                }
                if (children[i].children) {
                    const found = this.findParent(children[i].children, id);
                    if (found) return found;
                }
            }
            return null;
        }, // используем рекурсию чтобы мы могли удалять и редактировать сущности на любом уровне вложенности, для этого определяем родителя
        deleteFolder(folder) {
            const found = this.findParent(this.directories, folder.id);
            if (found) {
                found.parent.splice(found.index, 1);
            }
        }, // удаление папки
        deleteFile(file) {
            const found = this.findParent(this.directories, file.id);
            if (found) {
                found.parent.splice(found.index, 1);
            }
        }, // удаление файла
        editFolderName(folder, newName) {
            const found = this.findParent(this.directories, folder.id);
            if (found) {
                found.parent[found.index].name = newName;
            }
        }, // редактирование названия папки с промт
        editFileName(file, newName) {
            const found = this.findParent(this.directories, file.id);
            if (found) {
                found.parent[found.index].name = newName;
            }
        }, // редактирование названия файла с промт
    },
});
