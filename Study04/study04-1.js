var todayPhoto = [
        {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;뜨면 끝장&quot; 최강 공격헬기 성능이 설마","id":"20120516082207657"}
        ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;오늘만&#39; 필리핀 새댁 5개국어 능통 엄친딸","id":"20120516091011626"}
        ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[북한 결혼식 풍경] 신랑·신부 &quot;행복합니다&quot;","id":"20120516092605081"}
        ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;내가 더 잘해&#39; 후보GK 경기 난입해 선방","id":"20120516100608409"}
        ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"양동이의 하이킥에 타바레스 &#39;주춤&#39;","id":"20120516093313331"}
        ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"이승철 아내와 딸 사진 공개 &quot;사주에. .&quot;","id":"20120516093918544"}
        ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"생후 6개월에 프랑스로 입양됐던 아이가..","id":"20120516030614331"}
        ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;교생&#39; 김연아, 스승의날에도 인기폭발","id":"20120516092003892"}
];


var TodayImageViewer = function(){
    this.wrap = document.getElementById('wrap');
    this.preBtn = document.getElementById("preBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.nowPageNum = document.getElementById("nowPage");
    
    this.nowPageNum.innerHTML = "1/2";
    this.image = [];
    this.photoIDs = [];
    
    this.setBtnEvent();
};

TodayImageViewer.prototype = {
    
    view : function(){            
    
        for(var i=0; i<todayPhoto.length; i++){    
            this.image.push( '<li id="photo'+i+'">'+'<img src="'+todayPhoto[i].img+'"></br> '+todayPhoto[i].title+'</li>');
        }
        var imageTmp = this.image.splice(0,4);
        var img1String = imageTmp.join("");
        var img2String = this.image.join("");
    
        this.wrap.innerHTML = "<div id='photoPage1'>"+ img1String + "</div>" + "<div id='photoPage2' class='hide'>" + img2String + "</div>";
        
        this.page1 = document.getElementById("photoPage1");
        this.page2 = document.getElementById("photoPage2");
        
        for(var i=0; i<todayPhoto.length; i++) {
            this.photoIDs.push(document.getElementById("photo"+i));
            this.photoIDs[i].style.float = "left";
        }
    },
    
    setBtnEvent : function(){
        this.preBtn.addEventListener("click", this.preBtnClicked);
        this.nextBtn.addEventListener("click", this.nextBtnClicked);
    },
    
    nextBtnClicked : function(e){
        todayImageViewer.nowPageNum.innerHTML = "2/2";
        
        if(todayImageViewer.page2.className==="hide"){
          todayImageViewer.page2.className = "";
          todayImageViewer.page1.className = "hide";
        }	
    },

    preBtnClicked : function(e){
        todayImageViewer.nowPageNum.innerHTML = "1/2";
        
        if(todayImageViewer.page1.className==="hide"){
          todayImageViewer.page1.className = "";
          todayImageViewer.page2.className = "hide";
        }
    }
};

var todayImageViewer = new TodayImageViewer();   
todayImageViewer.view();
    