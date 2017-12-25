class Main{
    constructor(){
        
        this.bindEvents();
    }
    
    navCallback(e){
        grab("#nav").classList.toggle("openedNav");
        applyFnClass(grab(".closedNavElem"), function(element){
            console.log(element.id);
            element.classList.toggle("openedNav");
        });
        applyFnClass(grab(".openNavElem"), function(element){
            console.log(element.id);
            element.classList.toggle("openedNav");
        });
    }
    
    bindEvents(){
        grab("#openNav").addEventListener("click", this.navCallback);
        
        grab("#closeNav").addEventListener("click", this.navCallback);
        
        /*applyEventListenerClass(grab(".navItem"), "click", (e)=>{
            console.log(e.target.dataset.href);
        });*/
    }
}

new Main();