import { makeAutoObservable } from 'mobx'
export default class TeamStore {
   constructor() {
      this._masters = []
      this._selectMaster = {}
      // this._page = 1
      // this._totalCount = 0
      // this._limit = 3
      makeAutoObservable(this)
   }

   setMasters(masters) {
      this._masters = masters
   }
   get masters() {
      return this._masters
   }

   setSelectMaster(master) {
      this._selectMaster = master
   }
   get selectMaster() {
      return this._selectMaster
   }
}