import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component('MyComponent', {
    template: '<div>전역 컴포넌트가 등록되었습니다.</div>'
})

app.mount('#app')
