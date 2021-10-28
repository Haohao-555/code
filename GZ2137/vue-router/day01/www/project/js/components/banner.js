// 1.0 定义组件
let myBanner = {
    name:"myBanner",
    template:`<div>
            <h3>{{msg}}</h3>
    </div>`,
    data(){
        return {
            msg:"轮播图"
        }
    }
}