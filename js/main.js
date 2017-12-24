class Main{
    constructor(){
        
        this.bindEvents();
    }
    
    navCallback(e){
        grab("menuBtn").classList.toggle("closedNav");
        grab("navItems").classList.toggle("closedNav");
    }
    
    bindEvents(){
        grab("menuBtn").addEventListener("click", this.navCallback);
        
        grab("closeNav").addEventListener("click", this.navCallback);
    }
}

new Main();