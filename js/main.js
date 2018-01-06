class Main{
    constructor(){
        if(window.location.hash.substr(1) == 0){
            window.location.hash = "#home";
            this.changeView("home");
        }else{
            this.changeView(window.location.hash.substr(1));   
        }
        this.changeSelectedNav(grab(window.location.hash));
        this.bindEvents();
    }
    
    changeView(view){
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = (e)=>{ 
            if (xhr.readyState == 4 && xhr.status == 200) {
                grab("#mainView").innerHTML = xhr.responseText;
            }
        }

        xhr.open("GET", "./views/"+view+".html", true);
        xhr.setRequestHeader('Content-type', 'text/html');
        xhr.send();
    }
    
    openNav(e){
        grab("#nav").classList.toggle("openedNav");
        applyFnClass(grab(".closedNavElem"), (element)=>{
            element.classList.toggle("openedNav");
        });
        applyFnClass(grab(".openNavElem"), (element)=>{
            element.classList.toggle("openedNav");
        });
    }
    
    changeSelectedNav(target){
        applyFnClass(grab(".navItem"), (element)=>{
            try{
                element.classList.remove("selected");
            }catch(err){}
        });
        target.classList.add("selected");
    }
    
    bindEvents(){                
        window.addEventListener("hashchange", (e)=>{
            this.changeView(window.location.hash.substr(1));
        });
        
        applyEventListenerClass(grab(".navItem"), "click", (e)=>{
            if(e.target.id === "openNav" || e.target.id === "closeNav"){
                this.openNav();
            }else{
                this.changeSelectedNav(e.target);
            }
        });
        
        grab("#pageTopArrow").addEventListener("click", (e)=>{
            window.scrollTo(0,0)
        });
        window.addEventListener("keyup", (e)=>{
            if(e.keyCode == 65){
                console.log("innerWidth: "+window.innerWidth + ", outerWidth: "+ window.outerWidth);
            }
        });
    }    
}

new Main();