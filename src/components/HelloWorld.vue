<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Editor from '@tinymce/tinymce-vue'

defineProps<{ msg: string }>()

const count = ref(0)
const content = ref("This is Quill Editor.");
function onContentChange(event: any, editor: any) {
  console.log('content changed');
  const content = editor.getContent();
  console.log(content);
}


</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <input value="msg" />
    <Editor
      api-key="no-api-key"
      :init="{
        plugins: 'lists link image table code help wordcount',
        toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | table | media | link | fullscreen',
        menubar: false,
        setup: (editor: any) => {
          editor.on('Change', (e:any) => (onContentChange(e, editor)));
        }
      }"
    />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
