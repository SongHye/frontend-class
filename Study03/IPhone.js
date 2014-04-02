(function(){
    
    function IPhone(phoneNum, options){
        
        Phone.call(this, phoneNum);
        
        this.model = "iphone";
        this.color = options.color;
        this.price = options.price;
    };

    IPhone.prototype = new Phone();
    IPhone.prototype.constructor = IPhone;
    
    IPhone.prototype.startFaceTime = function(){
        console.log("페이스타임을 겁니다!");
    };
    
    IPhone.prototype.getType = function(){
        return this.model;
    };//overwriding?
        
    window.IPhone = IPhone;
    
})();