(function(){
    
    var phoneNum = "";
  
    function Phone(phoneNum){         
        this.phoneNum = phoneNum;
        this.model = "No model";
    }

    Phone.prototype.call = function(){
        if(!this.hasPhoneNum())
            console.log("개통하세요!");
        else
            console.log("전화를 겁니다!");
    };
    
    Phone.prototype.hasPhoneNum = function(){
        return phoneNum === "";
    };
        
    Phone.prototype.setNumber = function(phoneNum){
        this.phoneNum = phoneNum;
    };
    
    Phone.prototype.getNumber = function(){
        return this.phoneNum;
    };
      
    Phone.prototype.getType = function(){
        return this.model;
    };
    
    window.Phone = Phone;
    
})();