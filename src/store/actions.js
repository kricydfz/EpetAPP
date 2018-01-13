import {
  RECEIVE_HOME,
  RECEIVE_HOMEB,
  RECEIVE_MENUL,
  RECEIVE_BRANDS,
  RECEIVE_PET
}from './mutation_types'
import {
  requestHome,
  requestHomeB,
  requestMenuL,
  requestBrands,
  requestPet
}from '../api/index'
export default {
  async requestHome({commit},cb){
    const result=await requestHome()

      const home=result
      commit(RECEIVE_HOME,{home})
      cb && cb()

  },
  async requestHomeB({commit},cb){
    const result=await requestHomeB()

      const homeb=result
      commit(RECEIVE_HOMEB,{homeb})
      cb && cb()


  },

  async requestMenuL({commit},cb){
    const result=await requestMenuL()

    const menuL=result
    commit(RECEIVE_MENUL,{menuL})

    cb && cb()


  },
  async requestBrands({commit},cb){
    const result=await requestBrands()

    const brands=result
    commit(RECEIVE_BRANDS,{brands})
   // console.log(menuL);
    cb && cb()


  },
  async requestPet({commit},obj,cb){
    const result=await requestPet(obj)

    const pet=result
    commit(RECEIVE_PET,{pet})

    cb && cb()


  },
}
