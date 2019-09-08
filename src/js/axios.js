class PostMan {
    async Get(adress) {
        let res = await fetch(adress, {
            method: "Get",
            mode: 'no-cors'
        }).then(e => e.text());
        console.log(res);
        return res.json();
    }
    async Post(adress, body) {
        let res = fetch(adress, {
            method: "Post",
            body: JSON.stringify(body)
        }).then(e => console.log(e.text()));
        return res;
    }

    count = 0;

    noop() {}

    jsonp(url, opts, fn) {
        if ('function' == typeof opts) {
            fn = opts;
            opts = {};
        }
        if (!opts) opts = {};

        var prefix = opts.prefix || '__jp';

        var id = opts.name || (prefix + (this.count++));

        var params = opts.params || [];
        var param = opts.param || 'callback';
        var timeout = null != opts.timeout ? opts.timeout : 60000;
        var enc = encodeURIComponent;
        var target = document.getElementsByTagName('script')[0] || document.head;
        var script;
        var timer;


        if (timeout) {
            timer = setTimeout(function() {
                cleanup();
                if (fn) fn(new Error('Timeout'));
            }, timeout);
        }

        function cleanup() {
            if (script.parentNode) script.parentNode.removeChild(script);
            window[id] = () => {};
            if (timer) clearTimeout(timer);
        }

        function cancel() {
            if (window[id]) {
                cleanup();
            }
        }

        window[id] = function(data) {
            console.log('jsonp got', data);
            cleanup();
            if (fn) fn(null, data);
        };

        // add qs component
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const element = params[key];
                url += (~url.indexOf('?') ? '&' : '?') + key + '=' + enc(element);
            }
        }
        url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
        url = url.replace('?&', '?');

        console.log('jsonp req "%s"', url);

        // create script
        script = document.createElement('script');
        script.src = url;
        target.parentNode.insertBefore(script, target);

        return cancel;
    }
}