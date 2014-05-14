(function(){
    
    function Ajaxer(resultNum, pageNum){       
        this.resultNum = resultNum;
        this.pageNum = pageNum;
        this.setUrl();
    };
    
    Ajaxer.prototype.setUrl = function(){
        
        this.API_URL = "http://apis.daum.net/search/web?q={query}&apikey=61c57f4ca6337460fc3480c415dbd9a7d2264d01&output=json&callback={callback}&result="+this.resultNum +"&pageno="+this.pageNum;
                
        this.query = $('#query').val();
        this.url = this.API_URL.replace('{query}',this.query).replace('{callback}','?');
    }
    
    Ajaxer.prototype.callAjax = function(callback){
        $.ajax(this.url, {
            cache : true,
            dataType : 'jsonp',
            complete : function(jqXHR, status) {
                this.data = jqXHR.responseJSON;
                this.items = this.data.channel.item;
                
                callback(this.items);
            },
        });
        return false;
    };
    
    window.Ajaxer = Ajaxer;

})();