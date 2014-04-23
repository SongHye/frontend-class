(function(){

function ArticleShower(){
    this.tapFinder = new TapFinder(); 
    this.articleFinder = new ArticleFinder();
    };
    
    ArticleShower.prototype.init = function(data){
        this.data = data;
        this.show5Articles();
    };
    
    ArticleShower.prototype.show5Articles = function(){
      
        $(".more").show();  
        $(".tab_content").show();  
        $('.tab_content ul').html("");
        
        var activeTab = this.tapFinder.getActiveTab();
        this.newsData =  this.articleFinder.findArticleData(activeTab, this.data);
        
        this.addToArticleInfo(this.newsData, 0, 5);          
    };
    
    ArticleShower.prototype.showRemains = function(){
      
        $(".more").hide();  
               
        var activeTab = this.tapFinder.getActiveTab();        
        this.newsData = this.articleFinder.findArticleData(activeTab,this.data);
        
        this.addToArticleInfo(this.newsData, 5, this.newsData.length);         
    };

    ArticleShower.prototype.addToArticleInfo = function(data, start, end){
       
        this.newsData = data;
        this.start=start;
        this.end=end;
        
        for(var i=this.start; i<this.end; i++){
             $('.tab_content ul').append('<li><a href = "http://media.daum.net/v/'+this.newsData[i].newsId+'">'+ this.newsData[i].title+'</li>');
        }   
    };
    
  window.ArticleShower = ArticleShower;

})();