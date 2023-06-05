<template>
    <div class="w-full h-96 rounded-xl overflow-hidden defaultBorder flex justify-center items-center">
        <p class="f-med">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'SliderItemView',
    props: [
        'item_data',
        'text',
        'img'
    ],
    data() {
        const item = this.item_data
        return {
            item
        }
    }
}
</script>