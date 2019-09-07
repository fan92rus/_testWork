class Checker {
    utils = new Utils();

    CheckInputText(val, regex) {
        return new RegExp(regex).test(val);
    }
    CheckNumber(selector, min, max) {
        let val = this.utils.GetValue(selector);
        let isNumber = this.CheckInputText(val, "\\d+");
        if (isNumber && (val <= max) && (val >= min)) {
            return true;
        }
        return false;
    }
}
class Utils {
    storage = new Map();
    GetBy(selector) {
        if (this.storage.get(selector))
            return this.storage.get(selector);
        var el = document.querySelector(selector);
        this.storage.set(selector, el);
        return el;
    }
    GetValue(selector) {
        let input = this.GetBy(selector);
        if (input.constructor.name === HTMLInputElement.name) {
            return input.value;
        } else if (input.constructor.name === HTMLDivElement.name)
            return input.innerHtml;
    }
}

let check = new Checker();
console.log(check.CheckNumber('#day', 1, 31));