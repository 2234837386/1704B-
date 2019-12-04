// 引入拦截器
import request from "@/utils/request"
// 车的品牌

export let getMasterList=()=>{
    return request("/v1-city-alllist.html")
}
