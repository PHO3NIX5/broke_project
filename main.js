var speech_rec =window.webkitSpeechRecognition;
var recognition=new speech_rec();
draw_square="";
draw_circle="";
draw_rectangle="";
x=0;
y=0;
length=0;
width=0;
function preload(){

}
function setup(){
    canvas=createCanvas(1200,600);
    canvas.center();
}
function draw(){
    // fill(random(0,255),random(0,255),random(0,255));
    // if(draw_circle=="set"){
    //     circle(random(10,1100),random(10,500),random(10,100));
    // }
    // if(draw_square=="set"){
    //     square(random(10,1100),random(10,500),random(10,100));
    // }
    // if(draw_rectangle=="set"){
    //     rect(random(10,1100),random(10,500),random(10,100),random(10,100));
    // }
    if(draw_circle=="set"){
        circle(x,y,length)
    }
    if(draw_circle=="set"){
        square(x,y,length)
    }
    if(draw_rectangle=="set"){
        rect(x,y,length,breadth)
    }
}
function start(){
    recognition.start();
    document.getElementById("status").innerHTML="System is Listening";
x=random(10,1100);
y=random(10,500);
length=random(10,100)
breadth=random(10,100)
}

recognition.onresult=function(event){
    console.log(event);
    contents=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech identified is "+contents;
    
    if(contents=="square"){
        draw_square="set";
        
    }
    if(contents=="rectangle"){
        draw_rectangle="set";
    }
    if(contents=="circle"){
        draw_circle="set";
    }
    
}