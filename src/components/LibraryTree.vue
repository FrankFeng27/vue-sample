
<script setup lang="ts">
import { ref } from "vue";
import styled from "vue3-styled-components";
import { TreeItemData } from "../data/datatypes";
import TreeItem from "./tree-item.vue";

const StyledContainer = styled.div`
  flex-grow: 0
`;

const demoData: Array<TreeItemData> = [{
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'world' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'world' }]
        },
        { name: 'hello' },
        { name: 'world' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'world' }]
        }
      ]
    }
  ]
}, {
  name: 'My Tree 1',
  children: [
    { name: 'hello 1' },
    { name: 'world 1' },
    {
      name: 'child folder 1',
      children: [
        {
          name: 'child folder 1',
          children: [{ name: 'hello 1' }, { name: 'world 1' }]
        },
        { name: 'hello 1' },
        { name: 'world 1' },
        {
          name: 'child folder 1',
          children: [{ name: 'hello 1' }, { name: 'world 1' }]
        }
      ]
    }
  ]
}];

const treeData = ref<TreeItemData>(demoData[0])
let index = 0;

const cur = ref<TreeItemData | undefined>(undefined);

function onSelected (node: TreeItemData) {
  cur.value = node;
  treeData.value = {
    ...demoData[(++index)%2]
  }
}
</script>

<template>
<StyledContainer>
  <div>{{ cur ? cur : "undefined" }}</div>
  <TreeItem 
    :model="treeData"
    class="item" 
    :cur="cur"
    :onSelected="onSelected"
  />
  
</StyledContainer>
</template>


