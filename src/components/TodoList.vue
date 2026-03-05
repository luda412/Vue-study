<!-- 할 일 목록 표시 및 특정 할 일 삭제 -->
<script setup>
import emitter from '@/shared/eventBus';


const props = defineProps({
    propsdata: { type:Array, default: () => []}
})

const onRemove = (item, idx) => {
    emitter.emit('todo:remove', {item, idx})
}

const onEdit =(item, idx) => {
    emitter.emit('todo:edit:open', {item, idx})
}
</script>

<template>
    <section>
        <ul>
            <li v-for="(item, idx) in props.propsdata" :key="item" 
            class="shadow" @click="onEdit(item, idx)" style="cursor: pointer;">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                    {{ item }}

                <span class="removeBtn" type="button" @click.stop="onRemove(item, idx)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </ul>
    </section>
</template>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>