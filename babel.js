var u = require('unirest');

function get(inURL){
    return new Promise(function(inHandler){
        u.get(inURL).end(inHandler);
    });
}

/////////////////////////////////////////////////////////////////

(async function() {
    var response;
    response = await get('https://www.google.com');
    console.log(response.request.uri.href, response.code);
    response = await get('https://www.twitch.tv');
    console.log(response.request.uri.href, response.code);
    response = await get('https://www.thinkful.com');
    console.log(response.request.uri.href, response.code);
}());