"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
class Rating {
    constructor(item) {
        this.starsClass = '.Rating__star';
        this.inputId = 'input';
        this.activeBtnClassName = 'Rating__star--active';
        this.data = [];
        this.item = item;
        this.name = this.item.dataset.name || '';
        this.stars = this.item.querySelectorAll(this.starsClass);
        this.input = this.item.querySelector(`[data-id="${this.inputId}"]`);
        this._handle();
    }
    _handle() {
        try {
            this._checkForUser();
            this.input.onchange = this._changeHandler.bind(this);
            this._setClickHandler();
            this._getAllData();
            this._init();
        }
        catch (err) {
            console.warn(err.message);
        }
    }
    _init() {
        if (this._getInputValue() !== '') {
            for (let item of this.stars) {
                if (item.dataset.value === this._getInputValue()) {
                    item.dispatchEvent(new Event('click'));
                }
            }
        }
    }
    _getAllData() {
        for (let item of this.stars) {
            this.data.unshift(item.dataset.value);
        }
    }
    _changeHandler() {
        let activeBtnIndex = parseInt(this._getInputValue()) - 1;
        this._setActiveBtn([...this.stars].reverse()[activeBtnIndex]);
    }
    _setClickHandler() {
        for (let item of this.stars) {
            item.onclick = this._clickHandler.bind(this, item);
        }
    }
    _clickHandler({ dataset }) {
        this._setInputValue(dataset.value);
    }
    _getInputValue() {
        return this.input.value;
    }
    _setInputValue(val) {
        this.input.value = val;
        this.input.dispatchEvent(new Event('change'));
    }
    _setActiveBtn(btn) {
        this._removeAllActives();
        btn.classList.add(this.activeBtnClassName);
    }
    _removeAllActives() {
        for (let item of this.stars) {
            item.classList.remove(this.activeBtnClassName);
        }
    }
    _checkForUser() {
        if (this.item === null)
            throw new Error(`Component's '${this.name}' item is null!`);
        for (let item of this.stars) {
            if (item.dataset.value === undefined)
                throw new Error(`Component's '${this.name}' button's 'data-value' attribute is undefined!`);
        }
        if (this.input === null)
            throw new Error(`Component's '${this.name}' input is null!`);
        console.info(`Component '${this.name}' is ready.`);
    }
}
exports.Rating = Rating;
exports.default = Rating;
