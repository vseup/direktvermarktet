<script setup lang="ts">
import LayoutPage from '@/components/layout/LayoutPage.vue';
import { useFarmShops } from '@/stores/farmShops';
import { onMounted } from 'vue';

const farmShops = useFarmShops();

onMounted(() => {
  farmShops.update()
})

</script>
<template>
  <main>
    <LayoutPage>
      {{ farmShops.data }}
    </LayoutPage>
  </main>
</template>
