var u = require('unirest');

function get(inURL){
    return new Promise(function(inHandler){
        u.get(inURL).end(inHandler);
    });
}

/////////////////////////////////////////////////////////////////

get('https://www.google.com').then(function(inResponse){
    
    console.log(inResponse.request.uri.href, inResponse.code);
    return get('https://www.twitch.tv');
    
}).then(function(inResponse){
    
    console.log(inResponse.request.uri.href, inResponse.code);
    return get('https://www.thinkful.com');
    
});
