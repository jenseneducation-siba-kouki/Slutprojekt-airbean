import Vue from 'vue'
import Vuex from 'vuex'
import listMenu from '../assets/data/menu.json'

Vue.use(Vuex)


export default ({

    state: {
        menu: [],
        order: {},
        cart: [],
        counter: 0
    },
    mutations: {
        displayMenu(state, menu) {
            state.menu = menu
        },
        orderStatus(state,order){
            state.order = order
        },
        add(state,item){
            state.cart.push({
                id:item.id,
                price:item.price,
                title:item.title,
                quantity:1

            })
        }

    },
    actions: {
        async getlistMenu(content) {

            setTimeout(() => {
                content.commit('displayMenu', listMenu.menu)
            }, 600)
        }


    },
    // modules

})