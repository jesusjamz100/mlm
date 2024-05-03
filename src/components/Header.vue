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
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <a href="mailto:info@mlmetaleng.com">info@mlmetaleng.com</a>
        </div>
        <div class="flex gap-2 items-center text-white text-lg">
            <font-awesome-icon :icon="['fab', 'facebook']" />
            <a href="#">/mlmetaleng</a>
        </div>
        <div class="flex gap-2 items-center text-white text-lg">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
            <a href="https://www.linkedin.com/company/mlm-metal-eng-llc" target="_blank">/mlm-metal-eng-llc</a>
        </div>
    </div>
    <Navbar />
</template>