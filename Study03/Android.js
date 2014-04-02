(function(){
    
    function Android(phoneNum, options){
           
        Phone.call(this, phoneNum);
        
        this.model = "andriod";
        this.color = options.color;
        this.price = options.price;
        
    };

    Android.prototype = new Phone();
    Android.prototype.constructor = Android;
    
    Android.prototype.useNotepad = function(){
       console.log("메모장을 사용합니다!");
    };
    
    Android.prototype.getType = function(){
        return this.model;
    };//overwriding?
        
    window.Android = Android;
    
})();