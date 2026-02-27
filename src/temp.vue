<script setup>
import { computed, ref, watch } from 'vue';

const message = ref('')

const count = ref(0);
const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(()=> `${firstName.value} ${lastName.value}`)

watch(fullName, (newValue, oldValue) =>{
    console.log(`이름이 변경됨: ${oldValue} -> ${newValue}`)
})

watch(count, (newValue) => {
    if(newValue >= 5){
        message.value = '5 이상!'
    }
})

const increment =()=>{
    count.value++;
}

</script>

<template>
    <div>
        <p>{{ fullName }}</p>
    </div>
    <div>
        <button @click="increment">{{ count }}</button>
    </div>
    <div>
        <input v-model="firstName" placeholder="FirstName" />
        <input v-model="lastName" placeholder="LastName" />
        <p>Full Name: {{ fullName }}</p>
    </div>
    <div>
        <button @click="count++">count: {{ count }}</button>
        <p>{{ message }}</p>
    </div>
</template>