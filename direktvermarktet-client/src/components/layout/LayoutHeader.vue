<script setup lang="ts">
import { HEADER_HEIGHT, MAX_WIDTH } from '@/constants/layout.constants';

</script>
<template>
    <div :style="{'--header-height': `${HEADER_HEIGHT}px`, '--max-width': `${MAX_WIDTH}px`}">
        <div class="header">
            <div class="header-content row align-center">
                <img src="@/assets/direkt_vermarktet_logo_lw.svg" class="logo"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.header{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100vw;
    height: var(--header-height);
    border-bottom: 1px solid var(--bg4);
    background-color: var(--bg8);
}
.header-content{
    margin: auto;
    max-width: var(--max-width);
    height: 100%;
}
.logo{
    height: calc(var(--header-height) - 16px * 2);
}
</style>