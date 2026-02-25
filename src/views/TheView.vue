<template>
    <div>
        <h2>입력</h2>
        <label>Title</label>
        <input v-model="title" placeholder="제목 입력"/>
        
        <label>Contents</label>
        <textarea v-model="contents" placeholder="내용 입력"></textarea>

        <div style="margin-top: 12px;">
            <button @click="saveDiary" :disabled="loading">저장</button>
            <button @click="loadDiary" :disabled="loading || !diaryId">조회</button>
        </div>

        <p v-if="error" style="color:red;">{{ error }}</p>

        <hr/>
        <h2>미리보기(현재 state)</h2>
        <!-- 부모 state를 자식에게 props로 전달 -->
        <AppCard :title="title" :contents="contents" @request-save="handleRequestSave"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AppCard from '@/components/AppCard.vue';

const title = ref('')
const contents = ref('')

const diaryId = ref(null) // 저장 성공 시 서버가 준 id 보관
const loading = ref(false)
const error = ref('')

// (선택) 페이지 진입 시 특정 id를 자동 조회하고 싶으면 여기서 호출
// onMounted(() => {
//   diaryId.value = 1
//   loadDiary()
// })

async function saveDiary() {
    loading.value = true
    error.value = ''

    try {
        // 1) POST 저장
        const res = await fetch('api/diaries',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title.value,
                contents: contents.value,
            }),
        })
        
        if (!res.ok) throw new Error('저장 API 실패')

        const saved = await res.json()

        // 2) 서버가 준 id 저장
        diaryId.value = saved.id

        // 3) 서버 데이터를 기준으로 title, contents 다시 세팅
        title.value = saved.title
        contents.value = saved.contents

        // 4) 저장 직후 재조회로 "DB에 들어간 값"을 다시 받아옴
        //await LoadDiary()
    } catch (e){
        error.value = e?.message ?? '알 수 없는 오류'
    } finally {
        loading.value = false
    }
}

async function loadDiary(){
    if(!diaryId.value) return

    loading.value = true
    error.value = ''

    try {
        const res = await fetch(`/api/diaries/${diaryId.value}`)
        if(!res.ok) throw new Error('조회 API 실패')

        const data = await res.json()

        // 1) state 업데이트
        title.value = data.title
        contents.value = data.contents
        // 2) state가 바뀌니 AppCard가 자동으로 다시 렌더링됨
    } catch (e) {
        error.value = e?.message ?? '알 수 없는 오류'
    } finally {
        loading.value = false
    }
}

function handleRequestSave(payLoad) {
    //payLoad = { title, contents }
    title.value = payLoad.title
    contents.value = payLoad.contents
}

</script>

<!-- 부모 컴포넌트 TheView에서 자식 컴포넌트인 AppCard에 title, content 전달 -->