<script>

export default {
    setup() {
        const links = [
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '/about' },
            { name: 'Services', url: '/services' },
            { name: 'Customers', url: '/customers' },
            { name: 'Contact Us', url: '/contact' }
        ]

        return {
            links
        }
    },
    data() {
        return {scrollPosition: null}
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
}
</script>

<template>
    <div class="flex justify-between shadow-lg px-16 max-h-32 sticky top-0 z-30 bg-white" :class="scrollPosition > 50 ? 'h-24 transition-all' : 'h-28 transition-all py-2'">
        <img src="../assets/LOGO.jpg" alt="Logo MLM" class="h-auto max-w-full" :class="scrollPosition > 50 ? 'my-4 transition-all' : 'transition-all'">
        <ul class="list-none flex gap-5 self-center font-semibold" :class="scrollPosition > 50 ? 'text-lg transition-all' : 'text-xl transition-all'">
            <li v-for="(i, idx) in links" :key="idx" class="hover:text-gray-600 hover:underline underline-offset-4">
                <router-link :to="i.url"> {{ i.name }} </router-link>
            </li>
        </ul>
    </div>
</template>