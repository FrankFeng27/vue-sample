<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import { LibraryContent } from '../data/datatypes';

const props = defineProps<{ 
  content?: LibraryContent,
  onContentChange: (content: LibraryContent) => void, 
}>();

function onContentChange(event: any, editor: any) {
  console.log('content changed');
  const content = editor.getContent();
  console.log(content);
  props.onContentChange({title: props.content?.title??"", content});
}

const initContent = ref(props.content?.content);
const showEditor = ref(false);

</script>

<template>
  <h1>{{ props.content ? props.content.title : "" }}</h1>
  <h2>{{ props.content ? props.content.content : "" }}</h2>

  <div :key="props.content?.title??''" class="card">
    <Editor
      v-if="props.content !== undefined"
      api-key="ofajqdu0x6g64n4wbwj2nbcfeu44iymvrd3kg59bj7mfocts"
      :init="{
        plugins: 'lists link image table code help wordcount',
        toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | table | media | link | fullscreen',
        menubar: false,
        setup: (editor: any) => {
          editor.on('Change', (e:any) => (onContentChange(e, editor)));
        }
      }"
      :initial-value="props.content?.content??''"
    />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
