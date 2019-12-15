import { getDetailList } from "@/servicer/index";
function Sortfn(data) {
    return data && data.sort((a, b) => {
        if (a["exhaust"] === b["exhaust"]) {
            if (a["max_power"] === b["max_power"]) {
                return a["inhale_type "] - b["max_power"]
            } else {
                return a["max_power"] - b["max_power"]
            }
        } else {
            return a["exhaust"] - b["exhaust"]
        }
    })
}
function pushfn(data) {
    data = data && data.map(item => {
        item.keys = `${item.exhaust_str}${item.max_power_str} ${item.inhale_type}`;
        return item;
    })
    let newList = [];
    data && data.forEach(item => {
        let index = newList.findIndex(value => value.key === item.keys);
        if (index !== -1) {
            newList[index].list.push(item);
        } else {
            newList.push({
                key: item.keys,
                list: [item]
            })
        }
    });
    return newList;
}

const state = {
    detailList: [],
    detailTab: [],
    detailItem: []
}

const mutations = {
    setDetailList(state, actions) {
        let ListData = JSON.parse(JSON.stringify(actions));
        ListData.CoverPhoto = ListData.CoverPhoto.includes("{0}") ? ListData.CoverPhoto.replace("{0}", 3) : ListData.CoverPhoto;
        state.detailList = ListData;
        let listdata = JSON.stringify(actions.list);
        let arr = [
            {
                year: "全部"
            }
        ];
        listdata &&
            JSON.parse(listdata).map((item, index) => {
                if (arr.find(a => a.year === item.market_attribute.year)) return;
                arr.push({
                    year: item.market_attribute.year
                });
            });
        arr.map(item => {
            if (item.year === "全部") {
                item.children =
                    listdata &&
                    JSON.parse(listdata).filter(i => i.market_attribute.year);
            } else {
                item.children =
                    listdata &&
                    JSON.parse(listdata).filter(
                        i => i.market_attribute.year === item.year
                    );
            }
        });
        state.detailTab = arr;
    }
    ,
    setDetailItem(state, actions) {
        let ind = Boolean(actions) ? actions : 0;
        let arr = pushfn(Sortfn(state.detailTab[ind].children));
        state.detailItem = arr;
    }
}
const actions = {
<<<<<<< HEAD
    async getDetailList({ commit }, actions) {
        let res = await getDetailList(actions);
        commit("setDetailList", res)
=======
    async carList({ commit }, actions) {
        let res = await carList(actions)
        commit('getList', res)
        console.log(res)
>>>>>>> 15113ae0e74ab1761ba5f2c4d0af5e1d12e531d1
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}