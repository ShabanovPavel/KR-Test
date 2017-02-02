import { Questions } from '../param/export-param';

export class ProfilesFactory {
    /**
     * Анкета
     * @type {Profiles}
     * @memberOf ProfilesFactory
     */
    _profiels;

    constructor() {
        this._profiels = [];
    }

    /**
     * Возвращает анкету 
     * 
     * @returns {Profiles}
     * 
     * @memberOf ProfilesFactory
     */
    getProfiles() {
        Questions.forEach((questions) => {
            this._profiels.push(questions);
            
        });
        return this._profiels;
    }
}