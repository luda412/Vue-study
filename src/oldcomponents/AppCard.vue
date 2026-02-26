<template>
    <p>제목: {{ title }}</p>
    <p>내용: {{ contents }}</p>

    <button @click="notifyParent">부모에게 알리기</button>
</template>

<script setup>
const props = defineProps({
    title: String,
    contents: String,
})

const emit = defineEmits(['request-save'])
function notifyParent() {
    // 부모에게 '저장 요청' 이벤트 + 데이터(payLoad) 전달
    emit('request-save',{
        title: props.title,
        contents: props.contents,
    })
}


//script에서 쓰고 싶으면 props.title / props.contents로 접근한다.
//예, console.log(props.title)
</script>
<!-- 자식 컴포넌트인 AppCard에서 props를 선언하여 전달 받았다. -->