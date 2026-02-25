<template>
    <p>제목: {{ title }}</p>
    <p>내용: {{ contents }}</p>
</template>

<script setup>
const props = defineProps({
    title: String,
    contents: String,
})
//script에서 쓰고 싶으면 props.title / props.contents로 접근한다.
//예, console.log(props.title)
</script>
<!-- 자식 컴포넌트인 AppCard에서 props를 선언하여 전달 받았다. -->