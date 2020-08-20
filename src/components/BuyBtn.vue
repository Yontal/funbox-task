<template>
    <div class="wrapper">, 
        <div class="buy" @click="$emit('buy')">
            купи.
        </div>
    </div>
</template>

<style scoped>
.buy{
    font-size: 13px;
    font-family: "trebuc";
    color: rgb(255, 255, 255);
    line-height: 1.231;
    text-align: center;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.004);
    display: inline-block;
    border-bottom: #0c6c9c dashed;
    color: #0c6c9c;
    cursor: pointer;
}

.wrapper{
    display: inline-block;
}
</style>