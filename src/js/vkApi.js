class vkApi {
    constructor(client) {
        this.client = client;
        console.log('object');
    }
    client;
    BaseParams = {
        access_token: "91e7428582667bf3a070ca32ee1f5dd38514e51352e6a47b038cc3e9d75c4007f7bba8502026105f7f463",
        v: "5.101",
    }

    Send(url, p, callback) {
        let bp = this.BaseParams;
        let params = p.params;
        console.log(bp);
        for (const key in bp) {
            if (bp.hasOwnProperty(key)) {
                params[key] = bp[key];
            }
        }
        console.log(params);
        this.client.jsonp(url, {
            params: params
        }, callback);
    }

    Search(params, callback) {
        this.Send("https://api.vk.com/method/users.search/", params, callback);
    }

    GetUsers(params, callback) {
        this.Send("https://api.vk.com/method/users.get/", params, callback);
    }
}

// axios.jsonp(url, {
//     params: {
//         user_ids: uids,
//         fields: "photo_200",
//     }
// }, (e, d) => {
//     let arr = d.response;
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         const user = arr[i];
//         utils.LoadImage("#i_" + user.id, user.photo_200);
//     }
// })