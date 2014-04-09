var ChessBoard = function(){
  this.element = document.getElementById("board");
  this.red = null;
  this.setBoardEvent();
};

ChessBoard.prototype = {
  makeBoard : function(color){
    this.element.innerHTML += '<span class="' + color + '"></span>';
  },
    
  setBoardEvent : function(){
    this.element.addEventListener('click', this.boardClicked.bind(this));
  },
    
  boardClicked : function(e){
    if(this.red != null){
      this.red.className = this.red.className.replace(" red", "");
    }
    e.target.className += " red";
    this.red = e.target;
  }
};

var chessBoard = new ChessBoard();
    for(var i=0; i<4; i++){
      for(var j=0; j<4; j++){
          chessBoard.makeBoard((i%2 == j%2) ? "white" : "black");
      }
}
