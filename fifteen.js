//Global variables
var blanktop=300;
var blankleft=300;

//Main function
window.onload = function () {
    "use strict";
    Setup();
    $("shufflebutton").onclick=shuffle;
    var puzzle = $$("#puzzlearea div");
    for (var i=0; i<puzzle.length;i++){
     puzzle[i].onmouseover=hover;     
    puzzle[i].onclick=function(){move(this)};
    }
    
};

//Arranging the puzzle 
function Setup(){
    var puzzle = $$("#puzzlearea div");
    
    var top, left, top1,left1;
    for (var i=0; i<puzzle.length;i++){
        puzzle[i].addClassName("puzzlepiece");
        if(i===0){
            top = 0;
            left = 0;
            top1= 0;
            left1=0;
        }
        else if(i%4===0){
            left=0;
            left1=0;
            top+=100;
            top1-=100;
    }
        else{
            left+=100;
            left1-=100;
        }
        puzzle[i].style.top = top+"px";
        puzzle[i].style.left = left+"px";
                    puzzle[i].style.backgroundPosition=left1+"px "+top1+"px";
        
    }
};


//checks if the puzzle piece is movable
function movable(elem){
    
    var elemtop=elem.offsetTop;
    var elemleft=elem.offsetLeft;
    
    if(elemleft === blankleft)
    {
        if(elemtop+100=== blanktop || elemtop-100 === blanktop){
            
            return true;}
        else{
            return false;}
    }
    else if(elemtop === blanktop){
        if(elemleft+100 === blankleft || elemleft-100===blankleft){
             
            return true;
        }
        else{
            
            return false;}
    }
    else{
        
        return false;}

        
   
};
//moves a puzzle piece into the blank space
function move(elem){
    if(movable(elem)){
   
    var elemtop=elem.offsetTop;
    var elemleft=elem.offsetLeft;
    
   
 elem.setStyle({left: blankleft+"px",top: blanktop+"px"});  
  blanktop=elemtop;
  blankleft=elemleft;
        
    }
         
    
};
//Shuffles the puzzlepieces
function shuffle(){
    var puzzle = $$(".puzzlepiece");
    for(var j=0;j<100;j++){
        for (var i=0; i<puzzle.length;i++){
            move(puzzle[Math.floor((Math.random() * 15) + 1)-1]);
            
    }
    }
};

//function for the mouse over
function hover(){
    if(movable(this)){
        this.addClassName("movablepiece");
    }
    else if(this.hasClassName("movablepiece")){
                    this.removeClassName("movablepiece");
    }
};