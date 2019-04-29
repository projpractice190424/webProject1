import { observable, action, toJS } from 'mobx';
import RootStore from './RootStore';


export default class AuthStore {
    constructor(RootStore) {
        this.rootStore = RootStore; 

    }
}