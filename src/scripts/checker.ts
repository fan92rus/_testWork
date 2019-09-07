'use strict';

let storage: Map<String, Element>;
function CheckInput(input: HTMLInputElement, regex: String) {
    if (input.constructor.name === "HTMLInputElement")
        console.log(input.value);
    else
        console.log('object');
}
function GetBy(selector: string) {
    if (storage.get(selector))
        return storage.get(selector);
    let el = document.querySelector(selector);
    storage.set(selector, el);
}
CheckInput(GetBy('#day'));