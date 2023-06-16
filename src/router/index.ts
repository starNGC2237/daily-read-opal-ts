import {createRouter, createWebHistory} from 'vue-router';
import AppHome from "../views/AppHome.vue";
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
                parts:['header','footer'] as string[]
            }
        }
    ]
});

export default router;
