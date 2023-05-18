<template>
  <main class="mt-32">
    <h1 class="f-med">{{ $t("nav.home") }}</h1>
  </main>
</template>

<script>
import { useI18n } from 'vue-i18n'


export default {
    setup() {
        const { t } = useI18n({ useScope: "global" });

        return {
            t
        };
    }
}
</script>
