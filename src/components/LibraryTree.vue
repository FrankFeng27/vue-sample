
<script setup lang="ts">
import { ref } from "vue";
import styled from "vue3-styled-components";
import { LibraryContent, LibraryItem, TreeItemData } from "../data/datatypes";
import LibraryTreeItem from "./LibraryTreeItem.vue";

const StyledContainer = styled.div`
  flex-grow: 0
`;

const props = defineProps<{
  treeData: TreeItemData,
  currNodeContent?: string,
  onCurrentNodeChange: (content: TreeItemData) => void
}>();
const emit = defineEmits(["update:currentNodeContent"]);

const treeData = ref<TreeItemData>(props.treeData)
let index = 0;

const cur = ref<LibraryItem | undefined>(undefined);
const level = ref(0);
function onSelect (node: LibraryItem) {
  cur.value = node;
  props.onCurrentNodeChange(node)
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


