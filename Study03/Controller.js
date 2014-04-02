(function(){
    
    function Contorller(){

        var zeroPhone = new Android("001", {color:"white", price:100});
        var onePhone = new IPhone("002", {color:"black", price:150});
    
        var zero = new Person("영희", zeroPhone);
        var one = new Person("철수", onePhone);
        
        zero.sendSMS(one, "안녕? 철수야.");
        one.sendSMS(zero, "반가워. 영희야!");
    
        zero.sendSMS(one, "철수야 뭐하니?");
        one.sendSMS(zero, "레포트 하고 있어");
        
        zero.phone.call();
        one.phone.call();
        
        zero.phone.useNotepad();
        one.phone.startFaceTime();  
    };

    window.Contorller = Contorller;
    
})();
