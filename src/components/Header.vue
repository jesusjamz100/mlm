<script setup>
import Navbar from './Navbar.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
library.add(faEnvelope, faLinkedin, faFacebook)

</script>

<template>
    <div class="w-full flex justify-center bg-blue-900 px-8 py-1 gap-5">
        <div class="flex gap-2 items-center text-white text-lg">
            <a href="mailto:contact@mlmetaleng.com" >
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <p class="hidden sm:inline"> contact@mlmetaleng.com</p>
            </a>
        </div>
        <div class="flex gap-2 items-center text-white text-lg">
            <a href="#" >
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <p href="#" class="hidden sm:inline"> /mlmetaleng</p>
            </a>
        </div>
        <div class="flex gap-2 items-center text-white text-lg">
            <a href="https://www.linkedin.com/company/mlm-metal-eng-llc" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
                <p class="hidden sm:inline"> /mlm-metal-eng-llc</p>
            </a>
        </div>
    </div>
    <Navbar />
</template>