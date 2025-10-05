<script setup lang="ts">
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAX_WIDTH } from '@/constants/layout.constants';
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
</script>
<template>
<div :style="{
    display: 'flex',
    '--header-height': `${HEADER_HEIGHT}px`, 
    '--footer-height': `${FOOTER_HEIGHT}px`,
    '--max-width': `${MAX_WIDTH}px`
}">
    <div class="page col">
        <LayoutHeader />
        <div class="page-content">
            <slot></slot>
        </div>
        <LayoutFooter />
    </div>
</div>
</template>
<style scoped>
.page{
    width: 100vw;
    background-color: var(--bg7);
}
.page-content {
    margin: auto;
    margin-top: var(--header-height);
    width: 100%;
    max-width: var(--max-width);
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    height: 200px;
}
</style>