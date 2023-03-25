<script setup lang="ts">
import { propsToAttrMap } from "@vue/shared";
import { ref, computed } from "vue";
import { LibraryItem } from "../data/datatypes";

const props = defineProps< {lib: LibraryItem, level?: number}>();

const itemLevel = ref(props.level??0);
const isOpen = ref(false);
const isFolder = computed(() => {
  return props.lib.children && props.lib.children.length > 0;
});

const indents: Array<string> = [
  "indent-0", 
  "indent-2",
  "indent-4",
  "indent-8",
  "indent-12",
  "indent-16",
];
const indentIndex = itemLevel.value > indents.length - 1 ? indents.length - 1 : itemLevel.value;
const indentClass:string = indents[indentIndex];

function toggleExpand() {
  isOpen.value = !isOpen.value;
}
function addChild() {
  const newItem: LibraryItem = {
    name: "new item"
  };
  !props.lib.children ? 
  (props.lib.children = [newItem]) : 
  props.lib.children.push(newItem);
}

</script>

<template>
  <div class="treeItem" >
    <div :class="indentClass"
    @click="toggleExpand"
    @dblclick="addChild">
    {{ lib.name }}
    <span v-if="isFolder">[{{ isOpen ? "-" : "+" }}]</span>
    </div>
    <ul 
    v-show="isOpen"
    v-if="isFolder">
      <LibraryTreeItem 
       class="item"
       v-for="child in lib.children"
       :lib="child"
       :level="itemLevel+1"></LibraryTreeItem>
    </ul>
  </div>
</template>

<style scoped>
.treeItem {
  text-align: left;
}
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>