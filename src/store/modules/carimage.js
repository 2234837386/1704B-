import {carImage} from '../../servicer/index'
const state={
    imagesDate:[],
    EnlargentImageflag:false,
    colorId:'',//选择车系颜色
    carId:''//选择车款
}
const mutations={
    getImageDate(state,payload){
        state.imagesDate=payload.map(item=>{
            item.List.map(ite=>{
                ite.Url=ite.Url.replace('{0',3)
                return ite
            })
            return item
        })
    },
    imgFlag(){
        state.EnlargentImageflag=true
    },
    setColorId(state,payload){
        state.colorId=payload
    },
    setCarId(state,payload){
        state.carId=payload
    }
}
const actions={
    async carImage({commit,state},payload){
        let params={SerialID:payload};
        if(state.colorId){//判断是否选择颜色
            params.colorId=state.colorId;
        }
        if(state.carId){
            params:carId=state.carId
        }
        let res=(' getImageDate',res)
        console.log(res)
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}