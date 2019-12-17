import {carImage} from '../../servicer/index'
const state={
    imagesData:[],
    EnlargentImageflag:false,
    colorId:'',//选择车系颜色
    carId:'',//选择车款,
    imgFlag:false
}
const mutations={
    getImageData(state, payload) {
        state.imagesData = payload.filter(item => {
          item.List = item.List.map(ite => {
            ite.Url = ite.Url.replace('{0}', 3)
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
    },
    setImageFlag(state,payload){
        state.imgFlag=payload;
    }
}
const actions={
    async carImage({commit,state},payload){
        let params={SerialID:payload};
        if(state.colorId){//判断是否选择颜色
            params.colorId=state.colorId;
        }
        if(state.carId){
            params.carId=state.carId
        }
        let res=await carImage(params)
        commit('getImageData',res)
        // console.log(res)
        console.log("img---",res)
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}