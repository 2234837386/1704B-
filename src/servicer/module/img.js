import request from "@/util/request"
export let getImageList = (SerialID) => {
    return request("/v2-car-getImageList.html", { params: { SerialID } })
}