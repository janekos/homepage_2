let grab = function(e){
    let se = e.substr(1);
    if(e.charAt(0) === "#"){        
        return document.getElementById(se);   
    }else if(e.charAt(0) === "."){
        return document.getElementsByClassName(se);
    }
}

let applyEventListenerClass = function(elArr, event, callback){
    for(let element of elArr){
        element.addEventListener(event, callback);   
    }    
}

let applyFnClass = function(elArr, callback){
    for(let element of elArr){
        callback(element);   
    }
}