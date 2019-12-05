// 引入拦截器
import request from "@/util/request"
// 车的品牌

export let getMasterList=()=>{
    return request("/v1-city-alllist.html")
}
export let getCityList=(id)=>{
    return request("/v1-city-alllist.html",{params:{provinceid: id }})
}
