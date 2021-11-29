<template>
  <div class="box" v-if="show">
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  name:"Popup",
  // data(){
  //   return{
  //     show:true,
  //     title:"弹窗内容",
  //   }
  // }
  
};
</script>

<style>
.box {
  position: fixed;
  width: 50%;
  top: 100px;
  left: 100px;
  text-align: center;
  pointer-events: none;
  background-color: #fff;
  border: grey 3px solid;
  box-sizing: border-box;
} 
</style>

