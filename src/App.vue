<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from './components/HelloWorld.vue';
import LibraryTreeItem from "./components/LibraryTreeItem.vue";

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
  <div class="container px-4 flex">
    <div class="grow-0">
      <LibraryTreeItem :lib="lib" :level="0" />
    </div>
    <div class="grow">
      <HelloWorld v-if="defaultTab" msg="Vite + Vue" />
    </div>    
  </div>
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
