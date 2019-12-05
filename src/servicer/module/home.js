import request from "@/util/request"
export let getMasterBrandList = () => {
    return request("/v2-car-getMasterBrandList.html")
}
export let getMaskList = (MasterID) => {
    return request("/v2-car-getMakeListByMasterBrandId.html", { params: { MasterID } })
}
export let carList=(SerialID)=>{
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID}})
}