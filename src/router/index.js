import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior (to, from, savedPosition) {
        // 뒤로가기 시 스크롤 복원
        if (savedPosition) return savedPosition;
        // 페이지 이동 시 상단으로
        return {top:0};
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
            meta: {title: 'Home'},
        },
        {
            path: '/event-bus',
            name: 'eventBus',
            component: () => import('@/views/EventBusView.vue'),
            meta: {title: 'Event Bus Practice'},
        },
        {
            path: '/the',
            name: 'theView',
            component: () => import('@/views/TheView.vue'),
            meta: {title: 'The View'},
        },
        // 섹션 레이아웃 + 자식 라우트
        {
            path: '/users',
            component: () => import('@/views/users/UsersLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'users.list',
                    component: () => import('@/views/users/UsersListView.vue'),
                    meta: {title: 'Users', requiresAuth: true},
                },
                {
                    path: ':id',
                    name: 'users.detail',
                    component: () => import('@/views/users/UserDetailView.vue'),
                    meta: {title: 'User Detail', requiresAuth: true}
                },
            ],
        },
        //404 핸들링
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: () => import('@/views/NotFoundView.vue'),
            meta: {title: 'Not Found'}
        },
    ],
})
router.beforeEach((to) =>{
    //문서 타이틀 세팅
    document.title = to.meta?.title ? `Demo | ${to.meta.title}` : 'Demo'

    //간단한 auth 시뮬레이션
    const isLoggedIn = localStorage.getItem('demo.loggedIn') === 'true'

    if(to.meta?.requiresAuth && !isLoggedIn) {
        //로그인 페이지를 따로 두지 않고 home으로 돌려보내기
        return {name: 'home', query: {redirect: to.fullPath}}
    }
    return true
})

export default router