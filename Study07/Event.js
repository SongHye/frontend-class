var resultIndex = 0;
var pageNum = 1;
var cash = new Array();

function btnClickEvent() {  
    
    $('#searchForm>button').on("click",function(event){
        console.log("submit");
        
        init();
        new Ajaxer(50, pageNum).callAjax(function(items){    
            makeCash(items);
            new SearchResultShower().showSearchResults(cash);
        });
    });
    
    $('#more').on('click', function(event){
        console.log("more");
        pageNumCheck();
        new SearchResultShower().showMoreResults(cash, resultIndex); 
    });
}

function pageNumCheck(){
    resultIndex++;
    
    if(isResultEnd()){
        pageNumChange();
        new Ajaxer(50, pageNum).callAjax(function(items){    
            makeCash(items);
            new SearchResultShower().showMoreResults(cash, resultIndex);
        });
    }
}
       
function init(){
    $("li").detach();
    cash = []; 
}

function makeCash(items){
  for(var i=0; i<items.length;i++)
      cash.push(items[i]);
}

function isResultEnd(){
    return resultIndex===50;
}

function pageNumChange(){
    pageNum++;
    cash = []; 
    resultIndex=0;
}

addLoadEvent(btnClickEvent());