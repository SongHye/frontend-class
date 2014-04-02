(function(){
    
    function Person(myName, phone){  
        this.myName = myName;
        this.phone = phone;
        
        this.myPhoneNum = this.phone.getNumber();
        this.myPhoneType = this.phone.getType();
    }

    Person.prototype.setYourInfo = function(person){
        this.yourName = person.getName();
		this.yourPhoneNum = person.phone.getNumber();
		this.yourPhoneType = person.phone.getType();
    };
    
    Person.prototype.getName = function(){
        return this.myName;
    };
        
    Person.prototype.sendSMS = function(person, msg){
        
        this.setYourInfo(person);
        
        console.log(this.myPhoneNum + "(" + this.myPhoneType + ")" + ">" + this.yourPhoneNum + "(" + this.yourPhoneType + ")");   
        console.log("[" + this.myName + "]" + this.yourName + "에게 '" + msg + "' 를 보냈습니다.");
        
        this.getSMS(person, msg);
    };
    
    Person.prototype.getSMS = function(person, msg){
        
        this.setYourInfo(person);
           
        console.log(this.yourPhoneNum + "(" + this.yourPhoneType + ")" + ">" + this.myPhoneNum + "(" + this.myPhoneType + ")");
        console.log("[" + this.yourName + "]" + this.myName + "에게 '" + msg + "' 를 받았습니다.");
    };
      
    window.Person = Person;
    
})();