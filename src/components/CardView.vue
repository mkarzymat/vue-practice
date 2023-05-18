<template>
    <div class="p-2.5 rounded-lg defaultShadow mb-10">
        <div class="flex justify-center items-center defaultShadow max-h-72 w-full rounded-lg overflow-hidden mb-5">
            <img class="w-full" :src="img" alt="">
        </div>
        <div class="gap-3 flex flex-col">
            <h3 class="f-sBold text-lg">{{ title }}</h3>
                <div class="">
                    <h4 class="f-med">
                    {{ category }}
                    </h4>
                </div>
                <div class="">
                    <h4 class="f-med">
                        {{ $t('card.stock') }}: {{ stock }}
                    </h4>
                </div>
                <div class="">
                    <h4 class="flex f-sBold">
                        {{ $t('card.discount') }} / &nbsp;
                    <p class="text-red-600">{{ discount }}%</p> 
                    </h4>
                </div>
                <div class="flex justify-between items-center mt-3.5 mb-4">
                  <div class="">
                    <h4 class="f-sBold">
                    $ {{ price }}
                    </h4>
                  </div>
                <button class="f-med btn">{{ $t('card.learnMore') }}</button>
                </div>
                <div class="">
                    <h4 class="f-reg mb-5">
                    {{ description }}
                    </h4>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'this-Card',
    props: [
        'title',
        'img',
        'price',
        'text',
        'category',
        'description',
        'discount',
        'stock'
    ]
}
</script>

<!-- <style scoped>

.content {
    height: auto;
}
.card {
    padding: 10px;
    margin-bottom: 40px;
    height: auto;
    border-radius: 10px;
    /* background-color: #ffffff; */
    /* border: 1px solid #0eaa00; */
    transition: .1s;
    box-shadow: 0px 2px 6px rgba(14, 170, 0, 0.20);
}
.card:hover {
    box-shadow: 0px 2px 10px rgba(14, 170, 0, 0.30);;
    transition: .1s;

}

.img_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 366px;
    margin-bottom: 15px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.10);
    /* border: 1px solid #0eaa00; */
    overflow: hidden;
}.img {
    width: 100%;
}

.subject {
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: 700;
}
.reguler {
    font-size: 14px;
    font-family: 'Montserrat';
    font-weight: 500;
}

.medium {
    font-size: 14px;
    font-family: 'Montserrat';
    font-weight: 600;
}

.bold {
    font-size: 18px;
    font-weight: 700;
    font-family: 'Montserrat';
}

.discount {
    display: flex;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Montserrat';
}
.price {
    display: flex;
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Montserrat';
}

.discount {
    margin: 0;
    color: rgb(255, 0, 0);
}

.btn_containers {
    width: 100%;
    height: 37px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn {
    color: #fff;
    background-color: #0eaa00;
    padding: 10px 25px;
    font-size: 13px;
    font-weight: 400;
    border-radius: 6px;
    font-family: 'Montserrat';
    border: 1px solid #0eaa00;
    transition: 0.2s;
}.btn:hover {
    cursor: pointer;
    box-shadow: 0 4px 4px rgba(14, 170, 0, 0.30);
}.btn:active {
    color: #0eaa00;
    background-color: #fff;
    transition: 0.2s;
}
</style> -->