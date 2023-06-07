<template>
    <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="name in data.names" :key="name">
      <div class="carousel__item">{{ name }}</div>
    </Slide>

    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'CarouselView',
    components: {
      Carousel,
      Slide
    },
    data() {
      return {
        data: {
          names: [
            'alex',
            'john',
            'curry',
            'pool',
          ] 
        }
      }
    },
    methods: {
    },
  })
  </script>
  
  <style>
  .carousel {
    width: 80%;
  }
  .carousel__item {
    min-height: 400px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 5px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
  </style>