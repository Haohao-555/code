 // 需求：  
    // 1、读取data目录下的worker.json文件，渲染文档中的数据
    // 2、点击“随机点名考勤” 随机选员工，被选中的员工，设置背景高亮
    // 3、把随机选中的员工名字 添加到执行的区域（灰色） 

// 业务
// 1. 读取本地文档的数据
let getData = url => {
    return new Promise((resolve,reject)=>{
        $.ajax({
            url: url,
            type: "get",
            success(res){
                resolve(res);
            },
            error(err){
                reject(err);
            }
        })
    })
}
// 创建一个获取员工数据promise
// let worker = getData("./data/worker.json");

// async await
// 2. 处理数据(复制/修改) 数组的 API
let vm = new Vue({
    el: "#app",
    data: {
        allArray: [],
        selectArray: [],
        newArr: [] // 取唯一的数据
    },
    methods: {
        myInit(){
            console.log("初始化...");
            // 记录当前函数作用域的this
            let _this = this;
            // 处理获取数据的逻辑
            async function init (){
                await getData("./data/worker.json").then(
                    data => {//请求成功
                        // console.log(data);
                        _this.allArray = _this.myDeepCopy(data);
                        _this.newArr = _this.myDeepCopy(data);
                        // console.log( _this.allArray );
                    },
                    err => {// 请求失败
                        console.log(err);
                    }
                )


            }
            // 初始化数据
            let pro = init();
            // pro.then(
            //     ()=> {
            //         console.log("继续...");
            //     }
            // )
        },
        // 随机数
        myRandom(len){
            return Math.floor(Math.random()*len);
        },
        // 深拷贝
        myDeepCopy(arr){
            // [... 数组] 
            // 复制数据方法
            // let newArray = Array.isArray(arr) ? []: {};
            // for(let key in arr){
            //     if(typeof arr[key] == "object"){
            //         arr[key].flag = false;
            //         newArray[key] = this.myDeepCopy(arr[key])
            //     }else {
            //         newArray[key] = arr[key]
            //     }
            // }

            // 简约复制数组
            let newArray = [...arr];
            newArray.forEach(item=> {
                item.flag = false;
            })
            return newArray;
        },
        // 事件点击
        myClick(){ 
            // 判断当前的数组是否还有值
            if(this.newArr.length == 0){
                console.log("全部考勤完毕!");
                return false;
            }
            // 获取随机索引值
            let index = this.myRandom(this.newArr.length);
            // 从 newArr数组取出数据并删除改该数据（避免重复点名）
            let obj = this.newArr.splice(index,1)[0];
            // console.log(index);
            // 循环大数组 allArray
            this.allArray.forEach((item,i)=> {
                // 根据id匹配选中的员工 
                if(item.id == obj.id){
                    // 设置指定的员工背景高亮
                     this.allArray[i].flag = true;
                }
            })
            // 把选中的员工信息添加到“灰色区域中”
            this.selectArray.push(obj);
        }
    }
})
// 打印Vue的实例
// console.log(vm);
vm.myInit();