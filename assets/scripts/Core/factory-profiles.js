import { PeopleTypes } from './types-people';

export class ProfilesFactory{

    /**
     * @returns {ProfilesFactory}
     */
    static instance() { 
        if (!this._instance) { 
            this._instance = new ProfilesFactory();
        }
        return this._instance;
    }

    constructor(){
        
    }




}