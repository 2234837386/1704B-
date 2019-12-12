// 引入拦截器
import request from "@/util/request"
// 城市的列表

export let getMasterList=()=>{
    return request("/v1-city-alllist.html")
}
