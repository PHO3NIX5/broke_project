var speech_rec =window.webkitSpeechRecognition;
var recognition=new speech_rec();
draw_square="";
draw_circle="";
draw_rectangle="";
function preload(){

}
function setup(){
    canvas=createCanvas(1200,600);
    canvas.center();
}
function draw(){
    if(draw_circle=="set"){
        circle(77,64,40);
    }
    if(draw_square=="set"){
        square(90,100,89);
    }
    if(draw_rectangle==set){
        rect(300,400,789,678)
    }
}
function start(){
    recognition.start();
    document.getElementById("status").innerHTML="System is Listening";
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
    if(contents="circle"){
        draw_circle="set";
    }
    
}