
<script setup lang="ts">
import { ref } from "vue";
import styled from "vue3-styled-components";
import { LibraryItem, TreeItemData } from "../data/datatypes";
/// import TreeItem from "./tree-item.vue";
import LibraryTreeItem from "./LibraryTreeItem.vue";

const StyledContainer = styled.div`
  flex-grow: 0
`;

const demoData: TreeItemData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    {
      name: 'child folder',
    }
  ]
};

const treeData = ref<TreeItemData>(demoData)
let index = 0;

const cur = ref<LibraryItem | undefined>(undefined);
const level = ref(0);
function onSelect (node: LibraryItem) {
  cur.value = node;
}
</script>

<template>
<StyledContainer>
  <div>{{ cur ? cur.name : "undefined" }}</div>
  <LibraryTreeItem 
    :lib="treeData"
    class="item" 
    :curlib="cur"
    :level="level"
    :onSelect="onSelect"
  />
  
</StyledContainer>
</template>


