import Vue from 'vue'
import Popup from "./Popup.vue";

// 创建构造器
const PopupConstructor = Vue.extend(Popup)
new Vue

function showPopup(text,duration=2000){
    // 创建了pop组件，保存到变量里
    const popDOM = new PopupConstructor({
        // 动态创建挂载元素
        el:document.createElement('div'),
        data(){
            return{
                text:text,
                show:true
            }
        }
    });
    document.body.appendChild(popDOM.$el);

    setTimeout(()=>{
        popDOM.show = false
    },duration)
}

function popRegistry(){
    Vue.prototype.$pop = showPopup;
}

// 先前写成export default popRegistry（）就空白了;
export default popRegistry;