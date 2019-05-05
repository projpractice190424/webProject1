import { observable, action, toJS } from 'mobx';
import AuthStore from './AuthStore.js';

export default class RootStore {

    @observable test = "test";
    
    constructor() {
        this.authStore = new AuthStore(this);
    }
}
