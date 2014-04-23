(function(){

    function ArticleFinder(){
    };
        
        ArticleFinder.prototype.findArticleData = function(activeTab, data){  
            this.activeTab = activeTab;
            this.data = data;
            
            if(this.activeTab=='news'){
                return this.data[0].news;
            }else if(this.activeTab=='enter'){
                return this.data[1].enter;
            }else if(this.activeTab=='sports'){
                return this.data[2].sports;
            }
            return undefined;
        };
                 
    window.ArticleFinder = ArticleFinder;

})();