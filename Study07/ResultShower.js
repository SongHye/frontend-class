(function(){

    function SearchResultShower(){
        
        SearchResultShower.prototype.showSearchResults = function(cash){  
            this.addToResultInfo(cash,0);
        };
        
        SearchResultShower.prototype.showMoreResults = function(cash, index){ 
            this.addToResultInfo(cash,index);
        };
        
        SearchResultShower.prototype.addToResultInfo = function(cash,index){
            this.link =cash[index].link;
            this.title = cash[index].title;
            this.resultList = '<li><a href ='+this.link+'">'+ this.title+'</li>';
            $('#result').append(this.resultList);
        };
        
    }
    
    window.SearchResultShower = SearchResultShower;
    
})();