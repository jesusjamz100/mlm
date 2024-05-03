<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGear, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

export default {
    setup() {
        library.add(faGear, faScrewdriverWrench)
        
        return {

        }
    }
}
</script>

<template>
    <div class="flex flex-col bg-gray-300 main h-screen">
        <div class="bg-white opacity-45 absolute z-0 w-full h-full flex" />
        <div class="flex flex-col gap-5 mt-56  m-auto">
            <h1 class="text-5xl z-10 font-bold text-shadow title">Tooling & Die Design</h1>
            <a class="rounded p-3 font-semibold text-white bg-blue-600 w-fit z-10 m-auto shadow-md text-lg hover:cursor-pointer" href="/services">Services</a>
        </div>
    </div>
    <div class="flex flex-col bg-white h-fit p-10 gap-12">
        <p class="text-3xl text-center font-semibold">With 20+ years of experience.</p>
        <div class="flex justify-center px-32 lg:gap-96 md:gap-56 gap-32">
            <div class="flex flex-col justify-between gap-3">
                <font-awesome-icon :icon="['fas', 'gear']" class="text-7xl text-blue-800" />
                <p class="text-2xl">Product Engineering</p>
            </div>
            <div class="flex flex-col justify-between gap-3">
                <font-awesome-icon :icon="['fas', 'screwdriver-wrench']" class="text-7xl text-blue-800" />
                <p class="text-2xl">Tool & Die Design</p>
            </div>
        </div>
        <div class="flex flex-col gap-8">
            <p class="text-xl text-center max-w-6xl self-center">We've been delivering engineering services in product development,tool design and modeling. We have strong knowledge and experience of New Product Development, Tool design & development, Tool tryout would ensure better quality of designs.</p>
            <p class="text-xl text-center max-w-6xl self-center">We offer Tool & Die Design Services and Die Engineering Services; Product and Process Engineering Services to assist you with your custom die needs.</p>
        </div>
    </div>
</template>

<style>

.main {
    background-image: url(../assets/TOOL&DIE-DESIGN-03.png);
    background-repeat: no-repeat;
    background-position: center;
}

.title {
    text-shadow: 1px 1px 2px gray;
}

</style>