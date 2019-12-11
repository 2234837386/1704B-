import request from "@/util/request";
export let getformList = () => {
    return request("v2-dealer-alllist.html?carId=131315&cityId=201")
}