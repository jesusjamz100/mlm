<script>
export default {
    data() {
        return {
            images: [
                "dana-logo.png",
                "listas-logo-rudeveca.png",
                "metalsa-logo.png",
                "electbus-logo.png",
                "escaleras-aladino-logo.png"
            ]
        }
    }
}
</script>

<template>
    <p class="text-3xl pb-5 pt-10 font-semibold text-center">Our Customers</p>
    <div class="w-full flex justify-center">
        <div class="flex flex-col gap-5 justify-center p-5 max-w-4xl place-self-center text-justify">
            <p class="text-xl pb-2">In Venezuela we have developed customers in different areas, who have trusted in our work, under Multiservicios la Misericordia, C.A. We have designed and manufactured from die forming and plastic injection molds to machines or equipment according to the customer's needs.</p>
        </div>
    </div>
    <div class="flex flex-wrap w-full justify-center gap-20 py-10">
        <img v-for="(item, index) in images" :key="index" :src="item" :alt="item" class="w-auto max-h-28">
    </div>
</template>