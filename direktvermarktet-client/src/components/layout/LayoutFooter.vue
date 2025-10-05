<script setup lang="ts">
import { FOOTER_HEIGHT, MAX_WIDTH } from '@/constants/layout.constants';

</script>
<template>
    <div :style="{'--footer-height': `${FOOTER_HEIGHT}px`, '--max-width': `${MAX_WIDTH}px`}">
        <div class="footer">
            <div class="footer-content"></div>
        </div>
    </div>
</template>
<style scoped>
.footer{
    width: 100vw;
    height: var(--footer-height);
    background-color: var(--bg8);
}
.footer-content{
    margin: auto;
    height: 100%;
    max-width: var(--max-width);
}
</style>