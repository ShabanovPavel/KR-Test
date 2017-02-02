import { ProfilesFactory } from './factory-profiles';
import { PeopleTypes, PersonalityType, Description, Questions, People } from '../param/export-param';
export class Facade {
    /**
     * Анкета вопросов
     * @type {Profiles}
     * @memberOf Facade
     */
    profiles;
    /**
     * Результат опроса
     * 
     * @type {Array<PersonalityType>}
     * @memberOf Facade
     */
    rezult;


    constructor() {
        this.rezult = {};
    }
    /**
     * Создание анкеты
     * 
     * @memberOf Facade
     */
    createProfile() {
        this.profiles = new ProfilesFactory().getProfiles();
    }
  
    /**
     * Засчитывает ответ
     * 
     * @param {Number} id
     * @param {Boolean} fl
     * 
     * @memberOf Facade
     */
    add(id, fl) {

        let type;
        if (fl) {
            type = this.profiles[id].yes;
        } else {
            type = this.profiles[id].no;
        }

        if (isNaN(this.rezult[type])) {
            this.rezult[type] = 1;
        } else {
            this.rezult[type] = this.rezult[type] + 1;
        }
    }

    /**
     * Анализаирует полученные данные, делает умозаключение
     * 
     * @returns 
     * 
     * @memberOf Facade
     */
    analysis() {
        let powerLine,//направление энергии
            collectionInformation,//сбор информации
            makingDecisions,//принятие решений
            wayСommunicate;//способ взаимодействия с внешним миром
        //Высчитываем чего больше из групп
        powerLine = this.definition(PersonalityType.E, PersonalityType.I);
        collectionInformation = this.definition(PersonalityType.S, PersonalityType.N);
        makingDecisions = this.definition(PersonalityType.T, PersonalityType.F);
        wayСommunicate = this.definition(PersonalityType.J, PersonalityType.P);


        //Вытаскиваем психотип на основе определенных велечин
        let rez = this.getPeopleTypes([powerLine, collectionInformation, makingDecisions, wayСommunicate]);
        return rez;
    }


    /**
     * Определяет чего больше получилось из 2 типов
     * 
     * @param {PersonalityType} type1
     * @param {PersonalityType} type2
     * @returns {PersonalityType}
     * 
     * @memberOf Facade
     */
    definition(type1, type2) {
        if(this.rezult[type1]==null) this.rezult[type1]=0;
        if(this.rezult[type2]==null) this.rezult[type2]=0;
        return this.rezult[type1] > this.rezult[type2] ? type1 : type2;
    }

    /**
     * Возвращает обект типа человека
     * 
     * @param {Array<PersonalityType>} param
     * @returns {People}
     * 
     * @memberOf Facade
     */
    getPeopleTypes(param) {
        let rezult;
       
        People.forEach((item) => {
            let fl = false;
            for (let i = 0; i < 4; i++) {
                if (item.value[i] != param[i]) {
                    fl = true;
                    break;
                }
            }
            if (fl != true) {
                rezult = item;

            }
        });
        return rezult.type;
    }

    /**
     * Возвращает количество вопрососв
     * 
     * @returns {Number}
     * 
     * @memberOf Facade
     */
    getAmountQuestion() {
        return this.profiles.length;

    }

    /**
     * Возвращает формулировку вопроса
     * 
     * @param {id} id
     * @returns
     * 
     * @memberOf Facade
     */
    getCurrentQuestion(id) {
        return this.profiles[id].questions;
    }

    /**
     * возвращает характеристику социотипа
     * 
     * @param {type} param
     * @returns
     * 
     * @memberOf Facade
     */
    getDescription(param){
        let rez;
        Description.forEach((item)=>{            
            if(item.type===param){
                rez= item.description;
            }
        });
        return rez;
    }
    

}