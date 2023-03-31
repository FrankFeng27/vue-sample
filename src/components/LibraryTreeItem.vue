<script setup lang="ts">
import { ref, computed } from "vue";
import { LibraryItem } from "../data/datatypes";
import { isLibraryItemsEqualed } from "../data/data_utils";

import downArrowSvg from "../assets/down-arrow.svg";
import rightArrowSvg from "../assets/right-arrow.svg"
import articleSvg from "../assets/article.svg";

const props = defineProps< {
  lib: LibraryItem, 
  level: number,
  curlib?: LibraryItem
  onSelect: (lib: LibraryItem) => void;
}>();

const isCurrentLib = computed(() => (props.curlib ? isLibraryItemsEqualed(props.lib, props.curlib) : false));
const itemLevel = ref(props.level??0);
const isOpen = ref(false);
const isFolder = computed(() => {
  return props.lib.children && props.lib.children.length > 0;
});
const indentMax = 9;
const indentIndex = itemLevel.value > indentMax ? indentMax : itemLevel.value;
const indentClass:string = `indent${indentIndex}`;

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
function onLibSelect() {
  if (props.onSelect) {
    props.onSelect(props.lib);
  }
}

</script>

<template>
  <div class="treeItem" >
    <div :class="indentClass"
      class="flex flex-row"
      v-bind:class="{'bg-skin-treeItemFocus': isCurrentLib}"
      @click="onLibSelect"
      @dblclick="addChild">
      <div v-if="isFolder" class="grow-0" @click.stop="toggleExpand">
        <img :src="isOpen ? downArrowSvg : rightArrowSvg" alt="collapsed" width="22" height="22">
      </div>
      <div v-else class="grow-0">
        <img :src="articleSvg" width="22" height="22" >
      </div>
      <div class="grow flex flex-row px-3">
        <p class="grow">{{ props.lib.name }}</p>
        <div class="grow-0 flex flex-row" v-if="isFolder">
          <div class="grow-0 bg-skin-fill text-skin hover:bg-skin-toolbtnHover px-1" @click="addChild">+</div>
          <div class="grow-0 bg-skin-fill text-skin hover:bg-skin-toolbtnHover px-1">-</div>
        </div>
      </div>
    </div>
    <ul 
    v-show="isOpen"
    v-if="isFolder">
      <LibraryTreeItem 
       class="item"
       v-for="child in props.lib.children"
       :lib="child"
       :level="itemLevel+1"
       :curlib="props.curlib"
       :onSelect="props.onSelect"
      ></LibraryTreeItem>
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