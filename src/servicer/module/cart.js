// 引入拦截器
// import request from "@/util/request"
// // 城市的列表

// export let getMasterList=()=>{
//     return request("/v1-city-alllist.html")
// }
import request from "@/util/request";
export let getCartList = () => {
    return request("/v2-dealer-alllist.html?carId=131315&cityId=201")
}
export let getCityList = () => {
    return request("/v1-city-alllist.html")
}
export let getCityListTwo = (provinceid) => {
    return request("/v1-city-alllist.html", { params: { provinceid } })
}
