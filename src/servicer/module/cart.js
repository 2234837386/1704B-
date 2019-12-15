<<<<<<< HEAD
import request from "@/utils/request";
export let getCartList = (carId, cityId) => {
    return request("/v2-dealer-alllist.html", { params: { carId, cityId } })
=======
// 引入拦截器
// import request from "@/util/request"
// // 城市的列表

// export let getMasterList=()=>{
//     return request("/v1-city-alllist.html")
// }
import request from "@/util/request";
export let getCartList = () => {
    return request("/v2-dealer-alllist.html?carId=131315&cityId=201")
>>>>>>> 15113ae0e74ab1761ba5f2c4d0af5e1d12e531d1
}
export let getCityList = () => {
    return request("/v1-city-alllist.html")
}
<<<<<<< HEAD
export let getIp = () => {
    return request("/location-client.html")
}
export let getCityListTwo = (provinceid) => {
    return request("/v1-city-alllist.html", { params: { provinceid } })
}
=======
export let getCityListTwo = (provinceid) => {
    return request("/v1-city-alllist.html", { params: { provinceid } })
}
>>>>>>> 15113ae0e74ab1761ba5f2c4d0af5e1d12e531d1
