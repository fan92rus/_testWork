const Events = {
    Click: "click",
    Change: "onchange",
    KeyDown: "keydown",
    KeyUp: "keyup"
};
Object.freeze(Events);

class Utils {
    storage = new Map();
    GetBy(selector) {
        let storageElement = this.storage.get(selector);
        if (storageElement)
            return storageElement;
        var el = document.querySelector(selector);
        this.storage.set(selector, el);
        return el;
    }
    GetValue(selector) {
        let input;
        if (typeof selector === "object")
            input = selector;
        else
            input = this.GetBy(selector);

        if (input && (input.constructor.name === HTMLInputElement.name)) {
            return input.value;
        } else if (input.constructor.name === HTMLDivElement.name)
            return input.innerHtml;
    }
    AddEvent(event, selector, func) {
        console.log(event);
        var el = this.GetBy(selector);
        el.addEventListener(event, func);
    }
    BindField(selector, data, field) {
        var el = this.GetBy(selector);
        data[field] = this.GetValue(el);
        el.addEventListener(Events.KeyUp, () => {
            data[field] = this.GetValue(selector);
        });
    }

    async LoadImage(selector, src) {
        var i = new Image();
        i.onload = function() {
            let el = utils.GetBy(selector);
            console.log(el);
            el.setAttribute('src', i.src);
        }
        i.src = src;
    }
}