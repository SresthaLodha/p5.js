function preload(){

}
function setup(){
 createCanvas(700,400);
 video=createCapture(VIDEO);
 video.hide();

}
function draw(){
fill("red")
rect(0,0,700,400)
fill("yellow")
rect(10,10,680,380)
fill("green")
circle(5,5,80)
fill("green")
circle(700,5,80)
fill("green")
circle(0,400,80)
fill("green")
circle(700,400,80)

image(video,25,25,650,350)


}
function take_snapshot(){
   save("photo.png")
}
function apply(){

    tintcolor=document.getElementById("filter").value;
    tint(tintcolor)
}