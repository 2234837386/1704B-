import request from '@/util/request'
export let carList = (SerialID) => {
    return request('/v2-car-getInfoAndListById.html', { params: { SerialID } })
}
//车系图片
export let carImage=(params)=>{
    return request('/v2-car-getImageList.html',{params})
}
// 车系颜色
export let carColor=(SerialID)=>{
 return request(`v2-car-getModelImageYearColor.html?SerialID=${SerialID}`)
    // return request('v2-car-getModelImageYearColor.html?SerialID=2593')
}
// export let DistributorList=()=>{
//     return request('/v1-city-alllist.html')
// }