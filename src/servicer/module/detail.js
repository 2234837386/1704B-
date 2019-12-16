import request from "@/utils/request";
export let getDetailList = (SerialID) => {
    return request("/v2-car-getInfoAndListById.html", { params: { SerialID } })
}