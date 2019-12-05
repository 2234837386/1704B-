import request from '@/util/request'
export let carList = (SerialID) => {
    return request('/v2-car-getInfoAndListById.html', { params: { SerialID } })
}
export let carImage=(params)=>{
    return request('/v2-car-getImageList.html',{params})
}