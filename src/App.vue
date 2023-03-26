<script setup lang="ts">
import { ref } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styled, { ThemeProvider } from "vue3-styled-components";
import { theme } from "./theme/theme"
import HelloWorld from './components/HelloWorld.vue';
import LibraryTreeItem from "./components/LibraryTreeItem.vue";

const StyledContainer = styled.div`
  background-color: ${props => props.theme.theme.colors.libraryBack};
  min-width: 220px;
  min-height: 400px;
  padding: 5px 10px;
`;

const lib = ref({
  name: "root",
  children: [{
    name: "lib 1",
    children: [{
      name: "lib 1.1",
      children: [{
        name: "lib 1.1.1",
        children: [{
          name: "lib 1.1.1.1"
        }]
      }]
    }]
  }, {
    name: "lib 2"
  }]
});
const defaultTab = ref(true);
function toggle () {
  defaultTab.value = !defaultTab.value;
}
</script>

<template>
  <ThemeProvider :theme={theme}>
  <div class="container px-4 flex">
    <StyledContainer class="grow-0">
      <LibraryTreeItem class="item" :lib="lib" :level="0" />
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
</style>
