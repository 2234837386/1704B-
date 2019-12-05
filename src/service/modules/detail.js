import request from '@/utils/request'
export let carList=(SerialID)=>{
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID}})
}