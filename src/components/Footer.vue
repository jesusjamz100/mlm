<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default {
    setup() {
        library.add(faPhone, faEnvelope);
        const year = new Date().getFullYear();
        return {
            year
        }
    }
}
</script>

<template>
    <footer class="bg-blue-800">
        <div class="py-10 flex max-h-52 h-52 justify-center gap-3 md:gap-20 lg:gap-36 xl:gap-52 max-w-full">
            <img src="../assets/LOGO.png" alt="MLMLOGO" class="h-auto max-w-full px-2 drop-shadow-lg md:block hidden" >
            <img src="../assets/LOGO-SMALL.png" alt="MLMLOGO" class="h-auto max-w-full px-2 drop-shadow-lg md:hidden" >
            <div class="flex flex-col gap-3 max-w-full">
                <p class="text-xl font-semibold text-white">Contact us!</p>
                <p class="text-white text-sm md:text-lg"><font-awesome-icon :icon="['fas', 'phone']" /> +58 (414) 425-6603</p>
                <p class="text-white text-sm md:text-lg"><font-awesome-icon :icon="['fas', 'envelope']" /> contact@mlmetaleng.com</p>
            </div>
        </div>
        <p class="text-white text-center pb-2">© Copyright {{ year }}. Created by 
            <a href="https://jesusmendezpf.vercel.app/" class="font-semibold" target="_blank" >Jesus Mendez</a>.
        </p>
    </footer>
</template>