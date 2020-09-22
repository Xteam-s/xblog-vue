<template>
    <div id="editormd">
        <textarea v-model="content"></textarea>
    </div>
</template>

<script>
    export default {
        name: 'Markdown',
        props: {
            content:{
                type: String,
                default: ''
            }
        },
        data() {
            return {
                instance: null,
            };
        },
        mounted() {
            this.initEditor();
        },
        methods: {
            initEditor() {
                this.instance = window.editormd("editormd", {
                    height: 500,
                    emoji: true,
                    path: '../../../node_modules/editor.md/lib/'
                });
            }
        },
    };
</script>