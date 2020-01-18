var request = require('request');
module.exports = class web
{
    constructor()
    { 
        global.web=this
    } 
    getData(url,data,header,func)
    {
        if(url.indexOf('?')==-1 && data)
        {
            url+="?"
        }
        if(data)
            for(var a in data)
            {
                url+="&"+a+'='+data[a];
            }
        var options = { method: 'GET',
            url: url, 
            json: true };
        if(header)
            options.header=header;
        if(func)
        {
            request(options, function (error, response, body) {
                
                func(error,JSON.parse(body))
            })            
        }
        else
        {
            return new Promise(function (resolve, reject) {
                request(options, function (error, response, body) { 
                    if(error)
                        return reject(error)
                    return resolve(JSON.parse(body))
                }) 
            })
        }
    }
    get(url,data,header,func)
    {
        if(url.indexOf('?')==-1 && data)
        {
            url+="?"
        }
        if(data)
            for(var a in data)
            {
                url+="&"+a+'='+data[a];
            }
        var options = { method: 'GET',
            url: url, 
            json: true };
        if(header)
            options.header=header;
        if(func)
        {
            request(options, function (error, response, body) {
                
                func(error,body)
            })            
        }
        else
        {
            return new Promise(function (resolve, reject) {
                request(options, function (error, response, body) { 
                    if(error)
                        return reject(error)
                    return resolve(body)
                }) 
            })
        }
    }
    postData(url,data,header,func)    
    {
        var options = { method: 'POST',
            url: url,
            body:data,
            json: true };
        if(header)
            options.header=header;
            //console.log(options)
        if(func)
        {
            request(options, function (error, response, body) {
                //if (error) throw new Error(error);
              
                func(error,JSON.parse(body))
              });
                       
        }
        else
        {
            console.log(options)
            return new Promise(function (resolve, reject) {
                request(options, function (error, response, body) {
                    if (error) return reject(error);
                  
                    return resolve(JSON.parse(body))
                  });
               
            })
        }        
    }
    post(url,data,header,func)    
    {
        var options = { method: 'POST',
            url: url,
            body:data,
            json: true };
        if(header)
            options.header=header;
            //console.log(options)
        if(func)
        {
            request(options, function (error, response, body) {
                //if (error) throw new Error(error);
              
                func(error,body)
              });
                       
        }
        else
        {
            console.log(options)
            return new Promise(function (resolve, reject) {
                request(options, function (error, response, body) {
                    if (error) return reject(error);
                  
                    return resolve(body)
                  });
               
            })
        }        
    }
}