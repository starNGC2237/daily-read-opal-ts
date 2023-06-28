import {createRouter, createWebHistory} from 'vue-router';
import AppHome from "../views/AppHome.vue";
import AppDownload from "../views/AppDownloadPage/index.vue";
import About from "../views/AppAbout.vue";
import AppDailySentence from "../views/AppDailySentence.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta:{
                parts:['header','footer'] as string[]
            }
        },
        {
            path: '/download',
            name: 'download',
            component:  AppDownload,
            meta:{
                parts:['header'] as string[]
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta:{
                parts:['header'] as string[]
            }
        },
        {
            path:'/dailySentence',
            name:'dailySentence',
            component:AppDailySentence,
            meta:{
                parts:['header'] as string[]
            }
        }
    ]
});

export default router;
