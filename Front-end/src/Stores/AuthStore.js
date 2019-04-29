import { observable, action, toJS } from 'mobx';
import RootStore from './RootStore';


export default class AuthStore {

    @observable test = "test";
    constructor(RootStore) {
        this.rootStore = RootStore; 

    }
}