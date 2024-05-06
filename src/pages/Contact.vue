<script setup>
import { ref } from 'vue';
import Alert from '../components/Alert.vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('')
const message = ref('');

const alert = ref({});

const handleReset = () => {
    firstName.value = '';
    lastName.value = '';
    email.value = ''
    message.value = '';
}

const handleSubmit = async e => {
    e.preventDefault();
    
    if ([firstName.value, lastName.value, email.value, message.value].includes('')) {
        alert.value = { msg: 'All fields are required', error: true }
        setTimeout(() => alert.value = {}, 3000);
        return;
    }

    const formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value
    }

    try {
        const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        alert.value = { msg: 'Message sent!' };
        setTimeout(() => alert.value = {}, 3000)
    } catch (error) {
        console.log(error);
        return;
    }

    handleReset();

};

</script>

<template>
    <p class="text-3xl pb-5 pt-10 font-semibold text-center">Contact Us</p>
    <div class="flex justify-center w-full pb-10 pt-5">
        <div class="flex flex-col lg:flex-row justify-center gap-8 sm:gap-16 p-10 rounded-md bg-white shadow-lg min-w-[60%]">
            <div class="flex flex-col min-w-fit gap-5">
                <p class="text-xl"><font-awesome-icon :icon="['fas', 'phone']" /> +58 (414) 425-6603</p>
                <p class="text-xl"><font-awesome-icon :icon="['fas', 'envelope']" /> contact@mlmetaleng.com</p>
            </div>
            <div class="min-w-fit w-full">
                <form class="flex flex-col gap-5 w-full" @submit="handleSubmit" >
                    <Alert v-if="alert.msg" :alert="alert" />
                    <div class="flex gap-3 flex-col">
                        <label for="firstName" class="my-auto text-lg min-w-fit">First Name:</label>
                        <input name="firstName"class="rounded-md text-sm p-3 focus:outline-none bg-gray-200 w-full" type="text" v-model="firstName">
                    </div>
                    <div class="flex gap-3 flex-col">
                        <label for="lastName" class="my-auto text-lg min-w-fit">Last Name:</label>
                        <input name="lastName"class="rounded-md text-sm p-3 focus:outline-none bg-gray-200 w-full" type="text" v-model="lastName">
                    </div>
                    <div class="flex gap-3 flex-col">
                        <label for="email" class="my-auto text-lg min-w-fit">Email:</label>
                        <input name="email"class="rounded-md text-sm p-3 focus:outline-none bg-gray-200 w-full" type="email" v-model="email">
                    </div>
                    <div class="flex gap-3 flex-col">
                        <label for="message" class="text-lg">Message:</label>
                        <textarea name="message"class="rounded-md text-sm p-3 focus:outline-none bg-gray-200" rows="3" v-model="message" />
                    </div>
                    <input class="p-3 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md" type="submit" value="Submit">
                </form>
            </div>
        </div>
    </div>
</template>