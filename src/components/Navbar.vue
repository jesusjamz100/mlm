<script>
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default {
    setup() {
        const links = [
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '/about' },
            { name: 'Services', url: '/services' },
            { name: 'Customers', url: '/customers' },
            { name: 'Contact Us', url: '/contact' }
        ]

        const showNav = ref(false)
        library.add(faBars)
        return {
            links,
            showNav
        }
    },
    data() {
        return {scrollPosition: null}
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
        handleClick() {
            this.showNav = !this.showNav
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
}
</script>

<template>
    <div class="flex md:justify-between shadow-lg px-2 md:px-3 lg:px-10 max-h-32 md:sticky top-0 z-30 bg-white" :class="scrollPosition > 50 ? 'md:h-24 h-16 transition-all' : 'md:h-28 h-20 transition-all py-2'">
        <div class="flex justify-between w-full md:w-fit h-auto">
            <img src="../assets/LOGO.jpg" alt="Logo MLM" class="h-auto max-w-full" :class="scrollPosition > 50 ? 'my-4 transition-all' : 'transition-all'">
            <font-awesome-icon @click="handleClick" :icon="['fas', 'bars']" class="my-auto mr-3 text-3xl md:hidden justify-self-end min-w-fit hover:cursor-pointer" />
        </div>
        <ul class="list-none md:flex hidden gap-5 self-center font-semibold" :class="scrollPosition > 50 ? 'text-sm lg:text-lg transition-all' : 'text-base lg:text-xl transition-all'">
            <li v-for="(i, idx) in links" :key="idx" class="hover:text-gray-600 hover:underline underline-offset-4">
                <router-link :to="i.url"> {{ i.name }} </router-link>
            </li>
        </ul>
    </div>
    <ul
        v-show="showNav"
        class="list-none md:hidden flex flex-col gap-5 font-semibold text-right bg-white sticky pb-5" :class="scrollPosition > 50 ? 'text-sm lg:text-lg transition-all' : 'text-base lg:text-xl transition-all'">
        <li v-for="(i, idx) in links" :key="idx" class="hover:text-gray-600 hover:underline underline-offset-4 mr-8">
            <router-link :to="i.url" @click="handleClick"> {{ i.name }} </router-link>
        </li>
    </ul>
</template>