//自定义防抖指令
// 用户输入完毕的时候，才发送一次HTTP请求
export default {
    inserted:function(el){
        let timer = null
        el.addEventListener('keypress',()=>{
            if(timer){
                clearTimeout(timer)
            }
            timer =setTimeout(()=>{
                console.log('发送请求')
            },1000)
        })
    }
   
}