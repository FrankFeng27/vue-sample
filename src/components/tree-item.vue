<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue'
import { TreeItemData } from '../data/datatypes';

const props = defineProps<{
  model: TreeItemData;
  level: number;
  cur: string;
  onSelect: (n: string) => void;
}>();

const isOpen = ref(false);
const itemLevel = props.level??0;
const indentMax = 9;
const indentIndex = itemLevel > indentMax ? indentMax : itemLevel;
const indentIndex1 = indentIndex == indentMax ? indentIndex : indentIndex + 1;
const indentClass:string = `indent${indentIndex}`;
const indentClass1 = `indent${indentIndex1}`;
const isFolder = computed(() => {
  return props.model!.children && props.model!.children.length
});

const isCurrent = computed(() => {
  return props.cur === props.model.name;
});




function toggle() {
  isOpen.value = !isOpen.value
}

function changeType() {
  if (!isFolder.value) {
    props.model!.children = []
    addChild()
    isOpen.value = true
  }
}

function addChild() {
  props.model!.children ? 
  props.model.children.push({ name: 'new stuff' }) : 
  (props.model.children = [{name: 'new stuff'}]);
}
function onItemSelect() {
  props.onSelect(props.model.name);
}

</script>

<template>
  <li>
    <div
      :class="indentClass"  
      @click="onItemSelect()"
      @dblclick="changeType">
      <div :class="{'bold': isCurrent}">
        {{ props.model!.name }}
        <span v-if="isFolder" @click="toggle">[{{ isOpen ? '-' : '+' }}]</span>
      </div>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <!--
        A component can recursively render itself using its
        "name" option (inferred from filename if using SFC)
      -->
      <TreeItem
        class="item"
        v-for="m in props.model!.children"
        :level="itemLevel+1"
        :model="m"
        :onSelect="props.onSelect"
        :cur="props.cur"
      >
      </TreeItem>
      <li @click="addChild"><div :class="indentClass1">+</div></li>
    </ul>
  </li>
</template>
<style scoped>
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