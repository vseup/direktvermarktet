import { api } from "@/main";
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { FarmShopResponse } from '@direktvermarktet/schemas'

export const useFarmShops = defineStore('farm-shops', () => {

    const endpoint = 'farm-shops';

    const data = ref<Map<string, FarmShopResponse>>(new Map())

    const error = ref<string | null>(null);
    const isLoading = ref<boolean>(false);

    function update(id?: string) {
        if (id) {
            updateWhereId(id)
        } else {
            updateAll();
        }
    }

    function updateWhereId(id: string) {
        error.value = null;
        isLoading.value = true;
        api.get(`${endpoint}/${id}`)
            .then(function (response) {
                console.log(response);
                data.value.set(response.data.id, response.data)
            })
            .catch(function (error) {
                console.warn(error);
                error.value = error.message ?? 'Request failed'
            })
            .finally(function () {
                isLoading.value = false;
            });
    }

    function updateAll() {
        error.value = null;
        isLoading.value = true;
        api.get(endpoint)
            .then(function (response) {
                console.log(response);
                response.data.map((res: FarmShopResponse) => data.value.set(res.id, res))
            })
            .catch(function (error) {
                console.warn(error);
                error.value = error.message ?? 'Request failed'
            })
            .finally(function () {
                isLoading.value = false;
            });
    }

    return {
        data,
        error,
        isLoading,
        update
    }
})
