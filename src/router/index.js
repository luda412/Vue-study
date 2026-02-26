import { createRouter, createWebHistory } from 'vue-router'

const { default: EventBusView } = require("@/views/EventBusView.vue");


const routes = [
    {
        path: '/',
        component: EventBusView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router