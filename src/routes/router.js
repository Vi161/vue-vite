import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('../components/Main.vue');

Vue.use(VueRouter);

const routes = [
    {
        name: 'Main',
        path: '/',
        component: Main,
        meta: {
            type: 'main1',
        }
    },
    {
        name: 'Main1',
        path: '/main1',
        component: Main,
        meta: {
            type: 'main2',
        }
    },
];

export const router = new VueRouter({
  routes,
  mode: 'history',
});

