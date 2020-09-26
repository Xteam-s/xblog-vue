<template>
    <div>
        <tab-bar :mode="mode" :username="username"></tab-bar>
        <div class="editor-wrapper">
            <v-editor :content="content"></v-editor>
        </div>
    </div>
</template>

<script>
    import TabBar from '@/components/topbar/TopBar';
    import vEditor from '@/components/editormd/EditorMD';
    export default {
        name: 'editormd',
        components: {
            TabBar,
            vEditor
        },
        data() {
            return {
                mode: "kernel",
                username: "default",
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