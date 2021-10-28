// 1.0 定义组件
let myList = {
    name:"myList",
    template:`<div>
            <h3>{{msg}}</h3>
    </div>`,
    data(){
        return {
            msg:"列表组件"
        }
    }
}