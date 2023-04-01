<template>
<StyledContainer>
  <StyledNavContainer>
    <LibraryTree />
  </StyledNavContainer>
  <StyledContentContainer>
    <HelloWorld msg = "Empty content" />
  </StyledContentContainer>
</StyledContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import styled from "vue3-styled-components";

import LibraryTree from "./LibraryTree.vue";
import HelloWorld from "./HelloWorld.vue";

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

</script>

<style scoped>
</style>
