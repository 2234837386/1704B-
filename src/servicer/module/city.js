// 引入拦截器
import request from "@/util/request"
// 全国列表

export let getCityList=(id)=>{
    return request("/v1-city-alllist.html",{params:{provinceid:id}})
}
