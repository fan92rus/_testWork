class Checker {
    CheckInputText(val, regex) {
        return new RegExp(regex).test(val);
    }
    CheckNumber(value, min, max) {
        let val = value;
        let isNumber = this.CheckInputText(val, "\\d+");
        if (isNumber && (val <= max) && (val >= min)) {
            return true;
        }
        return false;
    }
}