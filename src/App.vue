<template>

 <div class="container">
    <h1>全局弹窗</h1>
    <button @click="showPopup()">打开弹窗</button>
    <!-- <Popup/> -->
 </div>
</template>



 <script>
// import Popup from "./components/Popup.vue";
// console.log(Popup)
export default {
 
   methods:{
       showPopup(){{
           this.$pop('弹窗内容')
       }}
   }
}

</script>
