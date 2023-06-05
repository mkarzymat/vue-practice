<template>
  <div class="flex flex-col-reverse gap-4 fixed right-3.5 top-56">
    <TransitionGroup
        name="list"
        class="natification_animate"
    >
        <div 
            v-for="natification in natification"
            :key="natification"
            class="flex justify-between items-center px-6 py-4 gap-4 rounded-lg defaultShadow bg-red-500 text-white"
        >
        <div class="flex justify-center items-center w-12 h-12 rounded-full overflow-hidden" v-if="natification.icon === exclamation">
            <img class="w-9/12" src="../../public/icons/!2.png" alt="">
        </div>
        <div class="w-40">
            <p class="f-med">{{ natification.error }}</p>
        </div>
        </div>
    </TransitionGroup>
  </div>
</template>

<script>
export default {
    name: 'NatificationView',
    props: [
        'natification'
    ],
    data() {
        const massage = this.natification
        return {
            massage,
            natifications: [],
        }
    }
}
</script>

<style scoped>

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.list-enter-active {
  transition: all .3s;
}
.list-leave-to {
  transform: translateX(280px);
  transition: all 1s;
  opacity: 0;
}
.list-move,
.list-move-to {
  transition: all .3s;
}
</style>
