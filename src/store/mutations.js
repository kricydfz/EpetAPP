import {
  RECEIVE_HOME,
  RECEIVE_HOMEB,
  RECEIVE_MENUL,
  RECEIVE_BRANDS,
  RECEIVE_PET
}from './mutation_types'
export default {
  [RECEIVE_HOME](state, {home}){
    state.home = home
  },
  [RECEIVE_HOMEB](state, {homeb}){
    state.homeb = homeb
  },
  [RECEIVE_MENUL](state, {menuL}){
    state.menuL = menuL
  },
  [RECEIVE_BRANDS](state, {brands}){
    state.brands = brands
  },
  [RECEIVE_PET](state, {pet}){
    state.pet = pet
  },
}
