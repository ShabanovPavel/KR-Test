import { Facade } from './core/facade';
cc.Class({
    extends: cc.Component,
    properties: {
        btnStart: cc.Node,
        pnlQuestions: cc.Node,
        pnlFinish: cc.Node,
        question: cc.Label,
        _targetQuestion: 0,
        _amountQuestion: 0,
        finish: cc.Label,
        API: null
    },
    onLoad: function () {

        this.API = new Facade();
        this.API.createProfile();
        this._targetQuestion = 0;
        this._amountQuestion = this.API.getAmountQuestion();
        this.questionMas = [];
        this.rand();
    },
    /**
     * Рандомизирует вопросы
     */
    rand() {
        for (let i = 0; i < this._amountQuestion; i++) {
            this.questionMas[i] = i;
        }
        let a, b, c;
        for (let i = 0; i < 100; i++) {
            a = this.getRandomInt(0, this._amountQuestion - 1);
            b = this.getRandomInt(0, this._amountQuestion - 1);
            c = this.questionMas[a];
            this.questionMas[a] = this.questionMas[b];
            this.questionMas[b] = c;
        }

    },
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;


    },
    onClikBtnStart() {
        this.btnStart.active = false;
        this.pnlQuestions.active = true;
        this.getQuestion();
    },
    onClikRestart() {
        this.btnStart.active = true;
        this.pnlFinish.active = false;
        this.API = new Facade();
        this.API.createProfile();
        this._targetQuestion = 0;
        this._amountQuestion = this.API.getAmountQuestion();
        this.rand();
    },
    onClikBtnYes() {
        this.API.add(this.questionMas[this._targetQuestion], true);
        this.nextQuestions();
    },
    onClikBtnNo() {
        this.API.add(this.questionMas[this._targetQuestion], false);
        this.nextQuestions();
    },
    /**
     * Следующее состояние
     */
    nextQuestions() {
        if (this._targetQuestion === this._amountQuestion - 1) {
            this.pnlFinish.active = true;
            this.pnlQuestions.active = false;
            this.closeQuestions();

        } else {
            this._targetQuestion++;
            this.getQuestion();
        }
    },
    /**
     * Событие завершения вопросов
     */
    closeQuestions() {
        this.finish.string = this.API.getDescription(this.API.analysis());
    },
    /**
     * Метод получения нового вопроса 
     */
    getQuestion() {
        this.question.string = this.API.getCurrentQuestion(this.questionMas[this._targetQuestion]);
    },
});
