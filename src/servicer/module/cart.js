// 引入拦截器
// import request from "@/util/request"
// // 城市的列表

// export let getMasterList=()=>{
//     return request("/v1-city-alllist.html")
// }
import request from "@/util/request";
export let getCartList = (carId, cityId) => {
    return request("/v2-dealer-alllist.html", { params: { carId, cityId } })
}
export let getCityList = () => {
    return request("/v1-city-alllist.html")
}
export let getIp = () => {
    return request("/location-client.html")
}
export let getCityListTwo = (provinceid) => {
    return request("/v1-city-alllist.html", { params: { provinceid } })
}