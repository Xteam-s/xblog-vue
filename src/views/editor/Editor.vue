<template>
    <div>
        <div class="editor-wrapper" v-show="blogger.isLogin"> <!--用v-if不成功-->
            <div class="title-wrapper">
                标题
                <input type="text" style="width: 40vw" placeholder="标题" v-model="title">
            </div>
            <div class="choice-wrapper">
                文章分类
                <select id="choice" class="choice"> 
                    <option v-for="(category,index) in categoryList" :key = "index">{{category.name}}</option>
                </select>
            </div>
            <div class="tag-wrapper">
                标签
                <input type="text" style="width: 10vw" placeholder="标签1" v-model="tags[0]">
                <input type="text" style="width: 10vw" placeholder="标签2" v-model="tags[1]">
                <input type="text" style="width: 10vw" placeholder="标签3" v-model="tags[2]">
            </div>
            <div class="summary-wrapper">
                <p>简介</p>
                <textarea class="summary" rows="3" cols="100" v-model="summary"></textarea>
            </div>
            <v-editor :content="content"  ref="editor"></v-editor>
            <div class="submit-wrapper">
                <button @click="post">提交</button>
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
                content: "",
                categoryList: [{
                    id: 8,
                    name: "已命名"
                }],
                title: "",
                tags: [],
                summary: ""
            }
        },
        watch: {
        },
        methods: {
            getMarkdown() {
                return this.$refs.editor.getMarkdown();
            },

            post() {
                var choice = document.querySelector("#choice");
                var index = choice.selectedIndex;
                var category = choice.options[index].text;
                var categoryId = this.categoryList.find(item => item.name == category).id;
                
                var tags = [];
                this.tags.forEach(e => {
                    if(e != ""){
                        tags.push(e);
                    }
                })
                
                var content = this.getMarkdown();

                this.axios.post(
                    'post',
                    {
                        categoryId: categoryId,
                        content: content,
                        summary: this.summary,
                        tags: this.tags,
                        title: this.title
                    }
                ).then(success => {
                    console.log('fscg');
                    console.log(success.data);
                },failure => {
                    console.log('fssb');
                    console.log(failure.data);
                })
            }
        },
        computed: {
            blogger: function() {
                return this.$store.state.blogger;
            },
        },
        mounted() {

        },
        activated() {
            //this.axios.get()
        }
    }
</script>

<style scoped>
    input {
        margin: 0 0 0 1vw;
    }

    .editor-wrapper {
        height: 70vh;
        padding: 70px;
        font-size: 2.5vh;
    }

    .editor-wrapper .title-wrapper {
        margin: 0 0 2vh 5vw;
    }

    .editor-wrapper .choice-wrapper {
        display: inline-block;
        margin: 0 0 2vh 5vw;
    }

    .editor-wrapper .choice-wrapper .choice {
        
    }

    .editor-wrapper .tag-wrapper {
        display: inline-block;
        margin: 0 0 0 5vw;
    }

    .editor-wrapper .summary-wrapper {
        margin: 0 0 0 5vw;
    }

    .editor-wrapper .summary-wrapper .summary {
        margin: 0.7vh 0 2vh 0;
    }

    .editor-wrapper .submit-wrapper {
        float: right;
        padding: 0 5.4vw 2vh 0;
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