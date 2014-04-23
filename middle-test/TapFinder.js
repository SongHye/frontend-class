(function(){

    function TapFinder(){
    }; 
        TapFinder.prototype.getActiveTab = function(){
            for(var i=0;i<3;i++)
                if($('.tabs li')[i].className=='active')
                    return $('.tabs li')[i].id;
            return undefined;
        };
                
    window.TapFinder = TapFinder;

})();