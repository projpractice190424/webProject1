import { observable, action, toJS } from 'mobx';
import RootStore from './RootStore';


export default class AuthStore {

    @observable isLogin = false;
    
    constructor(RootStore) {
        this.rootStore = RootStore; 

    }
}