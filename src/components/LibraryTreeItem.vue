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
const indentMax = 9;
const indentIndex = itemLevel.value > indentMax ? indentMax : itemLevel.value;
const indentClass:string = `indent${indentIndex}`;

const downArrowSvg = "/down-arrow.svg";
const rightArrowSvg = "/right-arrow.svg";

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
      class="flex flex-row"
      @click="toggleExpand"
      @dblclick="addChild">
      <div v-if="isFolder" class="grow-0">
        <img src="/down-arrow.svg" >
      </div>
      <div class="grow flex flex-row">
        <p class="grow">{{ lib.name }}</p>
        <span class="grow-0" v-if="isFolder">[{{ isOpen ? " - " : "+" }}]</span>
      </div>
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

<style>
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
.indent0 {
  padding: 2px 10px 2px 0px;
}
.indent1 {
  padding: 2px 10px 2px 8px;
}
.indent2 {
  padding: 2px 10px 2px 16px;
}
.indent3 {
  padding: 2px 10px 2px 24px;
}
.indent4 {
  padding: 2px 10px 2px 32px;
}
.indent5 {
  padding: 2px 10px 2px 40px;
}
.indent6 {
  padding: 2px 10px 2px 48px;
}
.indent7 {
  padding: 2px 10px 2px 52px;
}
.indent8 {
  padding: 2px 10px 2px 56px;
}
.indent9 {
  padding: 2px 10px 2px 60px;
}
</style>