<template>
    <div class="m-0 w-4/5 overflow-hidden"> 
      <div class="flex justify-between absolute z-10 w-4/5 mt-44">
        <button class="btn" @click="prevSlide"></button>
        <button class="btn" @click="nextSlide"></button>
      </div>
      <div class="flex " :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
            <SliderItemView
                v-for="item in carousel_data"
                :key="item.id"
                :item_data="item"
                :text="item.name"
            />
      </div>
    </div>
</template>

<script>
import SliderItemView from './SliderItemView.vue';

export default {
    name: 'SliderView',
    components: {
        SliderItemView
    },
    props: [
        'carousel_data'
    ],
    data() {
        const carousel = this.carousel_data
        return {
            carousel,
            currentSlideIndex: 0
        }
    },
    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--
                console.log(this.currentSlideIndex);
            }
        },
        nextSlide() {
            if (this.currentSlideIndex >= this.carousel_data.length - 1) {
                this.currentSlideIndex = 0
            } else {
            this.currentSlideIndex++
            }
            console.log(this.currentSlideIndex);
        },
    }
}
</script>