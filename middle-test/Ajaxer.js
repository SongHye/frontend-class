(function(){
    
    function Ajaxer(){
    };
    
    Ajaxer.prototype.callAjax = function(callback){
        $.ajax({
           type:"GET",
           url:"NewsJson.js",
           dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
           success : function(data) {
               this.data= data;
               callback(data);
           },
           error : function(xhr, status, error) {
                 alert("에러발생");
           }
        });
    };
    window.Ajaxer = Ajaxer;

})();