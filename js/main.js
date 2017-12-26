class Main{
    constructor(){        
        this.bindEvents();
    }
    
    navCallback(e){
        grab("#nav").classList.toggle("openedNav");
        applyFnClass(grab(".closedNavElem"), (element)=>{
            element.classList.toggle("openedNav");
        });
        applyFnClass(grab(".openNavElem"), (element)=>{
            element.classList.toggle("openedNav");
        });
    }
    
    bindEvents(){
        
        let navItemClass = grab(".navItem");
        
        window.addEventListener("hashchange", (e)=>{
            console.log(window.location.hash);
        });
        
        applyEventListenerClass(navItemClass, "click", (e)=>{
            if(e.target.id === "openNav" || e.target.id === "closeNav"){
                this.navCallback();
            }else{
                applyFnClass(navItemClass,(element)=>{
                    try{
                        element.classList.remove("selected");
                    }catch(err){}
                });
                e.target.classList.add("selected");
            }
        });
        
    }
}

new Main();