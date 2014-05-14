function tapBtnClickEvent() {
    var ajaxer = new Ajaxer();
    var articleShower = new ArticleShower();  
    
    ajaxer.callAjax(function(data){
        articleShower.init(data)
    });
    
    $('.tabs li').on('click', function(){
        $("ul.tabs li").removeClass("active").css("color","blue"); 
        $(this).addClass("active").css("color","#333"); 
        articleShower.show5Articles();
    });
    $('.more').on('click', function(){
        articleShower.showRemains();
    });
}

addLoadEvent(tapBtnClickEvent);