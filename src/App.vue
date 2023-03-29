<script setup lang="ts">
import { ref } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styled, { ThemeProvider } from "vue3-styled-components";
import { theme } from "./theme/theme"
import HelloWorld from './components/HelloWorld.vue';
// import LibraryTreeItem from "./components/LibraryTreeItem.vue";
import TreeItem from "./components/tree-item.vue";
import { LibraryItem } from "./data/datatypes";

const StyledContainer = styled.div`
  background-color: ${props => props.theme.theme.colors.libraryBack};
  min-width: 220px;
  min-height: 400px;
  padding: 5px 10px;
`;

const treeData = ref({
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
})
const curLib = ref<LibraryItem | undefined>(undefined);
const defaultTab = ref(true);
function toggle () {
  defaultTab.value = !defaultTab.value;
}
function onSelect(lib: LibraryItem) {
  console.log(lib);
  curLib.value = lib;
}
</script>

<template>
  <ThemeProvider :theme={theme}>
  <div>{{curLib ? curLib.name : "null"}}</div>
  <div class="container px-4 flex">
    <StyledContainer class="grow-0">
      <TreeItem :model="treeData" class="item"/>
    </StyledContainer>
    <div class="grow">
      <HelloWorld v-if="defaultTab" msg="Vite + Vue" />
    </div>    
  </div>
</ThemeProvider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>
