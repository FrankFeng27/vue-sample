<script setup lang="ts">
import { ref } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styled, { ThemeProvider } from "vue3-styled-components";
import { theme } from "./theme/theme"
import LibraryPanel from "./components/LibraryPanel.vue";

const StyledContainer = styled.div`
  background-color: ${props => props.theme.theme.colors.libraryBack};
  min-width: 220px;
  min-height: 400px;
  padding: 5px 10px;
`;

const defaultTab = ref(true);

</script>

<template>
  <ThemeProvider :theme={theme}>
  <div class="container px-4 flex">
    <LibraryPanel />
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
</style>
