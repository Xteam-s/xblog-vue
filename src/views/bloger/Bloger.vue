<template>
    <div class="main">
        <tab-bar :mode="mode" :username="bloger.name"></tab-bar>
        <div class="top-wrap">
            <div class="top-text">Neptu</div>
            <div id="downBtn" class="downBtn" @click="downScroll"></div>
            <div class="custom-background-img"></div>
        </div>
        <div class="container">
            <div id="index-links" class="index-links">
                <div class="xtitle">
                    近期博客
                </div>
                <div class="articles">
                    <div v-for="(article,index) in articleList" :key = "index" class="article">
                        <div class="article-card-front">
                            <router-link to="/x/article" class="article-img" :style="{ backgroundImage : 'url(' + article.imgurl + ')' }"></router-link>
                            <div>
                                <span class="article-title">{{article.title}}</span>
                                <p class="article-abstract">{{article.abstract}}</p>
                                <div class="icon-warp">
                                    <img class="icon" src="../../assets/img/main_icon/bloger.svg"/>
                                    <p id="icon-text">{{article.author}}</p>
                                    <img class="icon" src="../../assets/img/main_icon/tag.svg"/>
                                    <p id="icon-text">{{article.tag}}</p>
                                    <img class="icon" src="../../assets/img/main_icon/catagory.svg"/>
                                    <p id="icon-text">{{article.theme}}</p>
                                    <img class="icon" src="../../assets/img/main_icon/calendar.svg"/>                            <p id="icon-text">{{article.time}}</p>
                                    <img class="icon" src="../../assets/img/main_icon/visits.svg"/>
                                    <p id="icon-text">{{article.views}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TabBar from '@/components/topbar/TopBar';
export default {
    name: "bloger",
    components: {
        TabBar
    },
    data() {
        return {
            mode: "bloger",
            bloger: {
                name: 'Neptu',
                imgurl: require('../../assets/img/bloger/avatar.jpg'),
                url: '/x/bloger',
                intro: '简介1111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
                github: 'https://baidu.com',
                email: 'xxxxx@xx',
                qq: '4894564646',
                wechat: '12345',
                zhihu: '',
            },
            articleList: [{
                title: 'Dijkstra',
                abstract: '迪杰斯特拉算法(Dijkstra)是由荷兰计算机科学家狄克斯特拉于1959 年提出的，因此又叫狄克斯特拉算法。是从一个顶点到其余各顶点的最短路径算法，解决的是有权图中最短路径问题。迪杰斯特拉算法主要特点是从起始点开始，采用贪心算法的策略，每次遍历到始点距离最近且未访问过的顶点的邻接节点，直到扩展到终点为止。',
                imgurl: require('../../assets/img/blogs/Dijkstra.jpg'),
                theme: '计算机',
                author: 'Neptu',
                time: '2020-7-22',
                tag: '算法',
                views: '5',
                txturl: '',
                }
            ]
        }
    },
    methods: {
        downScroll: function () {
            window.scrollTo({
            top: 800,
            behavior: "smooth"
            });
        },
    }
}
</script>

<style scoped>
    @import '../../assets/css/Blog.css';
</style>