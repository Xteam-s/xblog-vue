<template>
    <div>
        <div class="editor-wrapper">
            <v-editor :content="content"></v-editor>
        </div>
    </div>
</template>

<script>
    import vEditor from '@/components/editormd/EditorMD';
    export default {
        name: 'editormd',
        components: {
            vEditor
        },
        data() {
            return {
                content: ""
            }
        }
    }
</script>

<style scoped>
    .editor-wrapper {
        padding: 70px;
    }
</style>