<template>
    <div>
        <div class="editor-wrapper" v-show="blogger.isLogin"> <!--用v-if不成功-->
            <v-editor :content="content"></v-editor>
            <div class="submit-wrapper">
                <button>提交</button>
            </div>
        </div>
        <div class="editor-wrapper" v-show="!blogger.isLogin">
            访问受限
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
            }
        },
        computed: {
            content: function() {
                return "";
            },
            blogger: function() {
                return this.$store.state.blogger;
            },
        },
    }
</script>

<style scoped>
    .editor-wrapper {
        height: 70vh;
        padding: 70px;
    }

    .editor-wrapper .submit-wrapper {
        float: right;
        padding: 0 5.4vw 0 0;
    }

    .editor-wrapper .submit-wrapper button {
        position: relative;
        width: 12vw;
        height: 6vh;
        background-color: rgb(52, 152, 219);
        text-align: center;
        color: white;
        font-weight: bold;
        border: 0;
        border-radius: 5px;
        overflow: hidden;
    }
    
    .editor-wrapper .submit-wrapper button:hover {
        background-color: rgba(52, 152, 219, 0.9);
    }
</style>