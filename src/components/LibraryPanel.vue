<template>
<StyledContainer>
  <StyledNavContainer>
    <LibraryTree :treeData="demoData" :onCurrentNodeChange="onCurrentNodeChange"  />
  </StyledNavContainer>
  <StyledContentContainer>
    <HelloWorld :onContentChange="onEditorContentChange" :content="curEditorContent"/>
  </StyledContentContainer>
</StyledContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import styled from "vue3-styled-components";

import LibraryTree from "./LibraryTree.vue";
import HelloWorld from "./HelloWorld.vue";
import { LibraryContent, TreeItemData } from '../data/datatypes';

const StyledContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;
const StyledNavContainer = styled.div`
  flex-grow: 0;
  background-color: ${props => props.theme.theme.colors.libraryBack};
  min-width: 220px;
  min-height: 400px;
  padding: 10px;
`;
const StyledContentContainer = styled.div`
  flex-grow: 1;
  padding 10px 20px;
`;

const demoData = ref<TreeItemData>({
  name: 'My Tree',
  content: "",
  children: [
    { name: 'hello', content: "" },
    {
      name: 'child folder',
      content: ""
    }
  ]
});

const currentNode = ref<TreeItemData | undefined>();
function onCurrentNodeChange(node: TreeItemData) {
  currentNode.value = node;
    curEditorContent.value = {
      content: currentNode.value?.content??"",
      title: currentNode.value.name
    };

}

const curEditorContent = ref<LibraryContent | undefined>();

function onEditorContentChange(content: LibraryContent) {
  if (!currentNode.value) {
    return;
  }
  currentNode.value.content = content.content;
}


</script>

<style scoped>
</style>
